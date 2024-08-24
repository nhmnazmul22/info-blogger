/**
 * @license Apache-2.0
 * @copyright 2024 Nhm Nazmul
 */
"use strict";
// ========== node module ==========
const express = require("express");
const dotenv = require("dotenv");

// ========== custom module=========
const register = require("./src/routes/registerRoute");
const { connectDB, disconnectDB } = require("./src/config/mongooseConfig");

// ========== intial express =========
const app = express();
dotenv.config();

// ========== setting view engine ========
app.set("view engine", "ejs");

// ========== setting static directory ========
app.use(express.static(`${__dirname}/public`));

// ========== parse urlencoded body ========
app.use(
  express.urlencoded({
    extended: true,
  })
);

// ========== Api End point ========
app.use("/register", register);

// ========== Server listen ==========
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, async () => {
  console.log(`Server running on port: http//:localhost:${PORT}`);
  await connectDB(process.env.MONGO_CONNECTION_URL);
});

// ========== Close Server ==========
server.on("close", async () => await disconnectDB());
