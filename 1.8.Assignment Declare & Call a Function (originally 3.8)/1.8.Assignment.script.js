// Declare & call a function

// STEP 1: Declare a function called "santaGreeting"

function santaGreeting(){

}

// STEP 2: Make your function both log & return the following string: `HO ho ho! ME-rry Christmas!`
function santaGreeting(){
    const santaCatchPhrase = `HO ho ho! ME-rry Christmas!`;
    console.log(santaCatchPhrase);
    return santaCatchPhrase
}

// STEP 3: Call your function

santaGreeting();

// BONUS #1: Call your function as a part of a larger string, using concatenation 
console.log(`You know what Santa always says? "${santaGreeting()}"`);

// BONUS #2: Re-write your function to take in an argument, such as a person's name, and pass it into our returned greeting

function santaGreeting(input){
    const santaCatchPhrase = `Hello ${input} - HO ho ho! ME-rry Christmas!`;
    console.log(santaCatchPhrase);
    return santaCatchPhrase
}

santaGreeting("Kris");