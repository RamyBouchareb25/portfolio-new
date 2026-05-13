/**
 * NextAuth.js v4 API Route
 * Handles all authentication endpoints
 * Route: /api/auth/*
 */

import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth.config';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
