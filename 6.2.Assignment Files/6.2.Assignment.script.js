"use strict";

// 6.2 Exit Assignment: Connect Four

// Verify setup
// STEP 8 (cont.): Add an event listener to the document that, when the DOM content is loaded, will log "Content loaded succesfully!"; check that your JavaScript is being loaded by your HTML.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
})

// Grab and store the game tiles
// STEP 9: Using query selectors, store all of your child divs in a constant called "squares"; log them - your node list should be 49 elements long. 
// Hint: since you're asking for more than one element, you will need to use querySelectorAll
// Hint: Remember that you can query the children of a parent element using a ">"

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
})

// Test listener success & create "wrong move" alert
// STEP 10: Create a 'for' loop that will itterate through the squares array (using "i"). Give the loop an event listener that will alert "Can't go here!" when a square is clicked.
// Hint: remember that though clicks can be listened to in multiple ways, they are such common events that a special .onclick syntax exists!

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            alert("Can't go here!");
        }
    }
})

// Add simple conditional
// STEP 11: Add a conditional to your onclick listener that checks whether the square is taken, and logs "This square is available" if true
// Hint: you can make your conditional check whether something is *not* true by using a "!" prefix

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            alert("Can't go here!");
        }
    }
})

// Expand conditional logic to include "gravity"
// STEP 12: Add a second conditional to your onclick listener that checks whether the square below is taken, and logs "The square BELOW this is taken" if true (you should have two "if" statements by the end of this step)
// Hint: You want your code to ask "Does the square 7 spaces after the one I've clicked on have a class of "taken"?
// Hint: use .classList.contains
// Note: Currently, this log message should only trigger when you click on any of the bottom seven squares (#36-42), while the first log message and the alert should trigger for all squares.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            alert("Can't go here!");
        }
    }
})

// Combine the conditional & alert
// STEP 13: Combine your two conditionals into a third one that logs "Player CAN go here!!" if true. Move your alert so that it is the result of either condition being false
// Hint: use && gates to combine your two conditions
// Hint: use "else" to trigger your alert 
// Note: Now, you should have two behaviors - if you try to place a piece higher-up in the grid, the space is technically open ... but gravity would not let it stay there (so the player gets an alert). If you try to place a piece on the bottom row, the space is logged as both open *and* having a piece below it, mimicking a piece falling to the bottom (or as far as it can). Our combo-conditional will now allow us to store valid moves!

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
            } else alert("Can't go here!");
        }
    }
})

// Create a "current" player
// STEP 14: At the beginning of your JavaScript, declare currentPlayer (using let) as the string "Player 1" (Make sure to declare it before your 'for' loop). In your HTMl's "style" section, add a class of "player-one", give it background-color of red !important, and a border radius of 10 pixels.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
            } else alert("Can't go here!");
        }
    }
})

// Store Valid moves for Player 1
// STEP 15: (Back in your JavaScript) In your third, combo-conditional, add a nested conditional (after your "player CAN go here!" message) to check whether currentPlayer is player 1 - if it is, add the classes of "taken" and "player-one" to the given square
// Hint: make sure you're checking for equivalancy and not accidentally redefining currentPpayer
// Note: the parent conditional is checking to see whether the space is a valid 'move' - the child conditional is checking to see which player is making it (and what player color to change the space into)

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                }
            } else alert("Can't go here!");
        }
    }
})

// Add second player
// STEP 16: On your webpage, test whether you can turn squares red. If succseful, (in your JavaScript) make your nested conditional also re-define currentPlayer as "Player 2". In your HTML, add a player-two class to your styling, with background color of blue important, and border-radius of 10 pixels.
// Hint: your nested conditional should effectively read, "If currentPlayer is Player 1, add the 'taken' and 'player-one' classes to the current square and update currentPlayer to be Player 2"

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares);     
    let currentPlayer = "Player 1"
    

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = "Player 2"
                }
            } else alert("Can't go here!");
        }
    }
})

// Store Second Player Moves
// STEP 17: Add an else statement to your nested conditional, have it check whether currentPlayer is Player 2 and (if 'yes'), add the 'taken' and 'player-two' classes to the square, and set currentPlayer back to Player 1
// Hint: follow your nested 'if' with 'else if'

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = "Player 2"
                } else if (currentPlayer == "Player 2"){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = "Player 1"
                }
            } else alert("Can't go here!");
        }
    }
})

// Invoke verifyWin function
// STEP 18: After your alert call, invoke a function called verifyWin (which you will declare in the next step) - use "verifyWin()". 
// Hint: you should have
// alert("Can't go here!")
//             verifyWin()

// Add Winning Arrays
// STEP 19: At the beginning of your JavaScript, declare a constant named "winningArrays" and store in it the following set of arrays:
[
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
]

// Use the loop to store winningArray's numbers
// STEP 20: Declare the function "verifyWin" before your 'for' loop. Declare another 'for' loop *within* verifyWin. Make that loop check each set of numbers in winningArrays. Make the loop also declare four variables - called square1, square2, square3, square4. Make the loop store each of the four numbers of the given winning array in these variables. Log the variables.
// Hint: the *last* set in winning Arrays is [13,20,27,34], so, you should see your loop's square1 containing index 0's number ("13"), square2 containing the second index ("20"), square3 containing the number "27", and square four containing the number "34".

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]

    function verifyWin() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = winningArrays[y][0];
            console.log("This is square 1");
            console.log(square1);
            const square2 = winningArrays[y][1];
            console.log("This is square 2");
            console.log(square2);
            const square3 = winningArrays[y][2];
            console.log("This is square 3");
            console.log(square3);
            const square4 = winningArrays[y][3];
            console.log("This is square 4");
            console.log(square4);
        }}

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = "Player 2"
                } else if (currentPlayer == "Player 2"){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = "Player 1"
                }
            } else alert("Can't go here!");
            verifyWin()
        }
    }
})

// Use winningArray's numbers to instead store "squares'" div objects
// STEP 21: Instead of making your loop store winningArray's numbers, now use them to store the variable square's div objects
// Hint: use winningArrays' numbers to find and store div objects of the equivilent index place number (in the "squares" array). So, if the first set in winningArray has [0,1,2,3], how would you use that to store the zero'th, first, second, and third elements of the "squares" array? How would you use [13,20,27,34] to get the 13th, 20th, 27th, and 34th elements?

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]

    function verifyWin() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]];
            console.log("This is square 1");
            console.log(square1);
            const square2 = squares[winningArrays[y][1]];
            console.log("This is square 2");
            console.log(square2);
            const square3 = squares[winningArrays[y][2]];
            console.log("This is square 3");
            console.log(square3);
            const square4 = squares[winningArrays[y][3]];
            console.log("This is square 4");
            console.log(square4);
        }}

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = "Player 2"
                } else if (currentPlayer == "Player 2"){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = "Player 1"
                }
            } else alert("Can't go here!");
            verifyWin()
        }
    }
})

// 
// STEP 22: At the very beginning of your HTML's body, add h3 tags with the ID of "#result". Back in your JavaScript (and before your loops), declare a constant also named "result", and store the HTML element in it. Log your variable to make sure it is working
// Hint: use querySelector

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"
    const result = document.querySelector('#result')
    console.log(result);

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]

    function verifyWin() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]];
            console.log("This is square 1");
            console.log(square1);
            const square2 = squares[winningArrays[y][1]];
            console.log("This is square 2");
            console.log(square2);
            const square3 = squares[winningArrays[y][2]];
            console.log("This is square 3");
            console.log(square3);
            const square4 = squares[winningArrays[y][3]];
            console.log("This is square 4");
            console.log(square4);
        }}

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = "Player 2"
                } else if (currentPlayer == "Player 2"){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = "Player 1"
                }
            } else alert("Can't go here!");
            verifyWin()
        }
    }
})

// Evaluate Player 1 win condition & signal player
// STEP 22: Within verifyWin's 'for' loop, declare a conditional after your four variables (square1 through square4) that will check to see if each variable has a class of 'player-one' - and will set result's innerHTML to 'Player One Wins!' if true
// Hint: target square1, use classList, and ask if it contains the class 'player-one'
// Hint:  if (...) {result.innerHTML = 'Player One Wins!'}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"
    const result = document.querySelector('#result')
    console.log(result);

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]

    function verifyWin() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]];
            console.log("This is square 1");
            console.log(square1);
            const square2 = squares[winningArrays[y][1]];
            console.log("This is square 2");
            console.log(square2);
            const square3 = squares[winningArrays[y][2]];
            console.log("This is square 3");
            console.log(square3);
            const square4 = squares[winningArrays[y][3]];
            console.log("This is square 4");
            console.log(square4);

            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')
            ) {
                result.innerHTML = 'Player One Wins!'
            }
        }}

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = "Player 2"
                } else if (currentPlayer == "Player 2"){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = "Player 1"
                }
            } else alert("Can't go here!");
            verifyWin()
        }
    }
})

// Evaluate Player 2 win condition & signal player
// STEP 24: Repeat step 23, but for player-2

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content loaded succesfully!");
    const squares = document.querySelectorAll('#grid > div');
    console.log(squares); 
    let currentPlayer = "Player 1"
    const result = document.querySelector('#result')
    console.log(result);

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]

    function verifyWin() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]];
            console.log("This is square 1");
            console.log(square1);
            const square2 = squares[winningArrays[y][1]];
            console.log("This is square 2");
            console.log(square2);
            const square3 = squares[winningArrays[y][2]];
            console.log("This is square 3");
            console.log(square3);
            const square4 = squares[winningArrays[y][3]];
            console.log("This is square 4");
            console.log(square4);

            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')
            ) {
                result.innerHTML = 'Player One Wins!'
            }
            if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')
            ) {
                result.innerHTML = 'Player Two Wins!'
            }
        }}

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (!squares[i].classList.contains('taken')){
                console.log("This square is available")
            }
            if (squares[i + 7].classList.contains('taken')){
                console.log("The square BELOW this is taken");
            }
            if (
                !squares[i].classList.contains('taken') 
                && 
                squares[i + 7].classList.contains('taken')){
                console.log("Player CAN go here!!");
                if (currentPlayer == "Player 1"){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = "Player 2"
                } else if (currentPlayer == "Player 2"){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = "Player 1"
                }
            } else alert("Can't go here!");
            verifyWin()
        }
    }
})




// SCRAP - DISREGARD
// Hint: we will eventually need to check and see whether there are four adjacent with the same 'player' *class* (four player 1 boxes, or four player 2 boxes in a row, in a diagonal etc)
// Hint: 'squares' is an array of div objects, stored in order. The first box in our grid is therefore stored in the zero'th index position of the squares array.
// Hint: 
// Hint: you will need to get 1) what's stored in the zero'th, first, second, and third spots of 2) the current nested array (use your 'for' loop's incrementing index counter) of 3) the "winningArrays" array
// Note: 
// winningArrays is a list of the div combinations that equal four connected spaces
// const square = squares[winningArrays...] 
// - is *not* asking to store one of the four numbers of the winning combo (that would be winningArrays[y][1])
// - it *is* storing the div with the same # as an object (which we will later inspect for a class of "player 1 or player 2")