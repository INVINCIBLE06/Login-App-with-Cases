
/**
 * This file has the model or schema for for the data whcih is stored in the data
 * There is certain eligibilty for every variable
 */

module.exports = (sequelize, Sequelize) => 
{
    
    const User = sequelize.define("user", {
        username : 
            {
                type : Sequelize.STRING, // The username must be in STRING format beacause it can contain both variables and number.
                required : true
            },
        email : 
            {
                type : Sequelize.STRING,// The email must be in STRING format beacause it can contain both variables and number.
                required : true 
            },
        password : 
            {
                type : Sequelize.STRING, // The username must be in STRING format beacause it can contain both variables and number.
                required : true
            },
        name : 
            {
                type : Sequelize.STRING, // The name in STRING format 
                required : true
            },
        mobile : 
            {
                type : Sequelize.DOUBLE, // Mobile is in double because it has ten letter. It will not come under int
                required : true
            },
            WrongPasswordCount :
            {
                type : Sequelize.STRING,
            },
            CreatedTime : 
            {
                type : Sequelize.DATE,
            },
            WrongPasswordCountTime :
            {
                type : Sequelize.STRING,
                default : () => {
                return Date.now();
            }
    }
}, 
    {
        tableName : 'users'  // The name of the table under the database    
    });
    return User; // returning the value. It will go there when some one export the this file
};