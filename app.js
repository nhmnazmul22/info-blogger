/**
 * @license Apache-2.0
 * @copyright 2024 Nhm Nazmul
 */
"use strict";
// ========== node module ==========
const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// ========== custom module=========
const register = require("./src/routes/registerRoute");
const login = require("./src/routes/loginRoute");
const { connectDB, disconnectDB } = require("./src/config/mongooseConfig");

// ========== initial express =========
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

// ========== instance of express session store ========
const store = new MongoStore({
  mongoUrl: process.env.MONGO_CONNECTION_URL,
  collectionName: "sessions",
  dbName: "Info-Blogger",
});

// ========== initial express session ========
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: Number(process.env.SESSION_MAX_AGE),
    },
  })
);

// ========== Register page ========
app.use("/register", register);

// ========== Login page ========
app.use("/login", login);

// ========== Server listen ==========
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, async () => {
  console.log(`Server running on port: http//:localhost:${PORT}`);
  await connectDB(process.env.MONGO_CONNECTION_URL);
});

// ========== Close Server ==========
server.on("close", async () => await disconnectDB());
