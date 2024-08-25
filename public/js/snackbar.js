/**
 * @license Apache-2.0
 * @copyright 2024  Nhm Nazmul
 */
"use strict";

// ========== DOM Variables ==========
const snackbarWrapper = document.querySelector("[data-snackbar-wrapper]");
let lastTimeOut = null;

//  ========== create snackbar ==========
const Snackbar = (props) => {
  const snackbar = document.createElement("div");
  snackbar.classList.add("snackbar");
  props.type && snackbar.classList.add(props.type);
  snackbar.innerHTML = `${props.message}`;

  // remove previous snackbar and add new snackbar
  snackbarWrapper.innerHTML = "";
  snackbarWrapper.append(snackbar);

  // remove snackbar after 10 seconds
  clearInterval(lastTimeOut);
  lastTimeOut = setTimeout(() => {
    snackbarWrapper.removeChild(snackbar);
  }, 10000);
};

export default Snackbar;
