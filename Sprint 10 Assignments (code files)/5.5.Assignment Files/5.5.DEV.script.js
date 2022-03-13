"use strict";
// 5.5, "Change given code & prevent it from the bubbling" 

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelectorAll(".grand-child");

console.log(grandParent);
console.log(parent);
console.log(child);
console.log(grandChild);

parent.addEventListener('click', (event) => {
    event.target.classList.toggle("red")
}); 
