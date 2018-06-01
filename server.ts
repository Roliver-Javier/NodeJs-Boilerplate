import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import {Version1} from './router/v1';
import config from './config/main';
import { DBController } from './controllers/DBController';
import {UserController} from './controllers/UserController';

export class server{
    //init express
    app = express();
    
    constructor(){    
        //express middleware
        this.app.use(bodyParser.urlencoded({extended : false}));
        this.app.use(bodyParser.json());
        this.app.use(new cookieParser());

        //init Controllers
        var controllers = {
            'UserController': new UserController()
        }
        //init routes
        var v1 = new Version1(this.app,controllers);
            v1.lookUpServices();
        
        this.app.listen(config.port,()=>{
            console.log('server listening on port ${config.port}');
        });
    }
};
new server();
