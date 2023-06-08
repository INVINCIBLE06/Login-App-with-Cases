/** 
 * 1 This file is created to store the DATABASE details.",
 * 2 I have stored the database details in the env file.
 * 3 I have just fetch the credential here and used them init file for maiking the connection" 
 */
const path = require('dotenv') // Importing the details from the environment file.
path.config({ 
    path :"./.env",
});
module.exports = {
     development: {
        username: "root", // name of the username. It can be changes as per the convience
        password: "", // The is no password till now. But we can make one if it is required
        database : process.env.database, // The actual name of the datbase. 
        dialectInformation: 
        {
            dialect : "mysql",
            host : "localhost"
            
        }
    }
}