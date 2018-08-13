import { Database } from '../database';

/**
 * Database Entity
 * @name Users   
 * @default
 * @author Roliver Javier Rodriguez
 */

let database = Database.getInstance();
let bookshelf = database.getConnection();

var Users = bookshelf.Model.extend({
    tableName: 'users'
});

export default Users;

