"use strict";
// Assignment 3.11, "Add More Event Handlers"

// (imported Assignment 3.10 script ...)
// Store & log the (parent) "signUpForm" element
const form = document.querySelector("#signUpForm");
console.log(form);

// Store & log all of "signUpForm"s children
const formElements = form.children;
console.log("Here's the form.children elements:");
console.log(formElements);

// ONLY "input" children stored
const fName = form.children.fname;
const lName = form.children.lName;
const address1 = form.children.address1;
const address2 = form.children.address2;
const userCity = form.children.userCity;
const userState = form.children.userState;
const userPhone = form.children.userPhone;

// Event listener for mouse-over form event
form.addEventListener("mouseenter", function(){console.log("User considering sign-up ...");});

// Event listener for mouse-away event
form.addEventListener("mouseleave", function(){console.log("User LEFT sign-up ...");});


// <-- BEGIN ASSIGNMENT 3.11 CONTENT -->


// Event listeners for mouse-over input fields
fName.addEventListener("mouseenter", function(){console.log("User considering first name field...");});
lName.addEventListener("mouseenter", function(){console.log("User considering last name field...");});
address1.addEventListener("mouseenter", function(){console.log("User considering address1 field...");});
address2.addEventListener("mouseenter", function(){console.log("User considering address2 field...");});
userCity.addEventListener("mouseenter", function(){console.log("User considering city field...");});
userState.addEventListener("mouseenter", function(){console.log("User considering state field...");});
userPhone.addEventListener("mouseenter", function(){console.log("User considering phone number field...");});

// Event listeners for mouse-away-from input fields
fName.addEventListener("mouseleave", function(){console.log("User LEFT first name field...");});
lName.addEventListener("mouseleave", function(){console.log("User LEFT last name field...");});
address1.addEventListener("mouseleave", function(){console.log("User LEFT address1 field...");});
address2.addEventListener("mouseleave", function(){console.log("User LEFT address2 field...");});
userCity.addEventListener("mouseleave", function(){console.log("User LEFT city field...");});
userState.addEventListener("mouseleave", function(){console.log("User LEFT state field...");});
userPhone.addEventListener("mouseleave", function(){console.log("User LEFT phone number field...");});

// Event listeners for selection and de-selection of input field selections
fName.onclick = function(){
    console.log("User **SELECTED** first name field...");
    fName.setAttribute("style", "color:white; background:black");
};
fName.onblur = function(){
    fName.setAttribute("style", "color:black; background:white; border-color: rgb(119, 136, 153)");
};
lName.onclick = function(){
    console.log("User **SELECTED** last name field...");
    lName.setAttribute("style", "color:white; background:black");
};
lName.onblur = function(){
    lName.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
address1.onclick = function(){
    console.log("User **SELECTED** address1 field...");
    address1.setAttribute("style", "color:white; background:black");
};
address1.onblur = function(){
    address1.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
address2.onclick = function(){
    console.log("User **SELECTED** address2 field...");
    address2.setAttribute("style", "color:white; background:black");
};
address2.onblur = function(){
    address2.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
userCity.onclick = function(){
    console.log("User **SELECTED** city field...");
    userCity.setAttribute("style", "color:white; background:black");
};
userCity.onblur = function(){
    userCity.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
userState.onclick = function(){
    console.log("User **SELECTED** state field...");
    userState.setAttribute("style", "color:white; background:black");
};
userState.onblur = function(){
    userState.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
userPhone.onclick = function(){
    console.log("User **SELECTED** phone field...");
    userPhone.setAttribute("style", "color:white; background:black");
};
userPhone.onblur = function(){
    userPhone.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};