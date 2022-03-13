"use strict";

// 2.7, "Create a user registration endpoint with Node.js"
// NOTE: This file's contents is the same as 2.7.Assignment.script.js - feel free to ignore


// (From 1.4) - 2.3-2.5 deal with the node file system, so the following isn't applicable for this section:
// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// STEP 1: Create a folder named "node-file-system-test"
// STEP 2: Navigate to this folder in terminal and run npm init -y
// STEP 3: Open your package.json file and add the following to it: "type": "module",
// STEP 4: (Still inside your "node-file-system-test" folder), create a file named "2.7.multiply.js" (this module will be devoted to basic multiplication)
// STEP 5: In "2.7.multiply.js", write a multiplication function that 1) takes in two numbers, and 2) returns. Make this function exportable
// Hint: use "export function [function name]" syntax

// STEP 6: Create a 2.7.index.js file and import your 2.7.multiply.js file into it
// Hint: use "import [function-name] from [file-name]" syntax
// Hint: use "./[file-name]" to import files in the same folder directory

// STEP 7: Use your imported multiplication module to log the product of two numbers, and then run your 2.7.index.js file in terminal
// Hint: You will need to add a log instruction to your index file, and then run that file using the "node" command to see a result