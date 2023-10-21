import { promises as fs } from "fs";
import path from "path";
import { Pool } from "pg";
import {
    Kysely,
    PostgresDialect,
    Migrator,
    FileMigrationProvider
} from "kysely";
import { LogTable } from "../models/tables/log.table";

export interface Database {
    User: LogTable;
}

const dialect = new PostgresDialect({
    pool: new Pool({
        database: "example",
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

/**
 * 마이그레이션은 실행 환경이 달라져도 동일하게 동작해야 한다.
 * 코드와의 의존성이 맺어지면 안된다.
 *
 * kysely는 CLI를 지원하지 않음
 */
async function migrateToLatest() {
    console.log("Run migration");

    const db = new Kysely<Database>({
        dialect: new PostgresDialect({
            pool: new Pool({
                host: '127.0.0.1',
                database: 'example',
                user: "postgres",
                password: "1234",
                port: 5432,
            }),
        }),
    })

    const migrator = new Migrator({
        db,
        provider: new FileMigrationProvider({
            fs,
            path,
            migrationFolder: path.join(__dirname, "../migrations"),
        }),
    });

    const { error, results,  } = await migrator.migrateToLatest();

    results?.forEach((it) => {
        console.log("it", it.direction);
    })

    if (error) {
        console.error('failed to migrate')
        console.error(error)
        process.exit(1)
    }

    await db.destroy()
}

migrateToLatest();