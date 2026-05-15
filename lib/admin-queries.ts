"use server";

import {
  getAbout,
  getAllProjects,
  getAllSkills,
  getAllCertifications,
  getAllBlogPosts,
  getAllCVFiles,
  getAllPhotoFiles,
} from "./db";

export async function getAdminAbout() {
  try {
    return await getAbout();
  } catch (error) {
    console.error("Failed to fetch about:", error);
    return null;
  }
}

export async function getAdminProjects() {
  try {
    return await getAllProjects();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export async function getAdminSkills() {
  try {
    return await getAllSkills();
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return [];
  }
}

export async function getAdminCertifications() {
  try {
    return await getAllCertifications();
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    return [];
  }
}

export async function getAdminBlogPosts() {
  try {
    return await getAllBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export async function getAdminCVFiles() {
  try {
    return await getAllCVFiles();
  } catch (error) {
    console.error("Failed to fetch CV files:", error);
    return [];
  }
}

export async function getAdminPhotoFiles() {
  try {
    return await getAllPhotoFiles();
  } catch (error) {
    console.error("Failed to fetch photo files:", error);
    return [];
  }
}
