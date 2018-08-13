import * as express from 'express';
import { ApiParams } from '../models/entities/api-params';
import { GET, subscribers } from '../utilities/Decorators';
import { UserController } from '../controllers/UserController';

const api = express.Router();

/**
 * This class represents all the services that will be part of the api's first version.
 * @author Roliver Javier Rodriguez
 */
export class Router {
    private controllers = {
        UserController: new UserController()
    };

    public constructor() {
        subscribers.forEach((param: ApiParams) => {
            if (!this.controllers[param.ClassName]) {
                return;
            }
            const path = param.Version + param.ClassName + param.Path;
            const method = this.controllers[param.ClassName][param.MethodName];
            const type = param.Type;

            api[String(type).toLocaleLowerCase()](path, method);
        });

    }

    /**
     * Returns all routes registered
     * @author Delcio Polanco
     */
    public getRoutes() {
        return api;
    }
};