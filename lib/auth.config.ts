/**
 * NextAuth.js v4 Configuration
 * Integrates with Prisma User model for authentication
 */

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { verifyPassword } from "./auth";
import { type Adapter } from "next-auth/adapters";

/**
 * NextAuth.js configuration options
 * Supports both Credentials (email/password) and OAuth providers
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    /**
     * Credentials Provider - Email/Password Authentication
     * Uses the User model with hashed passwords (bcryptjs)
     */
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "admin@portfolio.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        if (!user.active) {
          throw new Error("Account is inactive");
        }

        // Verify password
        const isPasswordValid = await verifyPassword(
          credentials.password,
          user.password,
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        // Return user object for session
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        };
      },
    }),

    /**
     * GitHub OAuth Provider
     * Requires: GITHUB_ID and GITHUB_SECRET in .env.local
     */
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),

    /**
     * Google OAuth Provider
     * Requires: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env.local
     */
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  /**
   * Pages configuration - customize auth pages
   */
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },

  /**
   * Session configuration
   */
  session: {
    strategy: "jwt", // Use JWT for stateless sessions
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // Update every 24 hours
  },

  /**
   * JWT configuration
   */
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  /**
   * Callbacks for customizing NextAuth behavior
   */
  callbacks: {
    /**
     * jwt callback - Add custom properties to JWT
     */
    async jwt({ token, user }: any) {
      if (user) {
        token.id = (user as any).id || user.id;
        token.role = (user as any).role || "USER";
        token.email = user.email;
      }
      return token;
    },

    /**
     * session callback - Add custom properties to session
     */
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role;
      }
      return session;
    },

    /**
     * signIn callback - Control who can sign in
     */
    async signIn({ user, account }) {
      // Allow credentials and OAuth sign-in
      if (account?.type === "credentials" || account?.provider) {
        // Check if user is active
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email || "" },
        });

        if (!dbUser?.active) {
          return false; // Prevent inactive users from signing in
        }

        return true;
      }
      return false;
    },

    /**
     * redirect callback - Control post-login redirects
     */
    async redirect({ url, baseUrl }) {
      // Redirect to admin dashboard after login
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      } else if (new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl + "/admin/";
    },
  },

  /**
   * Events for logging and monitoring
   */
  events: {
    async signIn({ user, account }) {
      console.log(
        `User signed in: ${user.email} via ${account?.provider || "credentials"}`,
      );
    },
    async signOut() {
      console.log("User signed out");
    },
  },

  /**
   * Enable debug in development
   */
  debug: process.env.NODE_ENV === "development",
};
