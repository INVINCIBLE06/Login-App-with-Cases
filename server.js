/**
 * I have made this my main file from where my code 
 * will perfectly starts running and providing the desired output
 */
const app = require('./app'); // Import the details from the app.js file

const serverConfig = require("./configs/server.config"); // Importing the details

/**
 * The below line code is written for connect with the server with the help of the portno which is some other place
 */

app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port no : ${serverConfig.PORT}`);
 });