/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";

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

  // submit button enable and show error message when password and confirm password don't match
  if (formData.get("password") !== formData.get("confirmPassword")) {
    submitBtn.removeAttribute("disabled");
    // Show error message
    console.error(
      "Password and Confirm password don't match. Please, try again!!"
    );
    return;
  }

  // Send account create request to server
  const body = new URLSearchParams(
    Object.fromEntries(formData.entries())
  ).toString();

  const response = await fetch(`${window.location.origin}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
  });

  if (response.ok) {
    // redirect user to login page
    return (window.location = response.url);
  } else {
    console.error("User Create field!!");
  }
});
