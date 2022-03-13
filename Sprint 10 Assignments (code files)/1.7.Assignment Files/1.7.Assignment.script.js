"use strict";
// Assignment 1.7: "Selecting DOM Elements"

// STEP 6 Store and log all instances of a given tag using Element selectors (Note: make sure to use console.log to confirm that your code works)

const elementsByTag = document.getElementsByTagName("div");
console.log(elementsByTag);

// STEP 7 Store and log the sole instance of a given ID using Element selectors (Note: make sure to use console.log to confirm that your code works)

const elementByID = document.getElementById("container_1");
console.log(elementByID);

// STEP 8 Store and log all instances of a class using Element selectors (Note: make sure to use console.log to confirm that your code works)

const elementsByClass = document.getElementsByClassName("text");
console.log(elementsByClass);

// STEP 9 Store and log the sole instance of another ID using CSS selectors (Note: make sure to use console.log to confirm that your code works)

let queryElementID = document.querySelector("#container_2");
console.log(`This is the ONLY element that has the *ID* of "container_2":`);
console.log(queryElementID);

// STEP 10 Store and log the first instance of a class using CSS selectors (Note: make sure to use console.log to confirm that your code works)

let queryElementsFirstClass = document.querySelector(".text");
console.log(`This is the FIRST element that has the *class* of "text":`);
console.log(queryElementsFirstClass);

// STEP 11 Store and log all instances of a class using CSS selectors (Note: make sure to use console.log to confirm that your code works)

let queryElementsAllClass = document.querySelectorAll(".text");
console.log(`This is EVERY element that has the *class* of "text":`);
console.log(queryElementsAllClass);

// STEP 12 Store and log a nested instance of a class using CSS selectors (Note: make sure to use console.log to confirm that your code works)

let queryElementNestedClass = document.querySelector("#container_2 > .text");
console.log(`This is the *first* element INSIDE the #ID of "container_2" element ... that has the *class* of "text":`);
console.log(queryElementNestedClass);