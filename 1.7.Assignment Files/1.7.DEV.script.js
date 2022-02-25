"use strict";
// Assignment 1.7: "Selecting DOM Elements"

// "Grabbing Elements of your HTML using Element Selectors" (0:00)

// This will log all of the page's elements by their tags - so, all "div"s in this case
const elementsByTag = document.getElementsByTagName("div");

// This will log a specific element on a page, based on their ID (remember that id's are exclusive/singular)
const elementByID = document.getElementById("container_1");

// This will log all of the page's elements by their tags - so, all "div"s in this case
const elementsByClass = document.getElementsByClassName("text");

console.log(elementsByTag);
console.log(elementByID);
console.log(elementsByClass);


// "Getting elements using CSS Selectors" (4:15)

// ...Get a specific element by ID
let queryElementID = document.querySelector("#container_2");
console.log(`This is the ONLY element that has the *ID* of "container_2":`);
console.log(queryElementID);

// ...Get the first instance of an element with a class
let queryElementsFirstClass = document.querySelector(".text");
console.log(`This is the FIRST element that has the *class* of "text":`);
console.log(queryElementsFirstClass);

// ...Get EVERY element of the stipulated class
let queryElementsAllClass = document.querySelectorAll(".text");
console.log(`This is EVERY element that has the *class* of "text":`);
console.log(queryElementsAllClass);

// ...Get a nested element
let queryElementNestedClass = document.querySelector("#container_2 > .text");
console.log(`This is the *first* element INSIDE the #ID of "container_2" element ... that has the *class* of "text":`);
console.log(queryElementNestedClass);