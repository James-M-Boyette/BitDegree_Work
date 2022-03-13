"use strict";
// Take in an array of numbers and, if there are any diplicates, have your loop log 'true';

// Ex: const array = [2,1,2,5,3,4,5] should, when passed through your loop, log 'true'

// ORIGINAL, BROKEN CODE
// const array = [2,1,2,5,3,4,5]
// console.log(aray.length)

// for(let i = 1; i < 7; i++) {
//     cosnole.log('This is the outer loop:${i}')

//     for (let i2 = i + 1; i2 < 7; i2++) {
//         console.log('This is the inner loop:${i2}')
//         if (i2 = i) {
//             console.log('true')
//             console.log('Index #{i} (#{i2}) is the same as index #{i2} (#{i})')
//         }
    
// }


// FINAL, WORKING LOOP
const array = [2,1,2,5,3,4,5]
console.log(array.length);

for(let i = 0; i < array.length; i++) {
    console.log(`This is the outer loop:${i}`);

    for (let i2 = i+1; i2 < array.length; i2++) {
        console.log(`This is the inner loop:${i2}`);
        
        if (array[i2] === array[i]) {
            console.log("true");
            console.log(`Index #${i} (${array[i2]}) is the same as index #${i2} (${array[i]})`);
        }
    }
}


