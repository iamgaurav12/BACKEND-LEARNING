
# Video for this project --: https://youtu.be/Q-icS7yZz5k?si=qujnuMuqvf9Io_Ww&t=7004


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
Code --: 
const bcrypt = require("bcrypt");
const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt round meaning the number of characters in the hashed password.
    const newUser = await userModel.create({
      password: hashedPassword,
    });


# JWT
Jsonwebtoken is generated when login is successfull.
Install - npm i jsonwebtoken
Need -: If user is logged In or not It is used with the help of it so that logged user have it's authentication.
Code --:
const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET
    );

    res.json({
      token,
    });
It generate a token which is send to frontend with help of 'cookies'
To install cookies --: npm i cookie-parser
Code --:
res.cookie("token", token);
res.send("Logged in successfully");

Why we save token in the cookie? 
Ans --: When browers sends request, it also sends cookie with that particular request.

# Firebase
We use firebase for saving file , we also see how to use firebase.
It is paid.


# Firebase-admin
It helps to connect express to the firebase.



