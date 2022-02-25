"use strict";
// Assignment 2.6: "DOM Methods in Practice"

// Store the parent unsorted-list "menu" element:
const navMenu = document.querySelector("#menu");
// Log that unsorted-list element's contents:
console.log(`Here's the menu object:`);
console.log(navMenu);

// What are the navMenu's children?
console.log(`Here's the navMenu's children:`);
console.log(navMenu.children);

// Store the children using navMenu.children
const childList = navMenu.children;
console.log(`Here are all of the children of the navMenu object (stored in 'childList'):`);
console.log(childList);
// Check that you can read the length of the array:
console.log(`The number of elements in your childList is ${childList.length}`);

// Store the sorted list elements using their HTML Tag of "li"
const list = document.getElementsByTagName("li")
console.log(`Here are all of the sorted list elements (stored in 'list'):`);
console.log(list);
// Store the sorted-list items using their class of "nav-bar-link":
const elementsByClass = document.querySelectorAll(".nav-bar-link");
console.log(`Here are the elements that have a "nav-bar-link" class (stored in 'elementsbyClass'):`);
console.log(elementsByClass);

// Use a 'for' loop as an alternative to the "getElementsByClassName" method (and show all of the children of the parent navMenu element)
for (let i = childList.length - 1; i >= 0; i--) { 
    console.log(`Here is the current element of the childList`);
    console.log(childList[i]);
    childList[i].remove();
}

// list.setAttribute("style", `
// background: red; 
// color: ;
// `); 

// Need a hint/note about 'for' loops and live node lists
// Apparently, the 'for' loop executes its instructions on the current index #, and then moves to the next - but what *was* next in the array has now been moved to the currently-vacated index place

// STEP : Set the font color & 
// Hint: Store the try adding unique ID to the portfolio element
// console.log(navMenu);
// console.log(navMenu.children);
// console.log(navMenu.getElementsByTagName("li"));
// const portfolio = document.getElementsByTagName("li").innerHTML = "Portfolio");
// const portfolio = childList.querySelector()
// console.log("Here's a test of the innerHTML search:");
// console.log(childList.querySelector().innerHTML = "Portfolio");
// var x = document.getElementById("myDIV");
// x.querySelector(".example").innerHTML = "Hello World!";