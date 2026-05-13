/**
 * NextAuth.js Hooks and Utilities
 * Client-side utilities for using authentication in components
 */

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { Session } from "next-auth";

/**
 * Hook to get current session and loading state
 */
export function useAuth() {
  const { data: session, status } = useSession();

  return {
    session,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
    user: session?.user,
    userRole: (session?.user as any)?.role || "USER",
  };
}

/**
 * Hook for sign in with redirect
 */
export function useSignIn() {
  const router = useRouter();

  return async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.ok) {
        router.push("/admin/");
        router.refresh();
      }

      return result;
    } catch (error) {
      console.error("Sign in failed:", error);
      throw error;
    }
  };
}

/**
 * Hook for sign out with redirect
 */
export function useSignOut() {
  const router = useRouter();

  return async () => {
    try {
      await signOut({ redirect: false });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
      throw error;
    }
  };
}

/**
 * Hook for OAuth sign in (GitHub, Google, etc.)
 */
export function useOAuthSignIn() {
  const router = useRouter();

  return async (provider: "github" | "google") => {
    try {
      const result = await signIn(provider, {
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.ok) {
        router.push("/admin/");
        router.refresh();
      }

      return result;
    } catch (error) {
      console.error(`${provider} sign in failed:`, error);
      throw error;
    }
  };
}

/**
 * Hook to check if user has admin role
 */
export function useIsAdmin() {
  const { userRole, isAuthenticated } = useAuth();
  return isAuthenticated && userRole === "ADMIN";
}

/**
 * Hook to require authentication (server-side)
 * Use in server components or API routes
 */
export async function requireAuth(session: Session | null) {
  if (!session) {
    throw new Error("Unauthorized: No active session");
  }
  return session;
}

/**
 * Hook to require admin role (server-side)
 */
export async function requireAdmin(session: Session | null) {
  if (!session) {
    throw new Error("Unauthorized: No active session");
  }

  const userRole = (session.user as any)?.role;
  if (userRole !== "ADMIN") {
    throw new Error("Forbidden: Admin access required");
  }

  return session;
}
