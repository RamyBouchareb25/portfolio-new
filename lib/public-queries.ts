"use server";

import {
  getAbout,
  getAllProjects,
  getAllExperiences,
  getAllSkills,
  getAllCertifications,
  getAllBlogPosts,
  getActiveCVFile,
} from "./db";

export async function getPublicAbout() {
  try {
    return await getAbout();
  } catch (error) {
    console.error("Failed to fetch about:", error);
    return null;
  }
}

export async function getPublicProjects() {
  try {
    return await getAllProjects();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export async function getPublicExperiences() {
  try {
    return await getAllExperiences();
  } catch (error) {
    console.error("Failed to fetch experiences:", error);
    return [];
  }
}

export async function getPublicSkills() {
  try {
    return await getAllSkills();
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return [];
  }
}

export async function getPublicCertifications() {
  try {
    return await getAllCertifications();
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    return [];
  }
}

export async function getPublicBlogPosts() {
  try {
    return await getAllBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export async function getPublicActiveCV() {
  try {
    return await getActiveCVFile();
  } catch (error) {
    console.error("Failed to fetch active CV:", error);
    return null;
  }
}
