const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require('../../configs/token.configs');
const Models = require('../../models');
const User = Models.user;
const authController = require('../../controllers/user.controller');
const {mockRequest, mockResponse} = require('../interceptor');

/**
 * Test for sign up method
 * 1. Successful signup when user provides roles
 * 2. Successful signup when user doesn't provide roles
 * 3. Failed signup when user are providing wrong roles  
 */

let req, res;
beforeEach(() =>
    {
        req = mockRequest();
        res = mockResponse();
    });

describe("Test for signup method of auth controller", ()=>
{
    it("Successful signup", async() =>
    {
        
    });

    it("", async() =>
    {

    });
});