import * as express from 'express';
import Users from '../models/entities/Users'
import { POST,GET} from '../utilities/Decorators';

/**
 * Represent the controller of a User's management
 * @name UserController   
 * @class
 * @author Roliver Javier Rodriguez
 */
export class UserController{

    constructor(){ }

    @GET({path:"/findAllUsers",version:[1]})    
    public getAllUser(req,resp):void{   
        Users.fetchAll().then(function(res){
            resp.status(200).json(res);
        });
    }

    @GET({path:"/sayHi",version:[1,2]})
    public realizarReclamacion(req,resp):void{
        resp.status(200).json('{greetings:"Hello world"}');
    }

}
