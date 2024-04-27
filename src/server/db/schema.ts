// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `portfolio_${name}`);

export const projects = createTable(
  "project",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    subtitle: varchar("subtitle", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    image: varchar("image", { length: 1024 }).notNull(),
    link: varchar("link", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (schema) => ({
    titleSubtitleIndex: index("title_subtitle_idx").on(
      schema.title,
      schema.subtitle,
    ),
  }),
);
