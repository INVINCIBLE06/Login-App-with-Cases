const db = require('../models');
const User = db.user;
validator = require('email-validator');

const CheckDuplicateUsernameMobileOrEmail = (req, res, next) => 
{        
    // This one is for the Email part
        User.findOne 
        ({
                where : 
                    {
                        username : req.body.username
                    }
        }).then(user => 
                { // This Then is still open
                    if(user)
                        {
                            res.status(400).send
                                ({
                                    message : "Failed ! Username is already used someone else. You need to look for something other"
                                });
                                return;
                        }
    // This One is for Email    
    User.findOne 
        ({
                where : 
                    {
                        email : req.body.email
                    }
        }).then(user => 
            {
                if(user)
                    {
                        res.status(400).send
                            ({
                                message : "Failed ! Someone already have this email."
                            });
                            return;
                    }

    // This One is for the mobile number
    User.findOne  
        ({
            where : 
                {
                    mobile : req.body.mobile
                }
        }).then(user => 
            {
                if(user)
                    {
                        res.status(400).send
                            ({
                                message : "Failed ! Someone already have this phone number."
                            });
                        return;
                    }
                next();
            });
        });
    });
};

const ValidateSchemaVar = (req, res, next) => {

    User.findAll({        
        where : {
            email : req.body.email
        }
    }).then(user => {
        if(user)
        {
            // (email2 = (validator.validate(req.body.email)));
            // if( email2 != true)
            if ((email2 = (validator.validate(req.body.email))) != true)
                        {
                            console.log(email2)
                            res.status(400).send
                            ({
                                message : "Failed email is not in correct form."
                            });
                            return;
                        }
                        else
                        {
                            next();
                        }
        }
    });
};
const DuplicateCheck = 
                        { 
                            CheckDuplicateUsernameMobileOrEmail : CheckDuplicateUsernameMobileOrEmail, 
                            ValidateSchemaVar : ValidateSchemaVar 
                        };

module.exports = DuplicateCheck;