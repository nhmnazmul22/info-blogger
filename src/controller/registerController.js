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

// ========== post user data ==========
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
  } catch (error) {}
};

// ========== export module ==========
module.exports = {
  renderRegister,
  postRegister,
};
