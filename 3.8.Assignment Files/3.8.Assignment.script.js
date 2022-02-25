"use strict";


// 3.8, "Create a user registration form with Node.js" (old)
// 3.8, "Create a user database script with Node.js" (new)

// Description: A client has asked that you develop a simple interface for storing users in a JSON database. You've already learned how to access node's filesystem, as well as write code that relies on multiple files in that filesystem - so it's time to write a script that will allow the client to do this database work using simple console commands! You should deliver a script that, when run with the 'node', can be accompanied by an 'add' or 'delete' operation + a piece of incoming data (a new user name, or a current ID number etc) and will update the JSON database file accordingly.

// STEP 1: In your index.js file (inside your "node-file-system-test" folder), 1) turn off your multiplication log command, and 2) import your node filesystem asynchronously
// Hint: use "fs/promises"
import fs from "fs/promises"

// STEP 2: Create a new json file named "users". In that file, add at least one ID number and one name (in the form of an object inside of an array)
// Hint: [{"id":1}] etc

// STEP 3: (In your index.js file) write an asynchronous function called "loadData" that 1) declares a constant called "data", 2) [a]waits for the users.json's data to be read, and 3) stores that data in the constant
// Hint: use "await"
// Hint: use node fs's ".readFile" method
async function loadData(){
    const data = await fs.readFile("./users.json")
}

// STEP 4: Check what you are storing: 1) log the "data" constant *after* parsing it from JSON, 2) invoke your loadData function at the end of the file, and 3) then use node to run the file (you should see your user database entry
// Hint: use JSON.parse 
// Hint: invoke the function with "loadData();"
async function loadData(){
    const data = await fs.readFile("./users.json")
    console.log(JSON.parse(data));
}

loadData()

// STEP 5: Make the loadData function return the data (as well as log it)
async function loadData(){
    const data = await fs.readFile("./users.json")
    console.log(JSON.parse(data));
    return JSON.parse(data);
}

// STEP 6: Declare a new, second asynchronous function named "run". In the function, declare a "let" variable named "data" and have it store what's returned from loadData. Make sure it [a]waits for loadData to finish before storing. Also, change the invocation at the end of your file to run your new "run" function
// Hint: use "await"
// Hint: change the invocation from "loadData()" to "run()"
async function run(){
    let data = await loadData();
}

// STEP 7: (Within your 'run' function) declare two constants named "process" and "incomingData", and store the appropriate argument values in them. Log the contents of these two variables, and run "index.js add myName" to make sure they're storing the correct values. 
// Hint: running your file will always, at the very least, supply the first two values - so you will need to store and use the ones supplied after
// Hint: recall lesson 3.1's video and 3.2's text (https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ )
async function run(){
    let data = await loadData();

    const operation = process.argv[2];
    console.log(`Here's the operation you invoked: "${operation}"`);
    const incomingData = process.argv[3];
    console.log(`Here's the data you supplied: "${incomingData}"`);

}

// STEP 8: Add a conditional to your 'run' function that, when an 'add' operation is supplied by the user, will run an "addUser" function (to be written in the next step of this exercise). Make sure that you pass both the current user 'data' and the new incomingData to this addUser function
// Hint: your conditional should evaluate whether your variable 'operation' is storing a string-version of "add"
// Hint: the current user data is being imported via the 'loadData' function, and stored in a variable named 'data'  
async function run(){
    let data = await loadData();

    const operation = process.argv[2];
    console.log(`Here's the operation you invoked: "${operation}"`);
    const incomingData = process.argv[3];
    console.log(`Here's the data you supplied: "${incomingData}"`);

    if(operation === "add"){
        addUser(data, incomingData);
    }
}
// STEP 9: Declare a new function (after your 'run' function) called "addUser" that will 1. take in our current user.json 'data' and the newUser data, 2. declare's a constant named "newId", and 3. pushes that newId & newUser name to our current 'data'; note that in the next step you will write the logic for creating the newId number.
// Hint: the current user 'data' is being imported via the 'loadData' function, and stored in a variable named 'data' 
// Hint: when pushing the newId and the newUser, remember that our 'data' elements should (in this assignment) be objects. They need to be in the form of key:value pairs - with keys that match those of our users.json
function addUser(data, newUser) {
    const newId;
    data.push({ id: newId, name: newUser });
    
}

// STEP 10: Write logic to create a new user ID number - one that will always be higher than the current highest id number in the array (so, if the current highest id # is "7", you will want to store "8" as the newId). Note that in order to do this, you will need to accomplish several things: 
// 1. check the value of the id # of each element in the user 'data' array,
// 2. see whether it is greater than the previous element's id value,
// 3. store it if it *is* greater (and ignore it if it isn't), and
// 4. ultimately return (and store in your newId variable) a value that is one-greater than this highest-id value
// While you can accomplish this logic in several ways - say, using a loop with a conditional - given what has been covered in this seciton of the sprint, you should try to use the l.reduce & Math.max methods

// What do you need to do?
// Use .reduce to return the highest current ID
// Use Math.max (as .reduce's "reducter") to find the current highest ID - 
//  > if the user database has no id #s, .reduce should return 0
//  > if it does have one or more id #s, .reduce should use Math.max to evaluate (the first time it evaluates an element from our 'data' array) whether the current id # is greater than 0, or (every time there-after) whether the current id is greater than the previous one
// Make sure to supply .reduce with a starting "previousValue" of 0
// Add 1 to what .reduce returns, and store that as the newId

// Hint: you will need to target your current user 'data' array with .reduce
// Hint: you can use Math.max to evaluate which is greater - a currentValue, or a previousValue
// Hint: you can use .reduce to store the result of Math.max - remember: it will store this result as the new previousValue
// Hint: you can also tell .reduce to (for its first itteration) store "0" as its previousValue and (using Math.max) compare that to the zero'th element's id in your data array
// Hint: make sure that you're adding 1 to what your .reduce method returns

function addUser(data, newUser) {
    const newId = data.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue.id), 0) + 1;
    data.push({ id: newId, name: newUser });
}

// STEP 11: Declare a new function - named "saveData" - that will 1. take in 'data', 2. use node's filesystem .writeFile method to 3. target our users.json file + converts our current 'data' (a JSON object) to a JSON string, and 4. return the result
// Hint: use fs.writeFile
// Hint: use JSON.stringify()
// Hint: to understand why you need to use JSON.stringify, try logging 'data' by itself ...
async function saveData(data){
    return fs.writeFile("./users.json", JSON.stringify(data));
}

// STEP 12: Back in your 'run' function, invoke your 'saveData' function (at the very end of 'run's instructions), and have it take in your 'data'. Make it [a]wait for the process to finish. Log what is about to be saved to confirm things are working properly
await saveData(data);

// STEP 13: Add a second conditional to 'run' that, if the 'operation' is "delete", will update 'data' to store what's returned from "deleteUser" - a function you will write in your next step. Pass 'data' and 'incomingData' into this function.
if(operation === "delete"){
    data = deleteUser(data, incomingData)
}

// STEP 14: (After your 'addUser' function), declare a function named "deleteUser"; give it the parameters 'data' and 'removeId'. Make this function return a new version of 'data' - one that does not have the specified ID.
// Hint: use .filter to check each element of the 'data' array
// Hint: you want every element in 'data's array that *does not* have the id number of removeId
// Hint: use '!=='
// Hint: use parseInt to make removeId's number readable to the .filter method
function deleteUser(data, removeId){
    return data.filter((element) => element.id !== parseInt(removeId));
}

