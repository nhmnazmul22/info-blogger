/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";

/**
 * === DOM Variables
 */

const form = document.querySelector("[data-form]");
const submitBtn = document.querySelector("[data-submit-btn]");

// Handling signup form

form.addEventListener("submit", (event) => {
  // prevent default form submission behavior
  event.preventDefault();
  // disable the submit button to prevent multiple submission
  submitBtn.setAttribute("disabled", "");
});
