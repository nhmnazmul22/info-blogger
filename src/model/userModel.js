/**
 * @license Apache-2.0
 * @copyright 2024 Nhm Nazmul
 */
"use strict";

// ========== Node module ==========
const mongoose = require("mongoose");

// ========== Mongoose schema for user data ==========
const UserSchema = new mongoose.Schema(
  {
    profilePhoto: {
      url: String,
      public_Id: String,
    },
    name: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    bio: String,
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
    blog: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Blog",
    },
    blogPublished: {
      type: Number,
      default: 0,
    },
    reactedBlogs: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Blog",
    },
    totalVisited: {
      type: Number,
      default: 0,
    },
    totalReactions: {
      type: Number,
      default: 0,
    },
    readingList: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Blog",
    },
  },
  {
    timestamps: true,
  }
);

// ========== Node module ==========
const UserModel = mongoose.model("user", UserSchema);

// ========== Export Module ==========
module.exports = UserModel;
