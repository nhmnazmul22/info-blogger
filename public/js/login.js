/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";

// ========== import module ==========
import Snackbar from "./snackbar.js";
// ========== DOM Variables ==========
const form = document.querySelector("[data-form]");
const submitBtn = document.querySelector("[data-submit-btn]");

// ========== Handling signup form ==========
form.addEventListener("submit", async (event) => {
  // prevent default form submission behavior
  event.preventDefault();

  // disable the submit button to prevent multiple submission
  submitBtn.setAttribute("disabled", "");

  // create formData object to capture form data
  const formData = new FormData(form);

  // Send account create request to server
  const body = new URLSearchParams(
    Object.fromEntries(formData.entries())
  ).toString();

  const response = await fetch(`${window.location.origin}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
  });

  if (response.ok) {
    // redirect user to login page
    return (window.location = response.url);
  }

  // handler error when user bad request or when status code is 400
  if (response.status === 400) {
    const { message } = await response.json();
    submitBtn.removeAttribute("disabled");
    // show snackbar when error ocurred
    Snackbar({
      message: message,
      type: "error",
    });
  }
  // handler error when user request url not found or when status code is 404
  if (response.status === 404) {
    submitBtn.removeAttribute("disabled");
    Snackbar({
      message: "Your requested url not found!!",
      type: "error",
    });
  }
});
