import { ApiMethodTypes } from '../enums/api-method-types';
import { ApiParams } from '../models/entities/api-params';

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
export function POST(params: any) {
    return this.registerRouteType(params.path, params.version, ApiMethodTypes.MethodTypes.POST);
}

/**
 * Represents the GET method of the controllers.
 * @type - Decorator
 * @param - The parameters of the call should be 'path and version'.
 * @author Roliver Javier Rodriguez
 */
export function GET(params: any) {
    return this.registerRouteType(params.path, params.version, ApiMethodTypes.MethodTypes.GET);
}

/**
 * Represents the PUT method of the controllers.
 * @type - Decorator
 * @param - The parameters of the call should be 'path and version'.
 * @author Roliver Javier Rodriguez
 */
export function PUT(params: any) {
    return this.registerRouteType(params.path, params.version, ApiMethodTypes.MethodTypes.PUT);
}


/**
 * Represents the DELETE method of the controllers.
 * @type - Decorator
 * @param - The parameters of the call should be 'path and version'.
 * @author Roliver Javier Rodriguez
 */
export function DELETE(params: any) {
    return this.registerRouteType(params.path, params.version, ApiMethodTypes.MethodTypes.DELETE);
}

/**
 * Represents the api type registration.
 * @type - Decorator
 * @param - The parameters of the call should be 'path and version'.
 * @author Roliver Javier Rodriguez, Delcio Polanco
 * 
 */
export function registerRouteType(path: string, version: any, type: string) {
    return (target, propertyKey) => {
        if (Array.isArray(version)) {
            version.forEach(_version => {
                this.registerRoute(new ApiParams(target.constructor.name, propertyKey, path, type, _version));
            });
            return;
        }
        this.registerRoute(new ApiParams(target.constructor.name, propertyKey, path, type, version));
    }
}

/**
 * Represents api registration.
 * @type - Decorator
 * @param - The parameters of the call should be 'path and version'.
 * @author Roliver Javier Rodriguez, Delcio Polanco
 */
export function registerRoute(params: ApiParams) {
    subscribers.push(params);
}
