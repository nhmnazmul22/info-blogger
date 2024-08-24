/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";

// ========== Generating unique username ==========
const generateUsername = (name) => {
  const username = name.toLowerCase().replace(" ", "");
  const uniqueUserName = `${username}-${Date.now()}`;
  return uniqueUserName;
};

// ========== Export Module ==========
module.exports = generateUsername;
