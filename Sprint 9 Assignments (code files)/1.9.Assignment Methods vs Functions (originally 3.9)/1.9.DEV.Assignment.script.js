"use strict";

// Demonstrate the difference between methods & functions (in Javascript)

// STEP 1: Declare an object

// STEP 2: Give that object a function property called "santaGreeting"

// STEP 3: Store santa's catchPhrase as an argument in the function and log it to terminal

// STEP 4: Make the function return the catchPhrase 

// STEP 5: Call your function

// STEP 6: Change the name of your object to catchPhrases, and the name of your constant to santa

// STEP 7: Add a second function property to your catchPhrase object, and have it return a favorite catch phrase of yours as a string

// STEP 8: Call your new catchPhrase function

// BONUS: Make one or more of your functions capable of taking an input parameter and returning it as a concatenated string
const catchPhrase = {
    santaGreeting: function(input){
        const santa = `Hello ${input}! HO-ho-hoo! ME-Rry Chistmas!`;
        console.log(santa);
        return santa
    },
    batmanGreeting: function(input){
        const batman = `${input} - I am vengance ... I am the NIGHT. I. AM. BATMAN!`;
        console.log(batman);
        return batman
    }
}
catchPhrase.batmanGreeting("Suzy");