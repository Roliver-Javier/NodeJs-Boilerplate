import * as Express from 'express';
import {DBController} from '../../controllers/DBController';

/**
 * Database Entity
 * @name Users   
 * @default
 * @author Roliver Javier Rodriguez
 */

let database  = DBController.getInstance();
let bookshelf =  database.getConnection();

var Users = bookshelf.Model.extend({
    tableName: 'users'
});

export default Users;

