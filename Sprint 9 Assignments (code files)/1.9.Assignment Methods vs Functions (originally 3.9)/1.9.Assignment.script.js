"use strict";

// Demonstrate the difference between methods & functions (in Javascript)

// STEP 1: Declare an object

const object = {
}


// STEP 2: Give that object a function property called "santaGreeting"
const object = {
    santaGreeting: function(){
    }
}

// STEP 3: Store santa's catchPhrase as an argument in the function and log it to terminal
const object = {
    santaGreeting: function(){
        const catchPhrase = "HO-ho-hoo! ME-Rry Chistmas!";
        console.log(catchPhrase);
    }
}

// STEP 4: Make the function return the catchPhrase 
const object = {
    santaGreeting: function(){
        const catchPhrase = "HO-ho-hoo! ME-Rry Chistmas!";
        console.log(catchPhrase);
        return catchPhrase
    }
}

// STEP 5: Call your function

object.santaGreeting();

// STEP 6: Change the name of your object to catchPhrases, and the name of your constant to santa
const catchPhrase = {
    santaGreeting: function(){
        const santa = "HO-ho-hoo! ME-Rry Chistmas!";
        console.log(santa);
        return santa
    }
}

// STEP 7: Add a second function property to your catchPhrase object, and have it return a favorite catch phrase of yours as a string
const catchPhrase = {
    santaGreeting: function(){
        const santa = "HO-ho-hoo! ME-Rry Chistmas!";
        console.log(santa);
        return santa
    },
    batmanGreeting: function(){
        const batman = "I am vengance ... I am the NIGHT. I. AM. BATMAN!";
        console.log(batman);
        return batman
    }
}

// STEP 8: Call your new catchPhrase function

catchPhrase.batmanGreeting();

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