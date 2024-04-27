import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

// Use this object to send drizzle queries to your DB
import * as schema from "./schema";

export const db = drizzle(sql, { schema });
