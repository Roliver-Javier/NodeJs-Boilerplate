import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import config from './config/main';
import { Router } from './router/route.routes';


export class server {
    constructor() {
        const app = express();
        const routes = new Router().getRoutes();

        //express middleware
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(new cookieParser());
        app.use(morgan('dev'));
        app.use('/api', routes);

        app.listen(config.port, () => {
            console.log(`server running at http://${config.database.host}:${config.port}`);
            console.log(`api running at http://${config.database.host}:${config.port}/api`);
        });
    }
};
new server();
