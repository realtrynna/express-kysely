import { Service } from "typedi";

import { db } from "../../config/db.config";

import type { GetLogList } from "../../types";
import {log} from "util";

@Service()
export class LogRepository {
    constructor() {
    }

    async getLogList(): Promise<GetLogList[]> {
        const logList = await db
            .selectFrom("logs")
            .selectAll()
            .execute();

        return logList;
    }
}