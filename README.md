1. Just find a way to store projects in the github
2. Video for this project --: https://youtu.be/Q-icS7yZz5k?si=qujnuMuqvf9Io_Ww&t=7004

# JWT Token
It is used for authentication


# Flowbite
It gives previously designed components that are going to be use in development of the frontend. It use tailwind CSS


# express validator
This validates the data that it is true of not.
Install - npm i express-validator
Code --: 
const { body, validationResult } = require("express-validator");
router.post(
  "/register",
  body("email").trim().isEmail().isLength({ min: 10 }),
  body("password").trim().isLength({ min: 6 }),
  body("username").trim().isLength({ min: 3 }),
  (req,res)=> {
  //code
  })

# Password hashing
We cannot store password in the database in the plane format, that in future if database got leaked so the anyone who leaked doesnot have our plane password thing.

To do this we use extra module named --: bcrypt
Install --: npm i bcrypt
