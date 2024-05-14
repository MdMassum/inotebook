const express = require('express');
const User = require('../models/User');
const router = express.Router()
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'this_is_$massum_secret_key';


const { body,validationResult } = require('express-validator'); // adding validator i.e it puts condition what is allowed to enter and what not by user

// create a user using post "api/auth/createuser". No login required
router.post('/createuser',          // path
[                         // validators
    body('password','Password must be at least 5 characters long').isLength({ min: 5 }),
    body('name','Enter valid name').notEmpty(),
    body('email','Enter valid email').isEmail(),
],
async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){   //  error found then  return bad request and errors
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        if(await User.findOne({email:req.body.email})){         // email already exists -->
            return res.status(400).json({ error: "Sorry!! User with this email already exists" });
        }

        // if no error found in validation then create user and store in database
        // console.log(req.body);
        const salt = await bcrypt.genSalt(10);  // salt for adding in password
        const secPassword = await bcrypt.hash(req.body.password, salt); 
        // Hashing password  or simply do bcrypt.hash(req.body.password,10);
        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password: secPassword,
        })

        // res.send(req.body)  // instead of sending data directly we will send jwt(json web token) 
        const payload = {
            user: {
                id: newUser.id // Assuming your User model has an 'id' field
            }
        };

        const token = jwt.sign(payload, JWT_SECRET);
        res.json({ token }); // Return the JWT to the client upon successful user creation

        // another method to store in db
        // const user = User(req.body)
        // user.save();
        // res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }    
})

// Authenticate a user using POST "/api/auth/login". No login required
router.post('/login',
[
body('email','Enter valid email').isEmail(),   // validators
body('password','Password cannot by empty').exists(),
],
async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){   //  error found then  return bad request and errors
        return res.status(400).json({ errors: errors.array() });
    }
    const{email,password} = req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please Enter Correct Email Or Password !!!"});
        }
        const passwordComp = await bcrypt.compare(password,user.password);
        if(!passwordComp){
            return res.status(400).json({error:"Please Enter Correct Email Or Password !!!"});
        }

        const payload = {
            user: {
                id: user.id 
            }
        };
        const token = jwt.sign(payload, JWT_SECRET);
        res.json({ token }); // Return the JWT to the client upon successful user creation

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }

})
module.exports = router;
