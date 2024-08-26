/**
 * @license Apache-2.0
 * @copyright 2024 Nhm Nazmul
 */
"use strict";
// ========== node module ==========
const bcrypt = require("bcrypt");
// ========== Custom module ==========
const User = require("../model/userModel");
const { captureRejectionSymbol } = require("connect-mongo");

// ==========  Render the login page ==========
const renderLogin = (req, res) => {
  res.render("pages/login");
};

// ==========  Handel user login submission form==========
const postLogin = async (req, res) => {
  try {
    // destructure the user login data
    const { email, password } = req.body;
    // Find user data using email
    const currentUser = await User.findOne({ email: email });
    if (!currentUser) {
      return res.status(400).send({
        message: "User not found with email. Please Enter Valid email!!",
        type: "error",
      });
    }
    // Checking password valid or not
    const isValidPassword = await bcrypt.compare(
      password,
      currentUser.password
    );
    if (!isValidPassword) {
      return res.status(400).send({
        message: "Please, Enter a valid password!!",
        type: "error",
      });
    }
    // create user session and redirect the home page
    req.session.user = {
      userAuthenticated: true,
      name: currentUser.name,
      username: currentUser.username,
      profilePhoto: currentUser.profilePhoto?.url,
    };
    return res.redirect("/");
  } catch (error) {
    console.log("Login PostError:", error);
    return res.status(400).send({
      message: `Field to Login. <br/> ${error.message}`,
    });
  }
};

// ========== Export Module ==========
module.exports = {
  renderLogin,
  postLogin,
};
