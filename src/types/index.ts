import {
    Insertable,
    Selectable,
    Updateable,
} from "kysely";
import { LogTable } from "../models/tables/log.table";

export type GetLogList = Selectable<LogTable>;
export type CreateLog = Insertable<LogTable>;
