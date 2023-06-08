/**
 * This file has the logic for signin and checking the username and password
 * The detail of the user have been imported from the database
 * Inside the SIGNIN function the code has been written which is exported from
 * here to other file 
 */

// Bcryptjs is library is used for hashing the password
const bcrypt = require('bcryptjs');  //import the bcryptjs file after install it in the variable bcrypt.
const db = require('../models'); // Data from the model folder is imported here. Basically it just check the dataypes, tablesname and databse connection a
const User = db.user; // the details are in User variable now

/**This is a SIGNIN function */

exports.signup = (req, res) =>
{
    User.create
    ({
        username : req.body.username,
        email : req.body.email,
        name : req.body.name,
        mobile : req.body.mobile,
        password : bcrypt.hashSync(req.body.password,8)
    }).then(user =>{
        res.status(200).send
        ({ 
            message : "Signup Successfull",                              
            username : user.username, 
            email : user.email,
            name : user.name,
            mobile : user.mobile,
            createdAt : user.createdAt,
            CreatedTime : user.CreatedTime     
        });    
    })
}
    exports.signin =  (req, res) => 
    {
        User.findOne    // findOne method will be used to findone the entered data 
        ({
            where : 
                {
                    username : req.body.username // here the value will go under username which is entered by the user in postman for checking 
                }
        }).then
                (user =>{
                        if(!user){ // If the username is not available to use then it come here send the written message
                        return res.status(404).send({ message : "Please enter correct username "});
                        }
                        /**
                         * The password are saved in hashed manner in database. It is not in its actual form.
                         * it is done with the help of bcrypt. 
                         * 
                         * comparesync will reinstaitiate it to its actual form and compare it with password 
                         * entered by the user.
                         * 
                         * if it is correct then it will come true or if it doesn't
                         * mached then it will be false.
                         * 
                         */
                        var validpassword = bcrypt.compareSync(req.body.password, user.password);
                        // If value is value then it will go inside it
                        if(!validpassword)
                        {
                            let WrongPasswordCountCode = user.WrongPasswordCount;
                            user.WrongPasswordCountCode = WrongPasswordCountCode + 1 ; 
                            console.log(user.WrongPasswordCount);
                            console.log(WrongPasswordCountCode);
                            res.status(404).send({ message : "Password is not Entered or it is incorrected"})                
                            //return res.status(404).send({ message : "Password is not Entered or it is incorrected"});            
                        }
                        // If both the statements are correct then it will go inside else statement
                        else{                      
                            res.status(200).send({ message : "Login Successfull" ,                              
                                    username : user.username, // Username of the login person will be displayed
                                    email : user.email,   // email of the login person will be displayed                                                               
                                    name : user.name, // name of the login person will be displayed
                                    mobile : user.mobile, // mobile number of the login person will be displayed
                                    createdAt : user.CreatedTime
                                });
                            }
                        });
}