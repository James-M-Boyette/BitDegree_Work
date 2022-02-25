"use strict";

// 7.6, "Create a User Registration Model"

// Description: It's time to use your new database powers in the *most* useful way possible!! ... Create a database, using express and mongo, of your favorite fictional characters - say, those most-excellent Marvel superheros, the X-Men! Or, you know, whomever *you* want to make lists about ... They're probably almost as cool. 

// STEP 1: Set-up: Create a folder named "7.6 express-project", navigate inside of that folder (using terminal), and run "npm init -y". Update your package.json to include "type": "module". Run "npm install mongoose". Create an "index.js" file.


// STEP 2: (In index.js) import mongoose form "mongoose" and log a test message to console; run your index.js file with node to make sure everything is working properly. 
import mongoose from "mongoose";

// STEP 3: Create a database (say, named "marvel") and a collection (say, named "characters") using MongoDB's Compass. Once created, navigate (in compass) to the "characters" document - there should currently be no entries in the database ...
// Hint: if everything went well in assignment 6.6, you should see your current local databases on the left-side of interface. Click the "+" icon at the bottom-left to create the new database


// STEP 4: (Back in your index.js) Connect your index.js to your database, and set up a basic error message by entering the following four lines of code (in index.js):
const connectionString = "mongodb://localhost:27017/marvel";

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB Connection Error"));


// STEP 5: Create a schema of at least four properties for your database entries (say - "code_name", "real_name", "team", and "marvel_comic" - all as strings) and store it in a constant named "xmenCharactersSchema"
// Hint: your constant should store a new mongoose Schema
const xmenCharacterSchema = new mongoose.Schema ({
    code_name: { type: String },
    real_name: { type: String },
    team: { type: String },
    marvel_comic: { type: String }
})

// STEP 6: Create a model and store it in a constant called "Member"
// Hint: use mongoose's .model method
// Hint: the .model method will take two parameters: your database's collection name (in capitalized, singular-form ie "Tank" instead of "tanks"), and the schema you've just proscribed
const Member = mongoose.model('Character', xmenCharacterSchema); 

// STEP 7: Using your model, declare four constants, and store in them instances of the members of the all-mighty X-Men (including their code names, real names, and team (some are on 'blue' team, and some on 'gold)). Make sure to have at least one member from gold, and one from blue in your. Make your index.js save each entry to your database after being declared. Run your index.js with node, stop it after a few moments, and then check your database to see whether your entries have saved succesfully.
// Hint: your model will act like a constructor, so, each constant should be a 'new Member'

async function createMembers(){
    const wolverine = new Member(
        {code_name: "Wolverine", real_name: "James Howlett", team: "blue", marvel_comic: "X-Men"}
        );
    wolverine.save();

    const beast = new Member(
        {code_name: "Beast", real_name: "Hank McCoy", team: "blue", marvel_comic: "X-Men"}
        );
    beast.save();

    const iceMan = new Member(
        {code_name: "Ice Man", real_name: "Louis Drake", team: "blue", marvel_comic: "X-Men"}
        );
    iceMan.save();

    const storm = new Member(
        {code_name: "Storm", real_name: "Ororo Munroe", team: "gold", marvel_comic: "X-Men"}
        );
    storm.save();
}

// STEP 8: Store your new Member declarations inside of an asynchronus function named "createMembers". Declare a new asynchronous function named findMember. Have it 1) [a]wait until a member of 'gold team' is found 2) store the result in a constant named "target", and 3) log 'target'. Call your findMember function at the end of index.js
async function createMembers(){
    const wolverine = new Member(
        {code_name: "Wolverine", real_name: "James Howlett", team: "blue", marvel_comic: "X-Men"}
        );
    wolverine.save();

    const beast = new Member(
        {code_name: "Beast", real_name: "Hank McCoy", team: "blue", marvel_comic: "X-Men"}
        );
    beast.save();

    const iceMan = new Member(
        {code_name: "Ice Man", real_name: "Louis Drake", team: "blue", marvel_comic: "X-Men"}
        );
    iceMan.save();

    const storm = new Member(
        {code_name: "Storm", real_name: "Ororo Munroe", team: "gold", marvel_comic: "X-Men"}
        );
    await storm.save();
    process.exit()
}

async function findMember (){
    const target = await Member.findOne({team: "gold"})
    console.log(`Attempted to find an X-Men member on team "${target.team}" with the following result:`, target);
    process.exit()
}

// STEP 9: Declare a new, asynchronous function and name it "deleteAll". Have it 1) find all the characters on the "blue" team and log the results, delete all of those entries, and then 3) exit the process. Call your function (and turn off your other calls - findMember(), createMember() etc). You should have at least one entry remaining in your database ...
async function deleteAll (){
    const targets = await Member.find({team: "blue"})
    console.log(`Here are the charcters in the marvel_comic 'x-men':`, targets)
    console.log(`deleteAll run`);
    await Member.deleteMany({team: "blue"})
    
    process.exit()
}

// STEP 10: Turn off your deleteAll call, turn on your createMembers call, and re-run index.js. Check your database - you should have redundant entries. 

// STEP 11: Declare a new, asynchronous function and name it "updateOne". Have it 1) find the first instance of a redundant entry in your database, and store that in a constant named "target", 2) log that old entry/"target", 3) (find and) update the target with new, unique information (change the code name to a new x-men character etc) and store the result in a constant named "result", and 4) log the newly-updated "result". Have your function exit
// Hint: you will need to use await
// Hint: you can use $set to update more than one field of a database entry at a time
async function updateOne (){
    const targets = await Member.findOne({code_name: "Storm"})
    console.log(`Here's the first instance of a character named 'Storm':`, targets)
    const result = await Member.findOneAndUpdate(
        {code_name: "Storm"}, 
        {$set:
            {code_name: "Ice Man",
            real_name: "Louis Drake",
        }},
        {returnDocument: "after"}
        )
    // const result = await Member.deleteMany({marvel_comic: "X-Men"},{returnDocument: "after"})
    console.log(`Here are the entries remaining in your database:`, result);
    
    process.exit()
}

// STEP 12: Run your index.js file until you have only unique members of the x-men in your database (no duplicate entries of a character)