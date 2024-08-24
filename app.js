/**
 * @license Apache-2.0
 * @copyright 2024 Nhm Nazmul
 */
"use strict";
// ========== node module ==========
const express = require("express");

// ========== custom module=========
const register = require("./src/routes/registerRoute");

// ========== intial express =========
const app = express();

// ========== setting view engine ========
app.set("view engine", "ejs");

// ========== setting static directory ========
app.use(express.static(`${__dirname}/public`));

// ========== Api End point ========
app.use("/register", register);

// ========== Server listen ==========

app.listen(3000, () => {
  console.log(`Server runing on port: http//:localhost:3000`);
});
