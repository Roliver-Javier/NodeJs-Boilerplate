import {Version1} from '../router/v1';
import { Enums } from '../models/Enums';
import config from '../config/main.js';

/**
 * Store all the service that use decorators.
 * @field - Decorator.
 * @author Roliver Javier Rodriguez
 */
export var subscribers = [];
/**
 * Represents the POST method of the controllers.
 * @type - Decorator
 * @param - The parameters of the call should be 'path and version'.
 * @author Roliver Javier Rodriguez
 */
export function POST(params){
    return (target,propertyKey, propertyDescriptor: PropertyDescriptor)=>{
        for(var i = 0; i < params.version.length; i++){
            var param = {
                path: params.path,
                type: Enums.MethodTypes.POST,
                className: target.constructor.name,
                version: params.version[i],
                methodName: propertyKey
            };
            subscribers.push(param);
        }
    }
}

/**
 * Represents the GET method of the controllers.
 * @type - Decorator
 * @param - The parameters of the call should be 'path and version'.
 * @author Roliver Javier Rodriguez
 */
export function GET(params){
    return (target,propertyKey, propertyDescriptor: PropertyDescriptor)=>{
        for(var i = 0; i < params.version.length; i++){
            var param = {
                path: params.path,
                type: Enums.MethodTypes.GET,
                className: target.constructor.name,
                version: params.version[i],
                methodName: propertyKey
            };
            subscribers.push(param);
        }
    }
}
