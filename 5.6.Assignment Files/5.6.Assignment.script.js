"use strict";

// 5.6, "Requests, Responses & Routing with Express"

// Description: Its time to create a server, and begin  handling front end requests! Make your app listen, get, and respond to a web browser in preperation for attempting your first full-stack app!


// STEP 1: Create a parent folder named "5.6 express-project". Navigate to that folder and run the following three commands: 1) npm init -y, 2) npm install express, 3) and npm install nodemon. 

// STEP 2: In your package.json, add "type": "module" and "dev": "nodemon 5.6.index.js". 

// STEP 3: (In your 5.6.index.js file) import express and store its function in a constant named "app". Then, declare a constant named "PORT" and set it to "3000".
// Hint: use express();
import express from "express";

const app = express(); 
const PORT = 3000; 

// STEP 4: Next, make your app listen to your 'port' variable, and log a message to terminal that tells you what port your app is listening on. Open a webpage to that port and see if it shows anything. (remember to use "npm run dev" - instead of node 5.6.index.js - from now on to have your server update automatically)
// Hint: use the .listen method
// Hint: use an arrow function
// Hint: if you see "cannot GET", you're app is working!
app.listen(PORT, () => {
    console.log(`5.6's server has been started, and is listening on port ${PORT}.`);
})

// STEP 5: Give your app something to do for a GET request, like log the request and then send a response saying, "Your 5.6 app is running". 
// Hint: use the .get method
// Hint: make this get only deal with completely-empty endpoints ("/")
// Hint: use the .send method
app.get("/", (request, response) => {
    response.send(`Your 5.6 app is running!!"`);
})

// STEP 6: Give your app a second GET route for "/search", have it log and store the query in a constant, and send back the query as a part of string response
// Hint: use .send method
// Hint: use { q }
app.get("/search", (request, response) => {
    console.log(request.query);
    const query = request.query;
    const { q } = request.query;
    response.send(`You searched for ${query} and ${q}"`);
})

// STEP 7: Create a folder within your 5.6 express-project named "router". Create a new file in this folder named "routes.js". In your routes.js, import express; also, export a constant named "router" that is storing your express's Router function. Cut and paste your app.get logic from your index.js file to your routes.js file
// Hint: use .Router()
import express from "express"
export const router = express.Router();

router.get("/", (request, response) => {
    response.send(`Your 5.6 app is running!!"`);
})

router.get("/search", (request, response) => {
    console.log(request.query);
    const query = request.query;
    const {q} = request.query;
    response.send(`You searched for ${query} and ${q}"`);
})

// STEP 8: In your routes.js file, update your app.get statements to router.get ones. In your index.js file, 1) import your router constant from your routes.js file, and 2) make your app use it. Reload your webpage to confirm that you have succesfully set up your router's routes.
// Hint: use { router }
// Hint: use .use on your app, and pass-in 'router'
import { router } from "./router/routes.js";
app.use(router);

// Have it use the public folder to return one of three images? 
// ULTIMATELY, decided this would be too confusing and didn't complete these extra steps
// STEP 9: Create a second folder within your 5.6 express-project named "public" ...

// STEP :

// STEP :


