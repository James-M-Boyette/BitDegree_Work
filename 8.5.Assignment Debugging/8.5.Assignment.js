"use strict";
// Take in an array of numbers and, if there are any diplicates, have your loop log 'true';

// Ex: const array = [2,1,2,5,3,4,5] should, when passed through your loop, log 'true'

// ORIGINAL, BROKEN CODE
const array = [2,1,2,5,3,4,5]
console.log(aray.length)

for(let i = 1; i < 7; i++) {
    cosnole.log('This is the outer loop:${i}')

    for (let i2 = i + 1; i2 < 7; i2++) {
        console.log('This is the inner loop:${i2}')
        if (i2 = i) {
            console.log('true')
            console.log('Index #{i} (#{i2}) is the same as index #{i2} (#{i})')
        }
    
}

// STEP 1: Check for spelling errors
// Hint: how was the variable "array" originally spelled? What about "console"?

// STEP 2: Make sure every starting bracket, curly brace etc has a matching end bracket, curly brace etc
// Hint: has the inner 'for' loop been closed off?

// STEP 3: Do all the lines of code that need a ';' have one?
// Hint: check lines 7, 8, 11, 14, 16, & 17

// STEP 4: Fix the 'infinite' loop
// Hint: Did your friend check for equivilancy on line 15? ... or reset the variable?

// STEP 5: Fix these log statements - they aren't very helpful right now
// Hint: your friend may be more familiar with another code language - do you concatenate with '#' signs?
// Hint: what kind of single quotes are those? Are they back-ticks?

// STEP 6: Check what the loop is evaluating
// Hint: Is the loop reading each element of the array? ... or just the index #?

// STEP 7: One more problem ... is the loop catching *both* duplicates? Why isn't it catching the first one?
// Hint: at what index is the outer loop starting?
