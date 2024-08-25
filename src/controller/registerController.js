/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";

// ========== Node Module ==========
const bcrypt = require("bcrypt");

// ========== Custom Module ==========
const User = require("../model/userModel");
const generateUsername = require("../utils/generateUsername");

// ==========  Render the register page ==========
const renderRegister = (req, res) => {
  res.render("pages/register");
};

// ========== Save user data in server ==========
const postRegister = async (req, res) => {
  try {
    // Destructuring the user data
    const { name, email, password } = req.body;
    // generate the unique username
    const username = generateUsername(name);
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // make user using provided data
    await User.create({ name, username, email, password: hashedPassword });
    // redirect the user to login page
    res.redirect("/login");
  } catch (error) {
    // handling error for unique value
    if (error.code === 11000) {
      if (error.keyPattern.email) {
        return res.status(400).send({
          message: "This email is already associate in another account",
        });
      }
      if (error.keyPattern.username) {
        return res.status(400).send({
          message: "This is username already use in another account",
        });
      }
    } else {
      return res.status(400).send({
        message: `Field to register user. <br/> ${error.message}`,
      });
    }

    // log the error to see why error occurred
    console.log("postRegister Error", error.message);
    throw error;
  }
};

// ========== export module ==========
module.exports = {
  renderRegister,
  postRegister,
};
