import Users from '../models/Users';
import { ApiVersion } from '../enums/api-version.enum';
import { GET } from '../utilities/Decorators';

/**
 * Represent the controller of a User's management
 * @name UserController   
 * @class
 * @author Roliver Javier Rodriguez
 */
export class UserController {

    constructor() { }

    @GET({ path: "/findAllUsers", version: ApiVersion.V1 })
    public getAllUser(req, resp): void {
        Users.fetchAll().then(function (res) {
            resp.status(200).json(res);
        });
    }

    @GET({ path: "/sayHi", version: [ApiVersion.V1, ApiVersion.V2] })
    public realizarReclamacion(req, resp): void {
        resp.status(200).json('{greetings:"Hello world"}');
    }

}
