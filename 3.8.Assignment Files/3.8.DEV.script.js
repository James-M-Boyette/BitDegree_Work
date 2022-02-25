"use strict";

// 3.8, "Using Node's File system to Add, Store, & Remove Data"

import fs from "fs/promises" // STEP 1

async function run(){
    let data = await loadData(); // STEP 6

    const operation = process.argv[2]; // STEP 7
    console.log(`Here's the operation you invoked: "${operation}"`); // "STEP 7"
    const incomingData = process.argv[3]; // STEP 7
    console.log(`Here's the data you supplied: "${incomingData}"`); // STEP 7

    if(operation === "add"){ // STEP 8
        addUser(data, incomingData);
    }

    if(operation === "delete"){ // STEP 13
        data = deleteUser(data, incomingData)
    }
    
    await saveData(data); // STEP 12
}

async function loadData(){ // STEPs 3-5
    const data = await fs.readFile("./users.json")
    return JSON.parse(data);
}

function addUser(data, newUser) { // STEP 9
    const newId = data.reduce((a,c) => Math.max(a, c.id), 0) + 1; // STEP 10
    data.push({ id: newId, name: newUser });
    
}
async function saveData(data){ // STEP 11
    // console.log(JSON.stringify(data));
    return fs.writeFile("./3.4.users.json", JSON.stringify(data));
}

function deleteUser(data, removeId){ // STEP 14
    return data.filter((user) => user.id !== parseInt(removeId));
}

run();