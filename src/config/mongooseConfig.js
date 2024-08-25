/**
 * @license Apache-2.0
 * @copyright 2024 Nhm Nazmul
 */
"use strict";

// ========== node module ==========
const mongoose = require("mongoose");

// ========== clients option of mongoDB connection ==========
const clientOpt = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
  dbName: "Info-Blogger",
};

// ========== connect the mongoDB using connection string ==========
const connectDB = async (connectionUrl) => {
  try {
    await mongoose.connect(connectionUrl, clientOpt);
    console.log("MongoDB Connection Successful");
  } catch (error) {
    console.error("MongoDB Connection Filed", error.message);
    throw error;
  }
};

// ========== disconnect the mongoDB using mongoose ==========
const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnect Successful");
  } catch (error) {
    console.error("MongoDB disconnect Filed", error.message);
    throw error;
  }
};

// export module
module.exports = {
  connectDB,
  disconnectDB,
};
