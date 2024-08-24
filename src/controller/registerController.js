/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";

//  Render the register page
const renderRegister = (req, res) => {
  res.render("pages/register");
};

// post user data
const postRegister = (req, res) => {};

// export module
module.exports = {
  renderRegister,
  postRegister,
};
