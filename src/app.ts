import "reflect-metadata";

import express from "express";
import type { Application } from "express";
import { Container } from "typedi";
import {
    useContainer as routingUseContainer,
    useExpressServer
} from "routing-controllers";

import { controllerConfig } from "./config";

export class App {
    private _app: Application;

    constructor() {
        this._app = express();
    }

    bootstrap(port?: number) {
        routingUseContainer(Container);
        useExpressServer(this._app, controllerConfig);

        this._app.listen(port ? port : 1000, () => console.log(port));
    }
}