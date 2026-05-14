/**
 * Database utility functions for common Prisma operations
 * Provides reusable patterns for fetching, creating, updating data
 */

import { prisma } from "./prisma";
import type {
  User,
  About,
  Project,
  Skill,
  Certification,
  CVFile,
  BlogPost,
} from "@prisma/client";

// ============================================================================
// USER / AUTH OPERATIONS
// ============================================================================

export async function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function createUser(data: {
  email: string;
  password: string;
  name?: string;
  role?: "ADMIN" | "USER";
}): Promise<User> {
  return prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      name: data.name,
      role: data.role || "ADMIN",
    },
  });
}

export async function updateUser(
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>,
): Promise<User> {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: string): Promise<User> {
  return prisma.user.delete({
    where: { id },
  });
}

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      active: true,
      createdAt: true,
    }, // Exclude password from list responses
  }) as any;
}

// ============================================================================
// ABOUT / PROFILE OPERATIONS
// ============================================================================

export async function getAbout(): Promise<About | null> {
  return prisma.about.findUnique({
    where: { id: 1 },
  });
}

export async function ensureAboutExists(): Promise<About> {
  const existing = await getAbout();
  if (existing) return existing;

  return prisma.about.create({
    data: {
      id: 1,
      name: "Your Name",
      title: "Your Title",
      summary: "",
      bio: "",
    },
  });
}

export async function updateAbout(data: Partial<About>): Promise<About> {
  return prisma.about.upsert({
    where: { id: 1 },
    update: data,
    create: {
      id: 1,
      name: data.name || "Your Name",
      title: data.title || "Your Title",
      summary: data.summary || "",
      bio: data.bio || "",
      yearsExp: data.yearsExp || "0",
      deploymentsCount: data.deploymentsCount || "0",
      uptimeSla: data.uptimeSla || "0",
      clustersManaged: data.clustersManaged || "0",
    },
  });
}

// ============================================================================
// PROJECT OPERATIONS
// ============================================================================

export async function getAllProjects(): Promise<Project[]> {
  return prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getProjectsByStatus(status: string): Promise<Project[]> {
  return prisma.project.findMany({
    where: { status: status as any },
    orderBy: { createdAt: "desc" },
  });
}

export async function getProject(id: number): Promise<Project | null> {
  return prisma.project.findUnique({
    where: { id },
  });
}

export async function createProject(
  data: Omit<Project, "id" | "createdAt" | "updatedAt">,
): Promise<Project> {
  return prisma.project.create({
    data,
  });
}

export async function updateProject(
  id: number,
  data: Partial<Project>,
): Promise<Project> {
  return prisma.project.update({
    where: { id },
    data,
  });
}

export async function deleteProject(id: number): Promise<Project> {
  return prisma.project.delete({
    where: { id },
  });
}

// ============================================================================
// SKILL OPERATIONS
// ============================================================================

export async function getAllSkills(): Promise<Skill[]> {
  return prisma.skill.findMany({
    orderBy: { category: "asc" },
  });
}

export async function getSkillsByCategory(category: string): Promise<Skill[]> {
  return prisma.skill.findMany({
    where: { category },
    orderBy: { level: "desc" },
  });
}

export async function createSkill(
  data: Omit<Skill, "id" | "createdAt" | "updatedAt">,
): Promise<Skill> {
  return prisma.skill.create({
    data,
  });
}

export async function updateSkill(
  id: number,
  data: Partial<Skill>,
): Promise<Skill> {
  return prisma.skill.update({
    where: { id },
    data,
  });
}

export async function deleteSkill(id: number): Promise<Skill> {
  return prisma.skill.delete({
    where: { id },
  });
}

// ============================================================================
// CERTIFICATION OPERATIONS
// ============================================================================

export async function getAllCertifications(): Promise<Certification[]> {
  return prisma.certification.findMany({
    orderBy: { year: "desc" },
  });
}

export async function createCertification(
  data: Omit<Certification, "id" | "createdAt" | "updatedAt">,
): Promise<Certification> {
  return prisma.certification.create({
    data,
  });
}

export async function updateCertification(
  id: number,
  data: Partial<Certification>,
): Promise<Certification> {
  return prisma.certification.update({
    where: { id },
    data,
  });
}

export async function deleteCertification(id: number): Promise<Certification> {
  return prisma.certification.delete({
    where: { id },
  });
}

// ============================================================================
// CV FILE OPERATIONS
// ============================================================================

export async function getActiveCVFile(): Promise<CVFile | null> {
  return prisma.cVFile.findFirst({
    where: { active: true },
  });
}

export async function getAllCVFiles(): Promise<CVFile[]> {
  return prisma.cVFile.findMany({
    orderBy: { uploadedAt: "desc" },
  });
}

export async function createCVFile(
  data: Omit<CVFile, "id" | "createdAt" | "updatedAt" | "uploadedAt">,
): Promise<CVFile> {
  // If this is being set as active, deactivate all others first
  if (data.active) {
    await prisma.cVFile.updateMany({
      data: { active: false },
    });
  }

  return prisma.cVFile.create({
    data: {
      ...data,
      uploadedAt: new Date(),
    },
  });
}

export async function updateCVFileActive(id: string): Promise<CVFile> {
  // Deactivate all CV files
  await prisma.cVFile.updateMany({
    data: { active: false },
  });

  // Activate the selected one
  return prisma.cVFile.update({
    where: { id },
    data: { active: true },
  });
}

export async function deleteCVFile(id: string): Promise<CVFile> {
  return prisma.cVFile.delete({
    where: { id },
  });
}

// ============================================================================
// BLOG POST OPERATIONS
// ============================================================================

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  return prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
  });
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  return prisma.blogPost.findMany({
    where: { status: "PUBLISHED", featured: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  return prisma.blogPost.findUnique({
    where: { slug },
  });
}

export async function createBlogPost(
  data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">,
): Promise<BlogPost> {
  return prisma.blogPost.create({
    data,
  });
}

export async function updateBlogPost(
  id: number,
  data: Partial<BlogPost>,
): Promise<BlogPost> {
  return prisma.blogPost.update({
    where: { id },
    data,
  });
}

export async function deleteBlogPost(id: number): Promise<BlogPost> {
  return prisma.blogPost.delete({
    where: { id },
  });
}

export async function incrementBlogPostViews(
  slug: string,
): Promise<BlogPost | null> {
  return prisma.blogPost.update({
    where: { slug },
    data: { views: { increment: 1 } },
  });
}

// ============================================================================
// SEARCH OPERATIONS
// ============================================================================

export async function searchProjects(query: string): Promise<Project[]> {
  return prisma.project.findMany({
    where: {
      OR: [{ title: { search: query } }, { description: { search: query } }],
    },
    orderBy: {
      _relevance: {
        fields: ["title", "description"],
        search: query,
        sort: "desc",
      },
    } as any,
  });
}

export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  return prisma.blogPost.findMany({
    where: {
      OR: [{ title: { search: query } }, { content: { search: query } }],
    },
    orderBy: {
      _relevance: {
        fields: ["title", "content"],
        search: query,
        sort: "desc",
      },
    } as any,
  });
}
