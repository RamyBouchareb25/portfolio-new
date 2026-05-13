/**
 * TypeScript types for Prisma models
 * These are re-exports from @prisma/client with additional helper types
 */

import type {
  User,
  About,
  Project,
  Skill,
  Certification,
  CVFile,
  BlogPost,
  AdminLog,
} from "@prisma/client";

// Re-export Prisma types
export type {
  User,
  About,
  Project,
  Skill,
  Certification,
  CVFile,
  BlogPost,
  AdminLog,
};

// Import enums
export { ProjectStatus, BlogPostStatus, UserRole } from "@prisma/client";

// Extended types with relations (if needed in future)
export type ProjectWithRelations = Project;

export type SkillWithRelations = Skill;

export type CertificationWithRelations = Certification;

export type CVFileWithRelations = CVFile;

export type BlogPostWithRelations = BlogPost;

// Utility types for forms and inputs
export type CreateAboutInput = Omit<About, "id" | "createdAt" | "updatedAt">;

export type UpdateAboutInput = Partial<CreateAboutInput>;

export type CreateProjectInput = Omit<
  Project,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateProjectInput = Partial<CreateProjectInput>;

export type CreateSkillInput = Omit<Skill, "id" | "createdAt" | "updatedAt">;

export type UpdateSkillInput = Partial<CreateSkillInput>;

export type CreateCertificationInput = Omit<
  Certification,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateCertificationInput = Partial<CreateCertificationInput>;

export type CreateCVFileInput = Omit<
  CVFile,
  "id" | "createdAt" | "updatedAt" | "uploadedAt"
>;

export type UpdateCVFileInput = Partial<CreateCVFileInput>;

export type CreateBlogPostInput = Omit<
  BlogPost,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateBlogPostInput = Partial<CreateBlogPostInput>;

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
