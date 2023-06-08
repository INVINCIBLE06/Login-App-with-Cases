const db = require('./models'); // Importing the required details
const bcrypt = require('bcryptjs'); // Importing the bcrypt function afte installing it
/**
 * The below function has the details of different user which will be entered in the database
 */
module.exports = function()
{
    var userdata = 
    [{
        username : "RAK1",
        password : bcrypt.hashSync("123456", 10),
        email : "rak@gmailcom",
        name : "Rakesh Yadav",
        mobile : 9579653810
    }]
    /**
     * The below code will create data and as there are more than
     * one user data which will be in different rows. that is why bulkcreate is used.     * 
     */
    db.user.bulkCreate(userdata).then(() => {
        console.log("Data Entered");
    }).catch((err) => {
        console.log("Error", err);
    })
};
