
/**
 * This is a serverconfig file in this we have the port detail.
 * Whcih has been import from the environment variable. * 
 * From it has been export to other file where it is required
 */


require('dotenv').config();

module.exports = 
{
    PORT : process.env.PORT
}

