"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth.config";
import {
  updateAbout,
  createProject,
  updateProject,
  deleteProject,
  createSkill,
  updateSkill,
  deleteSkill,
  createCertification,
  updateCertification,
  deleteCertification,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  createCVFile,
  updateCVFileActive,
  deleteCVFile,
} from "./db";
import type {
  About,
  Project,
  Skill,
  Certification,
  BlogPost,
  CVFile,
} from "@prisma/client";

/**
 * Check if user is admin
 */
async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ADMIN") {
    throw new Error("Unauthorized: Admin access required");
  }
}

// ============================================================================
// ABOUT ACTIONS
// ============================================================================

export async function updateAboutAction(
  data: Partial<About>,
): Promise<{ success: boolean; data?: About; error?: string }> {
  try {
    await requireAdmin();
    const result = await updateAbout(data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update about",
    };
  }
}

// ============================================================================
// PROJECT ACTIONS
// ============================================================================

export async function createProjectAction(
  data: Omit<Project, "id" | "createdAt" | "updatedAt">,
): Promise<{ success: boolean; data?: Project; error?: string }> {
  try {
    await requireAdmin();
    const result = await createProject(data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to create project",
    };
  }
}

export async function updateProjectAction(
  id: number,
  data: Partial<Project>,
): Promise<{ success: boolean; data?: Project; error?: string }> {
  try {
    await requireAdmin();
    const result = await updateProject(id, data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update project",
    };
  }
}

export async function deleteProjectAction(
  id: number,
): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAdmin();
    await deleteProject(id);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to delete project",
    };
  }
}

// ============================================================================
// SKILL ACTIONS
// ============================================================================

export async function createSkillAction(
  data: Omit<Skill, "id" | "createdAt" | "updatedAt">,
): Promise<{ success: boolean; data?: Skill; error?: string }> {
  try {
    await requireAdmin();
    const result = await createSkill(data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create skill",
    };
  }
}

export async function updateSkillAction(
  id: number,
  data: Partial<Skill>,
): Promise<{ success: boolean; data?: Skill; error?: string }> {
  try {
    await requireAdmin();
    const result = await updateSkill(id, data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update skill",
    };
  }
}

export async function deleteSkillAction(
  id: number,
): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAdmin();
    await deleteSkill(id);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete skill",
    };
  }
}

// ============================================================================
// CERTIFICATION ACTIONS
// ============================================================================

export async function createCertificationAction(
  data: Omit<Certification, "id" | "createdAt" | "updatedAt">,
): Promise<{ success: boolean; data?: Certification; error?: string }> {
  try {
    await requireAdmin();
    const result = await createCertification(data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to create certification",
    };
  }
}

export async function updateCertificationAction(
  id: number,
  data: Partial<Certification>,
): Promise<{ success: boolean; data?: Certification; error?: string }> {
  try {
    await requireAdmin();
    const result = await updateCertification(id, data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to update certification",
    };
  }
}

export async function deleteCertificationAction(
  id: number,
): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAdmin();
    await deleteCertification(id);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to delete certification",
    };
  }
}

// ============================================================================
// BLOG POST ACTIONS
// ============================================================================

export async function createBlogPostAction(
  data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">,
): Promise<{ success: boolean; data?: BlogPost; error?: string }> {
  try {
    await requireAdmin();
    const result = await createBlogPost(data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to create blog post",
    };
  }
}

export async function updateBlogPostAction(
  id: number,
  data: Partial<BlogPost>,
): Promise<{ success: boolean; data?: BlogPost; error?: string }> {
  try {
    await requireAdmin();
    const result = await updateBlogPost(id, data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update blog post",
    };
  }
}

export async function deleteBlogPostAction(
  id: number,
): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAdmin();
    await deleteBlogPost(id);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to delete blog post",
    };
  }
}

// ============================================================================
// CV FILE ACTIONS
// ============================================================================

export async function createCVFileAction(
  data: Omit<CVFile, "id" | "createdAt" | "updatedAt" | "uploadedAt">,
): Promise<{ success: boolean; data?: CVFile; error?: string }> {
  try {
    await requireAdmin();
    const result = await createCVFile(data);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to create CV file",
    };
  }
}

export async function uploadCVFileAction(
  formData: FormData,
): Promise<{ success: boolean; data?: CVFile; error?: string }> {
  try {
    await requireAdmin();

    const file = formData.get("file");
    if (!(file instanceof File)) {
      return { success: false, error: "No file was provided" };
    }

    if (file.type !== "application/pdf") {
      return { success: false, error: "Only PDF files are allowed" };
    }

    const maxSizeBytes = 10 * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return { success: false, error: "File is larger than 10MB" };
    }

    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    const bucket = process.env.AWS_BUCKET_NAME;
    const region = process.env.AWS_REGION || "auto";
    const endpoint = process.env.AWS_S3_ENDPOINT || process.env.R2_ENDPOINT;

    if (!accessKeyId || !secretAccessKey || !bucket) {
      return {
        success: false,
        error:
          "Missing storage configuration. Set AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_BUCKET_NAME.",
      };
    }

    const client = new S3Client({
      region,
      endpoint,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const key = `cv/${Date.now()}-${safeName}`;

    const body = Buffer.from(await file.arrayBuffer());
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: "application/pdf",
      }),
    );

    const publicBaseUrl =
      process.env.AWS_PUBLIC_BASE_URL || process.env.R2_PUBLIC_BASE_URL;
    const trimmedBase = publicBaseUrl?.replace(/\/$/, "");
    const trimmedEndpoint = endpoint?.replace(/\/$/, "");

    const fileUrl = trimmedBase
      ? `${trimmedBase}/${key}`
      : trimmedEndpoint
        ? `${trimmedEndpoint}/${bucket}/${key}`
        : `https://${bucket}.s3.${region}.amazonaws.com/${key}`;

    const created = await createCVFile({
      filename: file.name,
      url: fileUrl,
      size: `${Math.round(file.size / 1024)} KB`,
      active: false,
    });

    return { success: true, data: created };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to upload CV file",
    };
  }
}

export async function setActiveCVFileAction(
  id: string,
): Promise<{ success: boolean; data?: CVFile; error?: string }> {
  try {
    await requireAdmin();
    const result = await updateCVFileActive(id);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to set active CV",
    };
  }
}

export async function deleteCVFileAction(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAdmin();
    await deleteCVFile(id);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to delete CV file",
    };
  }
}
