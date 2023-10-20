import {
    JsonController,
    Controller,
    Get,
    HttpCode,
} from "routing-controllers";
import { Service } from "typedi";

import { LogService } from "../providers/log.service";

/**
 * default transform serialization
 */
@JsonController("/log")
// @Controller()
@Service()
export class LogController {
    constructor(
        private readonly logService: LogService
    ) {
    }

    @HttpCode(200)
    @Get()
    async getLogList() {
        return await this.logService.getLogList();
    }
}