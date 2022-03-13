// Declare & call a function

// STEP 1: Declare a function called "santaGreeting"

// STEP 2: Make your function both log & return the following string: `HO ho ho! ME-rry Christmas!`

// STEP 3: Call your function

// BONUS #1: Call your function as a part of a larger string, using concatenation 

// BONUS #2: Re-write your function to take in an argument, such as a person's name, and pass it into our returned greeting

function santaGreeting(input){
    const santaCatchPhrase = `Hello ${input} - HO ho ho! ME-rry Christmas!`;
    console.log(santaCatchPhrase);
    return santaCatchPhrase
}

santaGreeting("Kris");