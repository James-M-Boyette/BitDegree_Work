"use strict";
// Assignment 2.6: "DOM Methods in Practice"

// STEP 3: Store & remove or replace the company blurb
// Hint: use querySelector to get the paragraph's unique ID
// Hint: you could use .innerText to update what's displayed to something more personal, or .remove to get rid of it entirely. For now, replace the text with a reminder.
const junk = document.querySelector("#company-blurb");
console.log(junk);
junk.innerText = "*** REMEMBER to put something fun here once I get the navbar working ... ***";


// STEP 4: Grab & store the parent element of your navBar
// Hint: it is an unsorted list, and has a unique ID - either of which you can target
const navMenu = document.querySelector("#navBar");

// STEP 5: Log to terminal both the navMenu and its children
// Hint: use the "children" method
console.log(navMenu);
console.log(navMenu.children);

// STEP 6: Grab & store the children in their own variable. Log both the array in this variable, and the array's length.
const childList = navMenu.children;
console.log(`Here are all of the children of the navMenu object (stored in 'childList'):`);
console.log(childList);
console.log(`The number of elements in your childList is ${childList.length}`);

// STEP 7: Create a 'for' loop that will log and then delete each child element - each sorted list element
// Hint: use the "remove" method
// Hint: if you are only able to delete every other element, this may be because your 'for' loop is starting at the beginning of the array. However, in this admittedly-strange case, you will need to make your loop start at the *end* (and work backwards).
// Note: this is because you are storing a "live NodeList". Try googling these and see how they automatically update (and move) their elements around in the array. Can you figure out why a loop would end up skipping every other element? What index place would it check in its second itteration, and what element is now stored in that index (thanks to live NodeList logic)?

for (let i = childList.length - 1; i >= 0; i--) { 
        console.log(`Here is the current element of the childList`);
        console.log(childList[i]);
        childList[i].remove();
    }

// STEP 8: Create a new array and store new names for your personal site's navBar (for instance... "Home", "About Me", "Portfolio", "Tech Blog", "YouTube Channel", "Other Social Media","Coding Meme of the Day" etc)

const list = [
    "Home",
    "About Me",
    "Portfolio",
    "Tech Blog / T.I.L.",
    "YouTube Channel",
    "Other Social Media",
    "Coding Meme of the Day",
];

// STEP 9: Create a 'for' loop that will 1. itterate through your list, 2. create a new sorted-list element every time, 3. set the innerText of that list element to the text stored in your list, 4. log the list element, and finally 5. append it as a child to your parent navBar element

for (let item of list) { 
    const newItem = document.createElement("li") 
    newItem.innerText = item; 
    console.log(newItem);
    navBar.appendChild(newItem); 
}




