// 5.6, "Requests, Responses & Routing with Express"
import express from "express";
import { router } from "./router/routes.js";

const app = express(); 
const PORT = 3000; 

app.use(router);
// app.use('/random', express.static("public"))
// app.use(express.static('public')) // 9

// app.use("/random", express.static("public")); // 9


// app.get("/", (request, response) => {
//     console.log(request.query);
//     const { q } = request.query; // store the request
//     response.send(`You searched for "${q}"`);
// })


// app.get("/random", (request, response) => { // 9
//     response.json({ src: randomImage()})
// })
// import fs from "fs";
// const BASE_URL = `http://localhost:${PORT}`;
// const imageDirectory = "/public";
// function randomImage() {
//     const files = fs.readdirSync(__dirname + imageDirectory);
//     const chosenFile = files[Math.floor(Math.random() * files.length)];
//     // const choice = `${Math.floor(Math.random() * 3) + 1}.jpg`;
//     // console.log(choice);
//     return `${BASE_URL}/${chosenFile}`;
// }



app.listen(PORT, () => {
    console.log(`5.6's server has been started, and is listening on port ${PORT}.`);
})

