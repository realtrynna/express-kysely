import { Kysely, sql } from 'kysely';

import { Database } from "../config/db.config";

export async function up(db: Kysely<Database>): Promise<void> {

    await db.schema
        .createTable("posts")
        .addColumn("id", "serial", col => col.primaryKey())
        .addColumn("title", "varchar(32)", col => col.notNull())
        .addColumn("content", "text", col => col.notNull())
        .addColumn("url", "varchar", col => col.notNull())
        .execute()
}

export async function down(db: Kysely<Database>): Promise<void> {
    await db.schema.dropTable("posts");
}