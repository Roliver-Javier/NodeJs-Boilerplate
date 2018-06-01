import * as express from 'express';
import {Enums} from '../models/Enums';
import {subscribers} from '../utilities/Decorators';

/**
 * This class represents all the services that will be part of the api's first version.
 * @author Roliver Javier Rodriguez
 */
export class Version1{
    private postRoutes : express.Router = express.Router();
    private getRoutes : express.Router = express.Router();
    private app : any;
    private controllers : any = {};

    public constructor(app, controllers){
        this.app = app;
        this.controllers = controllers;
    }

    /**
     * See all the subscribed services with the first version and make it part of the app as a route 
     * @function
     * @author Roliver Javier Rodriguez
     */
    public lookUpServices(){
        var servicesSubscribed = subscribers.filter(function(item){
            return item.version === 1;
        });

        for(var i = 0; i < servicesSubscribed.length; i++){
            var path = servicesSubscribed[i].path,
                method = this.controllers[servicesSubscribed[i].className][servicesSubscribed[i].methodName],
                type = servicesSubscribed[i].type;
            switch(type){
                case Enums.MethodTypes.POST:
                    this.postRoutes.post(path,method);
                    this.app.use('/post', this.postRoutes);
                break;

                case Enums.MethodTypes.GET:
                    this.postRoutes.get(path,method);
                    this.app.use('/get', this.postRoutes);
                break;
            }
        }
        
    }

   
  
};