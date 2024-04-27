import { pgTableCreator } from "drizzle-orm/pg-core";
const createTable = pgTableCreator((name) => `portfolio_${name}`);
export default createTable;
