/**
 * This file has the code for making the connection with the database 
 */

const Sequelize = require('sequelize'); // Import the sequelize library afte install it 
const dbConfig = require('../configs/db'); // Import this the databse crenditials
const env = "development"; // Initialization the env variable
const dbSettings = dbConfig[env]; // Here dbSettings is getting all the credential which are there in db.js

// All the database details are abstracted here for making the connection
const sequelize = new Sequelize
(
    dbSettings.database, // database name 
    dbSettings.username, // current user sql server 
    dbSettings.password, // password for confirmation the 
    dbSettings.dialectInformation, // IT will have the localhost. 
    // Dialect is used to for running the json query in SQL. With the help of 
    // we are not required to write the sql command for doing the query part.
    // It come with the sequelize library. 
    {
        logging: false,
    }
);

const db = { Sequelize, sequelize}; 

db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db ; // export statement
