"use strict";
// 5.5, "Change given code & prevent it from the bubbling" 

// STEP 8: Create a new JavaScript file named 5.5.Assignment.script.js. Store each set of class elements in a variable of the same name (so, const grandParent should contain any element with the class of ".grand-parent") and log them to check your work.
// Hint: If you recall from earlier in the sprint, querySelector  only grabs the *first* match - but you have three grand-children divs ... 
// Hint: use querySelectorAll

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelectorAll(".grand-child");

console.log(grandParent);
console.log(parent);
console.log(child);
console.log(grandChild);

// STEP 9: Add an event listner to your parent element that, on click, will toggle on and off the class of "red". Test whether all child elements turn red on click.
// Hint: you will need to target the event parameter

parent.addEventListener('click', (event) => {
    event.target.classList.toggle("red")
}); 

// STEP 10: (Back in your HTML ...) 