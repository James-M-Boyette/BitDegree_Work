"use strict";

// 4.5, "Create Be-spoke Errors"

// import{ multiply } from "./4.5.multiply.js";
import fs from "fs/promises" 

async function loadData(){ 
    const data = await fs.readFile("./users.json")
    // console.log(`Here's the loaded JSON data:`);
    // console.log(JSON.parse(data));
    return JSON.parse(data);
}

// async function run(){
async function run(operationIncoming, dataIncoming){ // STEP 1
    console.log(`run() was executed`);
    let data = await loadData(); 
    console.log(`Here's what's in "data":`);
    console.log(data);

    // const operation = process.argv[2];
    const operation = operationIncoming; // STEP 1
    console.log(`Here's the operation you invoked: "${operation}"`);
    // const incomingData = process.argv[3];
    const incomingData = dataIncoming; // STEP 1
    console.log(`Here's the data you supplied: "${incomingData}"`); 

    if(operation === "add"){ 
        addUser(data, incomingData);
    }

    if(operation === "delete"){ 
        console.log(`*DELETE* was used in run()`);

        
        // Check parsing of incomingData
        if (parseInt(incomingData) === 5){
            console.log("The fifth user entry is about to be deleted");
        }
        // Check all elements of 'data's .id for existance of incomingData
        if (data.find(element => {return element.id === parseInt(incomingData)}) === undefined){
            // console.log(`ID must match an existing user ...`);    
            const err = new Error("ID must match an existing user ..."); // 
            err.code = "ERR_MUST_BE_A_CURRENT_USER" 
            console.log("Bespoke error is about to fire - !");
            throw err;            
        }
        data = deleteUser(data, incomingData)
    }
    
    console.log(`Here's what "users.json" is about to be *re-written* with:`);
    console.log(data);
    await saveData(data); 
}


function addUser(data, newUser) { 
    const newId = data.reduce((a,c) => Math.max(a, c.id), 0) + 1; 
    data.push({ id: newId, name: newUser });
    
}
async function saveData(data){ 
    // console.log(JSON.stringify(data));
    return fs.writeFile("./users.json", JSON.stringify(data));
}

function deleteUser(data, removeId){ 
    return data.filter((user) => user.id !== parseInt(removeId));
}


// 4.5's Error Codes
function checks (input1, input2){ // STEP 2
        // Pass command-line or try...catch Inputs: 
        // let operation = "";
        const operation = input1; // STEP 2
        // let incomingData = "";
        const incomingData = input2; // STEP 2

        // OPTIONAL gate to parse command-line inputs + try...catch inputs:
        // if (process.argv[2] === undefined){
        //     // operation = "add";
        //     operation = input1;
        // }else{operation = process.argv[2]}
        // if (process.argv[3] === undefined){
        //     // incomingData = "Pre-Defined TestUser";
        //     incomingData = input2;
        // }else{incomingData = process.argv[3]}

        // Check Operation Input for Errors:
        const currentOperationsList = ["add", "delete"]; // STEP 2
        function verifyOperationInput(operationInput, currentOperations) { // STEP 3
            // console.log(currentOperations.indexOf(operationInput));// STEP 3
            // console.log(currentOperations.indexOf(operationInput) > -1);// STEP 3
            if (!(currentOperations.indexOf(operationInput) > -1)){
                // console.log(`That doesn't exist as an operation`);
                const err = new Error("that isn't an available operation"); 
                err.code = "ERR_CAN_ONLY_BE_A_VALID_OPERATION"
                throw err;
            }
        }
        
        // Operation Input Checks:
        // verifyOperationInput("add", currentOperationsList);
        // verifyOperationInput("Boogie", currentOperationsList);
        verifyOperationInput(operation, currentOperationsList);
        
        // Debugging Logs (turn off unless needed ...):
        // console.log(operation);
        // console.log(incomingData);

        // run(operation, incomingData);
        run(operation, incomingData);
}

// checks("add", "Somebody");

try { // STEP 6
    console.log(`Try was executed`); // STEP 7
    // TRIAL CASES:

    // Case 1: AddUser SUCCESFULLY
    // checks("add", "Somebody"); // STEP 7

    // Case 2: MoveUser INCORRECT OPERATION
    // checks("move", "2"); // STEP 7

    // Case 3: DeleteUser SUCCESFULLY
    checks("delete", "5"); // STEP 9

    // Case 4: DeleteUser INCORRECT ID
    // checks("delete", "10"); // STEP 12



} catch (error) {
    if(error.code === "ERR_CAN_ONLY_BE_A_VALID_OPERATION"){ // STEP 8
        // console.log(`${operation} is not an available operation`);
        console.log(`That is not an available operation`);
    } else if (error.code === "ERR_MUST_BE_A_CURRENT_USER"){ // STEP 8
        // console.log(`A user with ID #${incomingData} does not exist`);
        console.log(`A user with that ID # does not exist`);
    } else { // STEP 8
        console.log(error);
    }
}

// run(); // STEP 1