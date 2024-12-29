const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
// GET /user/register
router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isEmail().isLength({ min: 10 }),
  body("password").trim().isLength({ min: 6 }),
  body("username").trim().isLength({ min: 3 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data",
      });
    }

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt round meaning the number of characters in the hashed password.
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    res.json(newUser);
  }
);

router.get("login", (req, res) => {
  res.render("login");
});

module.exports = router;
