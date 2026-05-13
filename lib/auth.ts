/**
 * Authentication helper functions
 * Quick utilities for password hashing and verification
 * Install bcryptjs first: npm install bcryptjs
 */

import * as bcrypt from "bcryptjs";
import { getUserByEmail, getUserById, createUser, updateUser } from "./db";

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Verify a password against its hash
 */
export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Register a new user with email and password
 */
export async function registerUser(
  email: string,
  password: string,
  name?: string,
) {
  // Check if user already exists
  const existing = await getUserByEmail(email);
  if (existing) {
    throw new Error("User with this email already exists");
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  return createUser({
    email,
    password: hashedPassword,
    name: name || undefined,
    role: "ADMIN",
  });
}

/**
 * Authenticate user with email and password
 * Returns user object without password if valid
 */
export async function authenticateUser(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.active) {
    throw new Error("Account is inactive");
  }

  // Verify password
  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    throw new Error("Invalid password");
  }

  // Return user without password for security
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

/**
 * Change user password
 */
export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string,
) {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Verify current password
  const isValid = await verifyPassword(currentPassword, user.password);
  if (!isValid) {
    throw new Error("Current password is incorrect");
  }

  // Hash new password and update
  const hashedPassword = await hashPassword(newPassword);
  return updateUser(userId, { password: hashedPassword });
}

/**
 * Get user profile (returns user without password)
 */
export async function getUserProfile(userId: string) {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const { password: _, ...userProfile } = user;
  return userProfile;
}
