import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import { LogTable } from "../models/tables/log.table";

export interface Database {
    logs: LogTable;
}

const dialect = new PostgresDialect({
    pool: new Pool({
        database: "article",
        host: "127.0.0.1",
        user: "postgres",
        password: "1234",
        port: 5432,
        max: 10,
    })
});

export const db = new Kysely<Database>({
    dialect
});