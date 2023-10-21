import { Service } from "typedi";

import { db } from "../../config/db.config";

import type { GetLogList } from "../../types";

@Service()
export class LogRepository {
    constructor() {
    }

    async getLogList(): Promise<GetLogList[]> {
        const logList = await db
            .selectFrom("User")
            .selectAll()
            .execute();

        return logList;
    }
}