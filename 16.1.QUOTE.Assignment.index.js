// 16.1, "Full Stack App" ASSIGNMENT
"use strict";

// ** PHASE I **
// "Decomp, File Setup, and Basic Front End Quote Generator"
// Make a Front End, using HTML & JavaScript, that can display random quotes when a button is clicked ...

// STEP 0: "Decomp 1: Meta-decomp"
// If you haven't been doing so thus-far in the course, now is an excellent time to practice your decomposition skills: before you create any folders or files, and before you write any code, take some time to think and write-out what this app needs to do. This is an essential planning phase - one that you will need to become very comfortable with and good at in your career. Ask yourself, "What does this app need to do? How will it do that? What does it *not* need to do in order to be a 'mimimum viable product' (MVP) - in order to be *barely* functional?" Making your app pretty 
// Hint

// STEP 1: "Folder System Setup"
// Create a folder named "random_quotes_app"
// Create two nested folders (within yoru random quotes app parent folder) named "front_end" and "back_end"
// In your "front_end" folder, create three files: "frontEnd.js", "index.html", and "style.css"


// STEP 2: "Initial File Creation"
// (In your index.html) create your basic page structure - include doctype, html tags, head and body tags. Also, include the following meta tags in your header:
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// Note: Make sure all of your opening tags have matching closing tags!
// Hint: use !DOCTYPE html


// STEP 3: "Link javascript Front End file to HTML"
// Next, add "title" tags to your header (and name it something like "My Fancy Quote Generator"). In the body of your HTML, add text to your page using "h1" tags (say, "A great quote generator will go here soon ..."). Add a set of div tags with the id of "quoteDisplayField", button tags with text (say, "Click me for a quote!"), and a set of script tags with a source set to your frontEnd javascript file. 


// STEP 4: "Connecting your HTML to your JavaScript"
// (Still in your html) Add an onclick action to your button that will call a function named "newQuote"
// (in your frontEnd.js) Declare a function named newQuote and make it log to console a message like "newQuote was run from frontEnd.js". Also, if you haven't already, add "use strict" to your frontEnd.js.
// Hint: onclick goes inside of your opening 'button' tag
// Hint: call the complete function name: newQuote()


// STEP 5: "Testing your initial setup"
// Test your html-js connection (and your html scripting) by 1) loading your index.html in a web browser of your choice, 2) opening developer console, and 3) clicking your button. Also, check that the title of your HTML is showing in the browser tab, and that you're seeing both the button and the page text, "A great quote generatore will go here soon".


// STEP 6: "Create your Quote List"
// Collect at least five quotations you like from the internet - search "best quotes by Jim Gaffigan" or "Quotes by Jack Handey" ... or whatever you like! (but at least google those quotes by Mr. Handey; you're welcome, in advance). Store your quotes as strings in a declared variable named something like "quotesCollection" in your frontEnd.js
const quotesJackHandey = [
    "If you go flying back through time, and you see somebody else flying forward into the future, it's probably best to avoid eye contact.",
    "If I ever get real rich, I hope I'm not real mean to poor people, like I am now.",
    "If trees could scream, would we be so cavalier about cutting them down? We might, if they screamed all the time, for no good reason.",
    "Sometimes I think you have to march right in and demand your rights, even if you don't know what your rights are, or who the person is you're talking to. Then on the way out, slam the door.",
    "I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world, because they'd never expect it",
    "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
    "To me, boxing is like a ballet, except there's no music, no choreography, and the dancers hit each other",
    "Sometimes when I reflect back on all the beer I drink I feel ashamed. Then I look into the glass and think about the workers in the brewery and all of their hopes and dreams. If I didn't drink this beer, they might be out of work and their dreams would be shattered. Then I say to myself, It is better that I drink this beer and let their dreams come true than to be selfish and worry about my liver",
    "Do you know what happens when you slice a golf ball in half? Someone gets mad at you. I found this out the hard way",
    "I hope if dogs ever take over the world, and they chose a king, they don't just go by size, because I bet there are some Chihuahuas with some good ideas.",
    "If you ever drop your keys into a river of molten lava, let 'em go, because man, they're gone."
]

// STEP 7: "Create your randomizer"
// Make your newQuote function to do two things: 1) generate a random number that will match an index place in your quotes array, and 2) set your quoteDisplayField div's innerHTML to be that quote. In order to make your code clearer, try storing the random number in a constant named "randomNumber", and then calling it when setting your HTML's element. 
// Hint: google JavaScript math functions and read-up on how some of them work - particularly those that will generate random numbers, and those that will turn decimals into whole numbers
// Hint: use Math.floor & Math.random together
// Hint: use .getElementById
// Hint: use .innerHTML
function newQuote(){
    // console.log("newQuote was run form frontEnd.js");
    const randomNumber = Math.floor(Math.random() * quotesJackHandey.length);
    document.getElementById('quoteDisplayField').innerHTML = quotesJackHandey[randomNumber]
}

// ** PHASE II **
// "Back End Server Setup & Basic Route Testing"
// Make a Back End that can handle a GET request, and return a random quote

// STEP 8: "Setup an express project for your back end"
// In your back_end folder, open a terminal/use your text editor's terminal to do four things: 1) initialize your node project, 2) install express, 3) install nodemon (and tell nodemon what file to watch), and 4) define your node's type as a module
// Hint: Add "type" and "dev" to your package.json
// Hint: Make sure that "dev" is in your package's 'scripts' section


// STEP 9: "Make Your Express App Listen to a Port"
// In your backEnd.js, set up your app's basic server ability by doing four things: 1) import express, 2) store express in a constant (named, say, "app"), 3) declare a port number for your server, and 4) make your server listen to that port (and log a message that notes the port (variable) being listened-to). Start your server (using your nodemon dev script) & check that it is working properly (you should see a your message in terminal).
// Hint: use .listen
import express from "express";

const app = express(); 
const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`Your random_quotes server has been started, and is listening on port ${PORT}.`);
})

// STEP 10: "Make Your App Handle a Basic Endpoint"
// Make your app handle a GET request from a basic enpoint (like "localhost:3000/"), and send a response (to be shown on the web page) like "Your random_quotes app is running!" Check your work in a new web browser window - you should see both a message on the web page (as well as one in terminal). 
// Note: Make sure to keep your server running using Nodemon for the remaining steps of the assignment
app.get("/", (request, response) => {
    response.send(`Your random_quotes app is running!!"`);
})

// STEP 11: "Move your current data to the Back End"
// For this assignment, you are going to structure our larger, full-stack app in a particular way: as a "thin client", with all of our web page structuring, data and database logic are stored *in the Back End*, on our server. Create a "public" folder within your back_end folder. Then, create a "quotes.js" file inside your "public" folder. Copy your array of quotes to this file. 
// Note: this may not get used - confirm at end

// STEP 12: "Move your html to the Back End"
// Copy your index.html into your back_end folder. Then, copy your style.css to the 'child'/nested public folder. From now on, you can ignore your front_end folder (don't delete it, though! You may find it useful to compare this simpler app to what you're about to create!). Finally, make sure to add Node's "fs" module to your backEnd.js (so that you can begin to interact with other files in your app)!
// Hint: use import 


// STEP 13: "Serve your index.html through your backEnd router"
// (In your backEnd.js's app.get handler) Comment-out your current response.send (which is printing something like "Your random_quotes app is running!!") and add a new response that 1) sends your back-end's index.html file via a file path, and 2) tells Express what 'root' folder to begin in
// Hint: because you're sending a file rather than a string, you will need to use '.sendFile'
// Hint: the .sendFile method can take two parameters, and you can give it a path beginning with './' as the first argument.
// Hint: you should give an object, with "root" and "." as its key:value pair, for the second argument

res.sendFile('./index.html', { root: "."})

// STEP 14: "Create a 404 page"
// Create a 404.html page. You can (re)use elements of your index.html - such as the header 'meta' elements - but change two things: 
// Make the header's title "404, Quote Generator"
// Make the body contain an h1 element that says something like "404 - whoops!" and an h2 element that explains that "the page does not exist"


// STEP 15: "Create an 'About' page"
// Create an 'about' html page. Again, you can (re)use elements from your other pages. However, make sure you have the following two things:
// Make the title for this page say something like "About" or "About Quote App", and
// Make the body contain an h1 element that tells a user what this webpage is, and a block of text explaining what the app does (you can put filler text for now, like, "Welcome to the 'About' page!" and "This quote app allows you to see some quotes!")


// STEP 16: "Store your pages & (re)serve them"
// Once you've made your '404' and 'About' pages, create a new folder in your back_end root directory named "views", and move all of your html files into the 'views' folder (including your index.html). Next, update your backEnd.js's path to include the 'views' folder. Create two more GET handlers for your 404 and About pages, and make them handle the endpoints "/about" and "/404". Test all three endpoints to make sure everything is working.


// STEP 17: "Add nav-bar elements to your html pages"
// In each of your html pages, add 'nav' tags that link to your index and about pages (and make sure to give them clear labels - say, "Home" and "About page", for instance). See if you can start at your 404 page and navigate to the other two using your new navbar!
// Hint: you can use anchor <a> tags to create the basic links
// Hint: use 'href=' to re-direct to the new endpoint. 


// STEP 18: "Import your quotes.js into your backEnd"
// Import your array of quotes and store them in a variable inside of your backEnd.js; log the variable to confirm you've done this correctly.
// Hint: use export
// Hint: you can put the export keyword before any element or object you want to make available to the rest of your app / outside of its original file
// Hint: to import your 'quotesJackHandey' variable from the public folder, you will need to use "{}" if you *did not* use the "default" keyword when exporting.

// STEP 19: write a GET handler for a new route - say, "randomJS" - that will return a random quote (from your list) to the browser
// Hint: your handler will need to do three things: 
// 1) generate a random number (but not one bigger or smaller than the length of your array),
// 2) store a quote from your array in a varaible, and
// 3) send that variable back

// Hint: you can borrow/re-use a line of code form your newQuote() function frontEnd (by copy-pasting it into the GET handler) in order to generate the random number


// ** PHASE III **
// "Back End Server Setup & Basic Route Testing"
// Make a Back End that can handle a GET request, and return a random quote


// STEP 20: "Move your index.html's button to another page"
// You are going to want your index page to show at least several quotes - show an "index" of the quotations you have stored, so rename index.html to "random.html" and update its title. Update the nav entries on each of your pages to include random.html. Then, create a new, index.html (with basic header info, body, and nav elements). 


// STEP 21: "Update your 404 to handle all bad routes"
// Currently, your 404 handler is only set up to fire when a *specific* route - "/404" - is sent in the request. You need to change it so that it acts as a 'catch-all' for your router (handling everything your app lacks routes-for). Note: Make sure to move your 404 handler to the last entry. 
// Hint: use 'app.use'
// Hint: you can chain-together parts of your response
// Hint: use .status(404) and .sendFile


// STEP 22: "Implementing a template engine"
// In order to take your app to the next level, you're going to need to use a "template" or "view" engine. Take some time to read-up on what they do in-general. Then, look at the documentation for one of the most popular "template" modules - EJS. With a 'template' engine, you're going to be able to 1) save time by creating "partials", start handling dynamic content in your web pages (like passing user-supplied data from the Front End to the Back End), and even execute the equivilent of JavaScript template-literals in your HTML!


// STEP 23: "Install EJS"
// Install the EJS module into your app


// STEP 24: "Update your view files to EJS ones"
// Convert your 404, about, index, and random.html files to EJS files
// Hint: add the .ejs suffix


// STEP 25: "Update your handlers to serve EJS"
// Update your app's handlers (for index, about, and 404) to serve the EJS files (instead of HTML). Also, set your app's view engine to ejs
// Hint: use .serve for your handlers
// Hint: use .set to register your view engine
// Hint: your view engine expects to find a 'views' folder, so you will no-longer need to give the more-verbose path argument; only the file name (Ex: 'about.ejs') itself.


// STEP 26:"Create Header & Footer partials"
// Before things get too big, it's a good time to cut-out repetitive code from your view files and store them in partials. This will give your app added modularity, and if you want to change something (say, a new nav link in your navbar, or a font refrence in the header), you will only have to make that change in one file after this! 
// In your 'views' folder, add a child folder named 'partials'. Create three .ejs files named "header", "footer", and "navbar". 
// Copy tne 'nav' element from one of your view pages into your navbar.ejs partial. Do the same for your 'head' element (copy it into your header partial)


// STEP 27: "Add to your partials"
// Let's add content to your partials:
// In your 'navbar' partial, 1) add unsorted list tags before and after your anchor tags, 2) wrap your <a> tags in sorted-list tags, and 3) before your <ul> section, add the following ((re)style as you see-fit!)
<div class="site-title">
<a href="/"><h1>Navigation</h1></a>
<p>A BitDegree Site</p>
</div>
// In your 'footer' partical, add "footer" tags. Also, add inner text that declares this page to be copywritten by you (and make sure to use '&copy;' in order to create the copyright icon).
// In your 'header' partial, add style tags. Inside of those tags, add the following css:
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
body {
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
    font-family: "Noto Serif", serif;
}
p,
h1,
h2,
h3,
a,
ul {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #222;
}
/* nav & footer styles */
nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    text-transform: uppercase;
}
nav ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
nav li {
    list-style-type: none;
    margin-left: 20px;
}
nav h1 {
    font-size: 3em;
}
nav p,
nav a {
    color: #777;
    font-weight: 300;
}
footer {
    color: #777;
    text-align: center;
    margin: 80px auto 20px;
}
h2 {
    margin-bottom: 40px;
}
h3 {
    text-transform: capitalize;
    margin-bottom: 8px;
}
.content {
    margin-left: 20px;
}
/* index styles */
/* details styles */
/* create styles */
.create-quote form {
    max-width: 400px;
    margin: 0 auto;
}
.create-quote input,
.create-quote textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
}
.create-quote label {
    display: block;
    margin-top: 24px;
}
textarea {
    height: 120px;
}
.create-quote button {
    margin-top: 20px;
    background: crimson;
    color: white;
    padding: 6px;
    border: 0;
    font-size: 1.2em;
    cursor: pointer;
}


// STEP 28: "Insert partials into your webpage views"
// Now that you've finished creating your partials, insert them back into your main view files (404, about, index and random), using EJS syntax. 
// Hint: replace your head element on each page with the equivilent partial, and insert your navbar and footer partials at the beginning and end of the 'body' section of each page.
// Hint: use <%-
// Hint: use the 'include' keyword
// Hint: you have to give EJS the file path as an argument for the 'include' keyword


// STEP 29: "Update Your 404"
// To take advantage of your header's new styling, replace your 404's current 'oops'-related elements with a 'div' element 1) possessing the classes "not-found" and "content", and 2) similar "oops!" language

// STEP 30: "Update Your About"
// Again, let's take advantage of our new styling: wrap your h-tag elements in a div with the classes "about" and "content". Then, re-style and re-write this content as you like! Maybe, make your h1 an h2, and make your h2 tag a 'p' tag; describe to the user (using engaging html formatting) that this app (eventually) will allow them to add new quotes to the database, see those quotes, and even delete them!


// STEP 31: "Hard-code parameters for your Index GET handler"
// Soon, your index page will show several quotes from a database - but for now, hard code some data in your  router's basic-endpoint ('/') handler. Declare a constant named "quotes", and store in it an array with at least three objects. These objects should have two keys - "author" and "snippet" - and you can put whatever you like for the paired-values ('author' could be 'Jack Handey', and 'snippet' could be a summary of the quote; for instance, our first entry in quotes.js could be summarized as "on Time-travel ..."). Also, note that you will use this new handler logic in the next steps to create a more dynamic index.ejs view.

// STEP 32: "Include your 'quotes' object in the Index's reponse"
// Update your '/' handler to also serve your 'quotes' object
// Hint: you can pass more than a specific view file in your response - you can also pass an object as a second argument, and include elements from your backEnd


// STEP 33: "Add basic elements to your Index.ejs"
// Before you add more complicated logic, flesh-out your index page's body by adding (after your <h> tags) a set of "section" tags with the ID of "index-display". Nest withn this section three elements: 1) an <h3> with a class of "author", 2) an <p> tag with a class of "snippet", and 3) a second <p> tag with inner text saying something like, "There are currently no quotes to available ...". Also, put place-holder text in your "author" and "snippet"-classed elements - say, "an author will be displayed here" and "a summary will be displayed here"

<h3 class="title">an author will be displayed here</h3>
<p class="snippet">a summary will be displayed here</p>
<p>There are currently no quotes to display ...</p>

// STEP 34: "Add EJS-based conditional logic"
// It's time to leverage EJS's ability to insert JavaScript code and logic into your HTML. First, you need to declare a conditional that will either A) show your "title" and "snippet"-classed elements *if* your response's 'quotes' object contains something, or B) will show your "..currently no quotes.." element otherwise
// Hint: if you're rusty on conditionals, remember that they evaluate a boolean value ... so if it's "true" that your 'quotes' object has more than 0 things being sent back, you can nest HTML you'd like to display in the conditional's block (and the same for "false" cases and the conditional's 'else' block)
// Hint: to write a conditional using vanilla JavaScript (which you've done a million times by now), you need to wrap it in EJS-specific tags
// Hint: use "<%" opening and "%>" closing tags
<% if (quotes.length > 0) { %>
    <h3 class="title">an author will be displayed here</h3>
    <p class="snippet">a summary will be displayed here</p>
<% } else { %>
    <p>There are currently no quotes to display ...</p>
<% } %>

// STEP 35: "Expand conditional to a 'forEach' loop"
// You need to make this conditional more dynamic, and display the hard-coded elements being sent from the back-end. To do this, wrap your "title" and "snippet" elements in a nested 'forEach' loop (so, "if quotes.length is greater than zero, do a forEach on these two html elements"). If you've done it correctly, you should now see (at least) three instances of your place-holder elements displayed on your webpage.
// Hint: still use <% and %>
<% if (quotes.length > 0) { %> 
    <% quotes.forEach(quote => {%>
        <h3 class="title">an author will be displayed here</h3>
        <p class="snippet">a summary will be displayed here</p>
    <% }) %> 
<% } else { %>
    <p>There are currently no quotes to display ...</p>
<% } %>


// STEP 36: "Make your front-end elements dynamic"
// It's time to replace the place-holder inner text of your "title" and "snippet" elements. Use EJS to display your back-end response's "author" and "snippet" properties
// Hint: EJS syntax for this is slightly different
// Hint: Use "<%="
// Hint: You can display the properties of objects using ".[property name]"
<% if (quotes.length > 0) { %> 
    <% quotes.forEach(element => {%>
        <h3 class="title">~ <%= element.author %>,</h3>
        <p class="snippet"><%= element.snippet %></p>
    <% }) %> 
<% } else { %>
    <p>There are currently no quotes to display ...</p>
<% } %>

// STEP 37: "Add basic 'create' elements to your app"
// If you want to be able to create/add new quotes to your database (which we're going to set up in just a little while from now), you will need to create the UI for that action; add 1) a handler for a '/quotes/create' route in your router, 2) a "create" webpage to be served (give it the basic layout for now - a doctype, html, and body tags .. and don't forget to include your partials!), and 3) update your navbar partial to include a link for the page

// STEP 38: "Make the user interface for adding new quotes"
// Your app needs to provide users with a way to enter data (it will soon take that data and store it). Add a div with the classes of "create-quote" and "content", and nest within it a form. Give that form three input elements and a button element. Set your inputs' "type" to "text", make them 'required', and give them IDs - say, "author", "snippet", and "body". Give your button some inner text (like, "Submit" etc)
<input type="text" id="author" required />
<input type="text" id="snippet" required />
<input type="text" id="body" required />
<button>Submit</button>

// STEP 39: "Add labels to your input fields"
// Add a label element before each of your input elements. Make them target their associated inputs, and give them inner text refrencing their input's ID (like, "Quote author:", "Quote synopsis:", etc)
// Hint: use 'for=' to target the sibbling input field
// Hint: Labels should target the *ID* of a given input to become associated with them
<label for="author">Quote author:</label>
<input type="text" id="author" required />
<label for="snippet">Quote synopsis:</label>
<input type="text" id="snippet" required />
<label for="body">Quote body:</label>
<input type="text" id="body" required />
<button>Submit</button>

// STEP 40: "Move your CSS from the Header partial to "
// Before setting up the database, now is a good time to further-modularize your app by decoupling your CSS: currently, you have a file in the 'public' folder (but it's empty), and all of your styling instructions are, instead, in your 'header' partial. Cut-paste these instructions into your style.css file and add a link refrence. Also, tell your Express router to 'use' the public folder (as a "static" one). 
// Hint: make sure your link specifies its relationship
// Hint: you may need to tell your app to go *two* folders-up in order to access styles.css
// Hint: use "express.static"


// STEP 41: "Database I: Setup MongoDB"
// It's time to set up your database connection. 
// Go to mongodb.com and log-in. If you didn't delete it, you should still have your organization from earlier BitDegree work - and can find it and other previous organizations in a drop-down menu in the upper-left corner of the webpage (likely titled "All Organizations", your name, or something similar).
// If, however, you need to start from scratch and create a new one, mongoDB will automatically serve you a series of "quick setup" pages; you can create an organization (named, say "BitDegree_Work") and choose the "mongoDB Atlas" option, confirming your choices with the "Create Organization" button on the following page; 
// then you can create a new project (name it, click 'create project'), and (on the following page) build the database cluster (a "shared", free one), name the cluster (the last, "Cluster Name" option) and confirm your choices with the 'Create Cluster' button;  
// then you can create a user, opt to connect from "my local environment", and click the "Add my current IP Address" button, confirming your choices by clicking the "Finish & Close" button on the following page.
// Congratulations! Your cloud-based database is ready to be connected-to and used!!

// STEP 42: "Database I: Connect to MongoDB"
// (After you've navigated - on cloud.mongodb.com - from organization > project > your cluster (in "Database Deployments")) Click the "connect" option for your cluster, select "connect using Compass", select "I have MongoDB Compass", and copy the connection string (note that you will need to replace <password> (in the connection string) with the password you created for that user: mongodb+srv://<user_name>:<password>@... 
// If you get an error that the connection is "closed", it's likely that you haven't 'whitelisted' your current IP address (because it has changed, you're using a vpn etc). Add your current IP to the whitelist and retry.
// Additional info:
// - users are listed under "Security" > "Database Access"
// - connections are listed under "Security" > "Network Access"

// STEP 43: "Connect MongoDB Compass GUI for sanity-checks"
// Open MongoDB's Compass, select "New Connection" (upper-right menu), and enter the string. Note: you will want compass open later-on, so you can check it and confirm whether your router is succesfully interacting with the database.

// STEP 44: "Database II: local server connection"
// First, install mongoose using Node Packet Manager. Second, import it into your router.
// Declare your database URI (your connection string) in a constant
// Tell Mongoose to connect to your database using that dbURI, and pass-in the following as a second argument: { useNewUrlParser: true, useUnifiedTopology: true } ).
// Use .then and .catch to make your app 1) wait for a connection to be established to the database, 2) *then* begin listening to port 3000 (and log a message like "connected to DB"), and 3) catch & log any errors
// Hint: use .connect()

// STEP 45: "Make a 'Model' I - Imports"
// Now that you're connected, it's time to declare the schema that MongoDB will use to create database entries. Create a new folder in your back_end directory named "models", and a new file in that folder named "quote.js" (Note: *singular*). In your quote.js file, import Mongoose, and store mongoose's 'Schema' constructor in a constant with the same name.
// Hint: use .Schema


// STEP 46: "Make a 'Model' II - Schema"
// Declare your new Schema in a constant (named something like 'quoteSchema') and give it two arguments: first, an object containing keys that match your create.ejs's IDs, and values that specify 
// - the data-type of these fields (strings), and 
// - that they are all required.
// Second, another object with key "timestamps" and value "true" (so that we can also store the time of database CRUD events).
// Hint: you can use nested objects to store data-type and requirement


// STEP 47: "Make a 'Model' III - Exports & Imports"
// Now that you've established your database's schema, store + export it out of your 'quote.js', and import it into your backEnd.js.   
// Hint for *storing & exporting*: Remember that what you need to do is use mongoose's built-in, general 'model' method to create a new, specific instance (named something like, say, "Quote"), and give it two arguments: the data table's name (like, the 'Blog' table), and the schema you've just stored.
// Hint for importing: you'll want to import your model the same way that you imported your list of quotes from quotes.js earlier-on.

// STEP 48: "Use your Quote model in your Create handler I - Testing"
// It's time to test your model's "Create" logic. In your backEnd.js, make a new GET handler that can receive a '/quotes' route. Next, in your handler's body, declare a new instance of your Quote constructor, and store it in a constant named something like "newQuote"; pass into-it an object with 'author', 'snippet', and 'body' keys, and whatever values you like - you're just testing that they can be saved to your database. Make your hanlder save the newQuote, *only-then* either send the result as a response, or log any error. Run your '/quotes' route in your browser, and check Compass to see if the hard-coded entries saved succesfully. 
// Hint: use new Quote({})
// Hint: use .then and .catch
// Hint: use req.body


// STEP 49: "Use your Quote model in your Create handler II - Implementing"
// Delete the hard-coded object and instead pass-in the request's body. Then, change your '/quotes' handler from a GET to a POST handler. Finally, make your app use express's "urlencoded" method, so that it can parse what will be sent from the front-end.


// STEP 50: "Use your Quote model in your Create handler III - Connecting the Front End"
// In your create.ejs, add both a POST method, and a "/quotes" action to your form. For each input, add a "name" property with a definition matching the input's ID. Then, try to make new database entry by entering data into your create.ejs's fields and clicking the submit button (again, check compass to confirm).


// STEP 52: "Small Fixes"
// Change your .post handler's response to redirect to '/quotes' (instead of displaying the response) and add the following to your styles.css:
.quotes a {
	display: block;
	margin: 40px 0;
	padding-left: 30px;
	border-left: 6px solid crimson;
}
.quotes a:hover h3 {
	color: crimson;
}


// STEP 52: "Redirect to a new, dynamic GET Index handler"
// In your '/' GET handler, delete or comment-out your constant (storing the hard-coded database entries made earlier) and the response. Next, make the handler *instead* redirect to the route '/quotes'. Create a new GET handler for this '/quotes' route. Note: make sure that this and any other '/quotes' handlers come *after*/below this '/quotes/create' handler. Make the '/quotes' GET handler 1) find all Quote database entries, and 2) passes the result into a response - one that renders both the 'index' view, and an object with a key of "quotes" and the results as its value (have it also catch and logs errors).
// Hint: use .redirect
// Hint: use .find
// Hint: use quotes: result


// STEP 53: "Make a Details view page"
// In order to see individual quotes, we need a new webpage. In your views folder, create a new ejs file named "details". Copy your 404's layout (omitting the div with class "not-found" etc) into your details.ejs; instead, put a div with the classes of "details" and "content". Nest three more html elements within that div:
// - an h2, with inner text of Quote Title,  
// - a paragraph element, with inner text of Quote Body, and 
// - a div wrapped-around/parenting the paragraph element - with a class of "content"

// STEP 54: "Make a SHOW action handler"
// You now need a handler that can show a single quote: make a new GET handler for the route '/quotes/:id'. In it, 1) declare a variable named "id" equal to the request's ID paramter, 2) pass the variable into your Blog model's findByID method, and then 3) pass the result (as a value with a key of "quote") and the details webpage as a response.


// STEP 55: "Link your Index page to your Details page"
// In order to complete this process, go to your index.ejs and find your "author" and "snippet" elements. Make them clickable links by wrapping them in an anchor tag - one with a class of "single" and an href of '/quotes/. Make the href dynamic by adding the quote's ID using EJS's. You should now be sent to the details page whenever you click on a quote, but not see the quote - just its ID in the url's parameter.
// Hint: use "<%="
// Hint: you need to use ._id on your forEach's instance-variable - just like you did for .author and .snippet


// STEP 56: "Make your Details page dynamic"
// In your Details.ejs, replace the inner text of "Quote Title" and "Quote Body" with equivilent, EJS-styled template literals
// Hint: make template literals just like your index's


// STEP 57: "Add a DELETE handler"
// In your backEnd.js, create a new handler - one that will receive DELETE requests for the '/quotes/:id' route. Copy your show handler's logic, but 1) replace "findById" with "findByIdAndDelete" and 2) have it render the index page


// STEP 58: "Add a Delete Button to your Details page I - The Button"
// In your details.ejs, add an anchor tag as the last, nested element of the parent "details content" div. Give it a class of "delete", a data-doc attribute defined by blog._id, and inner text of "delete". After your "footer" partial, add a set of script tags. Within this script declare a constant named "trashcan" and store in it the document's anchor tag
// Hint: your data-doc attribute's definition needs to be an EJS template literal (like the ones above it)
// Hint: use .querySelector for the document query
// Hint: target a.delete


// STEP 59: "Add a Delete Button to your Details page II - The Button's Logic"
// Give your trashcan a click event listener. Have it 1) declare a constant named "endpoint" that stores `/quotes/${trashcan.dataset.doc}`, and 2) has the following code (paste this):
fetch(endpoint, {
    method: "DELETE",
})
    .then((response) => {
        console.log(response.json);
    })
    .then((data) => (window.location.href = "/quotes"))
    .catch((err) => {
        console.log(err);
    });
});


// STEP 60: "Give your button some style"
// Add the following to your styles.css:
.details {
	position: relative;
}
.delete {
	position: absolute;
	top: 0;
	right: 0;
	border-radius: 50%;
	padding: 8px;
}
.delete:hover {
	cursor: pointer;
	box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}

