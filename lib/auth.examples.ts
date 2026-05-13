/**
 * Example: Basic User Authentication Usage
 * This file demonstrates how to use the User model and authentication functions
 */

// ============================================================================
// EXAMPLE 1: Register a New User (Admin Dashboard)
// ============================================================================

/*
import { registerUser } from '@/lib/auth';

async function handleRegisterAdmin() {
  try {
    const newAdmin = await registerUser(
      'admin@portfolio.com',
      'secure-password-here',
      'Admin Name'
    );

    console.log('Admin created:', newAdmin.id, newAdmin.email);
    // Returns: { id, email, password, name, role, active, createdAt, updatedAt }
  } catch (error) {
    console.error('Registration failed:', error.message);
    // "User with this email already exists" or other errors
  }
}
*/

// ============================================================================
// EXAMPLE 2: User Login (API Route)
// ============================================================================

/*
import { authenticateUser } from '@/lib/auth';

// File: app/api/auth/login/route.ts
export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const user = await authenticateUser(email, password);
    // user.password is excluded from the returned object

    // Now you can:
    // 1. Create a JWT token
    // 2. Set a session cookie
    // 3. Return the user data

    return Response.json({ success: true, user });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 401 }
    );
  }
}
*/

// ============================================================================
// EXAMPLE 3: Get User Profile
// ============================================================================

/*
import { getUserProfile } from '@/lib/auth';

async function getUserData(userId: string) {
  try {
    const profile = await getUserProfile(userId);
    console.log('User:', profile.name, profile.email);
    // Returns user WITHOUT password
  } catch (error) {
    console.error('User not found:', error.message);
  }
}
*/

// ============================================================================
// EXAMPLE 4: Change Password
// ============================================================================

/*
import { changePassword } from '@/lib/auth';

async function handleChangePassword(
  userId: string,
  oldPassword: string,
  newPassword: string
) {
  try {
    await changePassword(userId, oldPassword, newPassword);
    console.log('Password updated successfully');
  } catch (error) {
    console.error('Password change failed:', error.message);
    // "Current password is incorrect" or "User not found"
  }
}
*/

// ============================================================================
// EXAMPLE 5: Direct Database Operations
// ============================================================================

/*
import {
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from '@/lib/db';

// Get all users (passwords excluded)
const allUsers = await getAllUsers();

// Get specific user
const user = await getUserById('user-id-here');
const userByEmail = await getUserByEmail('user@example.com');

// Update user
await updateUser('user-id', {
  name: 'Updated Name',
  role: 'USER',
  active: false,
});

// Delete user
await deleteUser('user-id');
*/

// ============================================================================
// EXAMPLE 6: NextAuth Integration (Recommended for Production)
// ============================================================================

/*
// 1. Install NextAuth.js
// npm install next-auth

// 2. Create auth configuration file: lib/auth/config.ts
import { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authenticateUser } from '@/lib/auth';

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await authenticateUser(
            credentials.email as string,
            credentials.password as string
          );
          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;

// 3. Create API route: app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import { authConfig } from '@/lib/auth/config';

const handlers = NextAuth(authConfig);
export const { GET, POST } = handlers;
*/

// ============================================================================
// SETUP INSTRUCTIONS
// ============================================================================

/*

1. Install dependencies:
   npm install bcryptjs @types/bcryptjs

2. Create database migration:
   npm run prisma:migrate -- --name add_users

3. First, ensure User table is created:
   SELECT * FROM "users";

4. Use the examples above in your API routes or server actions

5. For production, consider:
   - Using NextAuth.js for session management
   - Implementing password reset with email verification
   - Adding 2FA for admin accounts
   - Rate limiting on login attempts
   - Logging authentication attempts
   - Using HTTPS only

*/

export {}; // Make this a module
