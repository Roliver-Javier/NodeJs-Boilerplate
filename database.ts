import * as Bookshelf from 'bookshelf';
import * as Knex from 'knex';
import config from './config/main.js';

/**
 * Represents the connection of the database using bookshelf.
 * Using the Singleton Design Pattern to make just one instance for the connection.
 * @name Database
 * @class
 * @author Roliver Javier Rodriguez
 */
export class Database {

    private static database: Database;
    private bookshelf: Bookshelf;

    private constructor() {
        var knex = Knex({
            client: config.database.dialect,
            connection: {
                host: config.database.host,
                user: config.database.user,
                password: config.database.password,
                database: config.database.database,
                charset: config.database.sharset
            }
        });
        this.bookshelf = new Bookshelf(knex);
    }


    public static getInstance(): Database {
        return this.database || (this.database = new this());
    }

    public getConnection = function () {
        return this.bookshelf;
    }

};