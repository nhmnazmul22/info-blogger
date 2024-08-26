/**
 * @license Apache-2.0
 * @copyright 2024 Nhm Nazmul
 */
"use strict";

// ========== node module =========
const Route = require("express").Router();

// ========== custom module =========
const { renderLogin, postLogin } = require("../controller/loginController");

// GET Route: Render the login form
Route.get("/", renderLogin);

// POST Route: handler user login submission form
Route.post("/", postLogin);

module.exports = Route;
