import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

/**
 * Hash password using bcryptjs (same as auth system)
 */
async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

async function main() {
  try {
    // Create or update admin user
    const hashedPassword = await hashPassword("admin123456");
    const user = await prisma.user.upsert({
      where: { email: "admin@portfolio.com" },
      update: {},
      create: {
        email: "admin@portfolio.com",
        password: hashedPassword,
        name: "Portfolio Admin",
        role: "ADMIN",
        active: true,
      },
    });
    console.log("✓ Admin user seeded:", user.email);

    // Create or update the About (Profile) record - singleton
    const about = await prisma.about.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        name: "Your Name",
        title: "DevOps & Infrastructure Expert",
        summary:
          "Experienced DevOps engineer specializing in Kubernetes, cloud infrastructure, and CI/CD pipelines.",
        bio: "Full biography here...",
        location: "Your Location",
        email: "email@example.com",
        github: "https://github.com/yourname",
        linkedin: "https://linkedin.com/in/yourname",
        twitter: "@yourhandle",
        yearsExp: "10+",
        deploymentsCount: "500+",
        uptimeSla: "99.9%",
        clustersManaged: "50+",
      },
    });
    console.log("✓ About record seeded:", about);

    // Create sample skills
    const skills = await prisma.skill.createMany({
      data: [
        {
          name: "Kubernetes",
          category: "Container Orchestration",
          level: 95,
          detail: "CKA certified, 5+ years production experience",
        },
        {
          name: "Terraform",
          category: "Infrastructure as Code",
          level: 90,
          detail: "AWS, multi-region deployments",
        },
        {
          name: "AWS",
          category: "Cloud Infrastructure",
          level: 85,
          detail: "EKS, EC2, S3, RDS, Lambda",
        },
        {
          name: "CI/CD",
          category: "CI/CD & Automation",
          level: 90,
          detail: "GitHub Actions, GitLab CI, ArgoCD, Jenkins",
        },
        {
          name: "Observability",
          category: "Observability",
          level: 85,
          detail: "Prometheus, Grafana, ELK Stack, DataDog",
        },
      ],
      skipDuplicates: true,
    });
    console.log(`✓ ${skills.count} skills seeded`);

    // Create sample projects
    const projects = await prisma.project.createMany({
      data: [
        {
          title: "Multi-Region K8s Cluster",
          description:
            "Highly available Kubernetes infrastructure spanning 3 AWS regions with automatic failover.",
          tags: ["Kubernetes", "AWS", "Terraform", "DevOps"],
          status: "PRODUCTION",
          github: "https://github.com/example/project1",
          demo: "https://example.com",
        },
        {
          title: "GitOps Pipeline Framework",
          description:
            "Complete GitOps workflow with ArgoCD and progressive delivery using Flagger.",
          tags: ["ArgoCD", "Git", "Automation", "CI/CD"],
          status: "ACTIVE",
          github: "https://github.com/example/project2",
        },
        {
          title: "Observability Stack",
          description:
            "Full observability platform with Prometheus, Grafana, and OpenTelemetry.",
          tags: ["Monitoring", "Observability", "DevOps"],
          status: "PRODUCTION",
        },
      ],
      skipDuplicates: true,
    });
    console.log(`✓ ${projects.count} projects seeded`);

    // Create sample certifications
    const certifications = await prisma.certification.createMany({
      data: [
        {
          name: "Certified Kubernetes Administrator",
          issuer: "CNCF",
          year: "2023",
          badge: "CKA",
          credentialId: "LF-123456",
          url: "https://www.cncf.io/certification/cka/",
        },
        {
          name: "AWS Certified Solutions Architect - Professional",
          issuer: "Amazon Web Services",
          year: "2022",
          badge: "AWS-SAP",
          url: "https://aws.amazon.com/certification/",
        },
      ],
      skipDuplicates: true,
    });
    console.log(`✓ ${certifications.count} certifications seeded`);

    console.log("✅ Seeding completed successfully");
  } catch (e) {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
