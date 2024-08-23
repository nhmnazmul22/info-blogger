/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";
// ========== node module =========
const route = require("express").Router();

// ========== custom module =========
const { renderRegister } = require("../controller/registerController");

// GET Route: Render the register form
route.get("/", renderRegister);

// export module
module.exports = route;
