import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// The Neon serverless driver talks to Postgres over WebSockets.
// Node.js serverless functions need an explicit WebSocket implementation.
neonConfig.webSocketConstructor = ws;

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  // Don't throw here: this module is loaded at build time, and a missing
  // variable must not fail the whole deployment. Queries will fail (and be
  // reported as errors by the API routes) until DATABASE_URL is configured.
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("[prisma] DATABASE_URL is not set — database calls will fail.");
  }
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
