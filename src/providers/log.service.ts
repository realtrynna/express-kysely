import { Service } from "typedi";

import { LogRepository } from "../models/repositories/log.repository";
import {log} from "util";

@Service()
export class LogService {
    constructor(
        private readonly logRepository: LogRepository
    ) {
    }

    async getLogList() {
        const logList = await this.logRepository.getLogList();

        return logList;
    }
}