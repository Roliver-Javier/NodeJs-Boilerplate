import config from '../config/main.js';
import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

/**
 * Represents the connection of the database using bookshelf.
 * Using the Singleton Design Pattern to make just one instance for the connection.
 * @name DBController
 * @class
 * @author Roliver Javier Rodriguez
 */
export class DBController{
    
    private static dbContrl:DBController;
    private bookshelf: Bookshelf;  

    private constructor(){
        var knex = Knex({
            client: config.database.dialect,
            connection:{
                host: config.database.host,
                user: config.database.user,
                password: config.database.password,
                database: config.database.database,
                charset: config.database.sharset
            }
        });
        this.bookshelf = new Bookshelf(knex);
    }


    public static getInstance():DBController{
        return this.dbContrl || (this.dbContrl = new this());
    }

    public getConnection = function(){
            return this.bookshelf;
    }

};