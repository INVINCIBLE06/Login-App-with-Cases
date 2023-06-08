const path = require('dotenv') // Importing the details from the environment file.
path.config({ 
    path :"./.env",
});

module.exports = 
{
    development: 
    {
       username: "root", // name of the username. It can be changes as per the convience
       password: "", // The is no password till now. But we can make one if it is required
       database : process.env.testDatabase, // The actual name of the datbase. 
       dialectInformation: 
       {
           dialect : "mysql",
           host : "localhost"
       }
   }
}