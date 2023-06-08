// Express help us to connect with the database it makes it easy aswell. We can do it 
// with the help of http function. 
const express = require("express"); // Importing express library after installing it using npm i express 
const app = express(); // Intializing the app variable with express details
const db = require('./models'); // Import the model data 
/**
 * body-parser it used expose the json data into http requet body
 * bodyParser.urlencoded will helps expose or read the form data 
 */

const bodyParser = require('body-parser'); // Importing bodyParser library after installing it using npm i body-parser 
const init = require("./init");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const init = require('./init'); // importing the init.js file

/**
 * The below code will sync the database and delete all the present recode.
 * Because we have written force : true. If force : false then the old data will not be deleted. 
 * It is done by the sequelize library 
 */
db.sequelize.sync({ force : false}).then(() => {
    console.log("Table created");
    // init(); // After deleting it go in init variable which has the detail that is needed to be entered
});

module.exports = app;  // exporting app

require('./routes/user.route')(app); // importing the route function and it has app details
