/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";
// ========== node module =========
const route = require("express").Router();

// ========== custom module =========
const {
  renderRegister,
  postRegister,
} = require("../controller/registerController");

// GET Route: Render the register form
route.get("/", renderRegister);

// POST Route: get user data
route.post("/", postRegister);

// export module
module.exports = route;
