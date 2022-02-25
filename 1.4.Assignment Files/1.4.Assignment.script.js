"use strict";

// 1.4, "Setting up Node.js"

// STEP 1: Create a folder for your new node project called "first-node-project". 
// STEP 2: Create a file within that folder called 1.4.script.js
// STEP 3: In your terminal, run npm init -y. Make sure that your "main" file is your "1.4.script.js" file
// STEP 4: In your app.js file, copy-paste the commands from the following link https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// STEP 5: Open VS Code in your folder / navigate to your folder in terminal and run your file using node
// Hint: node app.js

// STEP 6: Open a web browser of your choice, and enter the following address into the address bar: localhost:3000

// STEP 7: Confirm that the page displays "Hello world"