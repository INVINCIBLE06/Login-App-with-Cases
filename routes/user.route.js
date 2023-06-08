
// This file has the code which is used for checking the API with the help of POSTMAN
const controller = require('../controllers/user.controller'); // Importing the usercontrioller file
const  VerifySignup = require("../middleware/index");

module.exports = function(app)
{
    /**
     * The below line has the API we must enter in the postman search bar along with 
     * "http://localhost:PORT Number" with this. The Port number is in the .env file. 
     * 
     * We will make a post call because we will sigin and we get back some detail details in return 
     * 
     * controller.signin will work in this way. AS we have already import controller details
     * it will go in the sigin function of th controller and give the user entered value and that function will check
     * that return the output. 
     * 
     * signin function had req res. It will done with the help of that
     * 
     */  
    
    app.post("/ecomm/api/v1/auth/signup", VerifySignup.CheckDuplicateUsernameMobileOrEmail, VerifySignup.ValidateSchemaVar, controller.signup); 

    // http://localhost:8509/ecomm/api/v1/auth/signup

    app.post("/ecomm/api/v1/auth/signin", controller.signin);

    // http://localhost:8509/ecomm/api/v1/auth/signin

}