import { RoutingControllersOptions } from "routing-controllers";

import { LogController } from "../controllers/log.controller";

export const controllerConfig: RoutingControllersOptions = {
    cors: true,
    routePrefix: "api",
    // controllers: [`${__dirname}/../controllers/*{.ts,.js}`],
    controllers: [LogController],
    middlewares: [`${__dirname}/../middlewares/*{.ts,.js}`]
};

