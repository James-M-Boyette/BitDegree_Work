"use strict";
const form = document.querySelector("#signUpForm");

form.addEventListener("click", function(event) {
    form.classList.toggle("border-emphasize");
    console.log("*Selected a field*");
    console.log(event);
});