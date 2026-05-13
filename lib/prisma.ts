import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
    // Pass adapter for direct database connection (Prisma 7)
    // The connection URL comes from prisma.config.ts via DATABASE_URL env var
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
