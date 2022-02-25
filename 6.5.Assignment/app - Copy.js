"use strict";

window.onload = () => {
    // Assignment 14.2: "Mad Libs" Project
    
    // Concept & Setup

    // Make sure to explain what MadLibs are, in general, so the student understands what we're going for
    // Create a repo online, and then clone it locally. 
    // In your folder, create two files: an app.js file (which we will be doing the majority of our work in) and an index.html file; you can also just copy the html and js files we provided in 4.11 ...
    // Add, commit, and push to Github via your local console
    // **... Does BitDegree want us to film gifs etc to demo the steps?
    
    // Code

    // Part 1, "Story"
    // First, find a story: you could choose one you find insteresting online (for instance, try googling "unbelievable but true tech stories"), or you could make one up! Something about three paragraphs-long should be fine (go shorter or longer if you'd prefer). Store this story in your code file twice: once in a variable (something like originalStory), and once at the end of your code file in its original form, commented-out (it's always good to have the original available for refrence etc in case you run into trouble later!)

    // Second, you need to identify parts of that story you would like to replace. For any noun, verb, adjective etc that you'd like the user to (re)define, replace that word with a **tag function containing a unique variable 
    // Note: you can re-use variables if you'd like the same word to appear multiple times in the story; ex: protagonistName can be used repeatedly if you want the same name to be used for a character throughout a story). You should end up with a few paragraphs that contain tag functions like this: 'In ${yearOne}, computer pioneer ${nameOne} found herself working on a ${computerModel} ...'. 
    // **Is this what ${} is called?
    // Check your work: Add a command to show the story in your web browser's developer console (so that we can check for errors - note that you will be looking at this for most of your project, so keep it open with F12)
    // Once everything looks good, add, commit and push your work to Github (commit with a message like "Add mad-lib replacement variables to story")

    // Third, we need more variables: Once you found every word you'd like to replace, talley them up and store that number in a variable (numberOfQuestions etc). 
    // Also, declare each of these template literal tag functions as variables at the beginning of your file. 
    // Once finished, add, commit and push your work (commit with a message like "Add declarations of mad-lib replacement variables")
    // Side-note: as you may have noticed, your code is starting to get long, and possibly a bit confusing. Try adding headings to each section of your code (commented-out) to keep things clear and organized.
    

    // Part 2, "User Prompts"
    // Create user-prompts for each mad-lib replacement (ie "Enter a verb", "Enter a noun" etc and store these strings in a variable (named "questionArray", etc))
    // Create the logic that will store the user inputs in the correct variables:
    // Write a 'for' loop 
    // [Hint] Give the following parameters: (let i = questions; i >= 0; i--)
    // Inside your loop, log 'i' to the terminal to make sure your loop is working properly
    // [Hint] remember that in order to create a list of things for our 'for' loop to do, we need to add curly-braces after our parameters ... so you should have 'for (let i = questions; i >= 0; i--) { console.log(i);}'
    // Now that we know our 'for' loop works, declare a variable *outside of the 'for' loop* that is set to 0 (named questionCounter, etc) so that we can 
    // Next, inside of your loop, increment this variable up by one, and log it (because we need a number to go up by one, and allow us to read each element of our questionArray)
    // Once you've confirmed that your loop both 1. decreases your 'i' variable and 2. increases your questionCounter variable, make your loop log a third thing: an element of your question array, based on your questionCounter variable (now, your loop should be able to log the first question to terminal, increase the counter by one, and then read the next question - over and over - because we are using the counter to indicate which index place in our array we'd like to read. We originally set it to '0', so our loop looks at the first position in our questionArray, and then we update the counter in order to have it look at the second position in our array; and so on.)
    // Note: you will want to put this line prior to increasing the counter in order to not accidentily miss your first question (you *don't* want to increase from 0 to 1 *before* reading from your questionArray - you want to read the zero-th index (of your array) *first*, and *then* increase the counter)
    // You should now be seeing each question in console - if you aren't, it's time to start de-bugging. 
    // For a better user experience, you can take this opportunity to tell the user how many questions / word-replacements they have left to answer immediately after being shown the current question: add a string that uses a tag function to concatonate your "questionsTotal" and helpful language (ie console.log(questionArray[questionCounter] + `(${questions} questions left)`)
    // In order to make this go down, add a command right after to decrement the variable (questionTotal --;)
    // Once everything works in this section, git add, commit & push
    // Also, you may wish to turn off all of your log to console commands *except* the "question" one ( console.log(questionArray[questionCounter] + `; (${questionTotal} questions left)`); )

    // Part 3, "User Inputs"
    // Create a variable (before our loop) into-which we will store the user's inputs (named userInputs etc)
    // Inside of our loop, copy our remaining log-to-console command and replace its console.log with the prompt method (this will create a pop-up window with 1. Our questions, and 2. a field for users to enter things). 
    // Hint: you should now have the following line:
    // prompt(questionArray[questionCounter] + `... (${questionTotal} questions left)`);
    // Store the user's input in our userInputs variable, using the .push method
    // ( Hint: userInputs.push(prompt(questionArray[questionCounter] + `... ({questionTotal} questions left)`)); )
    // Add a line immediately after logging-to-console the contents of your userInputs variable and check to see whether it successfully grows with each input
    // Now that we can succesfully store all of the user's input into an array, use the .split method on it after our loop
    // Using the 'alert' method, add a notice for the user that they've finished giving madlib inputs (and the story is ready) - something like alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');
    
    

    // Part 4

    // In order to add polish and make this project a part of your online portfolio of work, you need to do a few additional things: 
    // Convert your paragraphs to html-ready elements (add <h2></h2> tags to the beginning and end of each paragraph)
    // Add an instruction to print the story to the webpage with document.write(originalStory); (put it after you console.log the story) 
    // If you haven't already, now is the time to go back and do a final polish on your work - delete the original nouns, verbs etc in your story so that only the tag functions remain (you want '{yearOne}' instead of 'In 1947 ${yearOne}')

    // Part

    // They need to push the final result to github
    
    // Total questions
    let questionTotal = 28;
    
    // Question tracker
    // let qsLeft = `; (${questions} questions left)`;
    
    // MadLib variables
    // let yearOne;
    // let nameOne;
    // let computerModel; 
    // let famousSchool; 
    // let relationsOne; 
    // let bugType; 
    // let computerPart; 
    // let professionPlural; 
    // let bookType; 
    // let verbPastOne; 
    // let verbPastTwo; 
    // let adjectiveOne;
    // let pronoun; 
    // let nounOne; 
    // let verbTwo; 
    // let monthDayYear; 
    // let ageOne; 
    // let nounPlural; 
    // let museumName; 
    // let cityState; 
    // let adjectiveTwo; 
    // let physicsNoun; 
    // let nameTwo; 
    // let yearTwo; 
    // let writtenInstrument; 
    // let badThing; 
    // let oldMachine; 
    // let huntingTool; 
    // let verbInfinitive; 
    

    // Decomp:
    // - We need to store user inputs in each variable.
        // Maybe we can store each input as a string in an array, and then loop through that array while defining each variable with the given element? ... or maybe we can use a switch to do the same thing?
    // - We need to run through a list of questions
    // - We need to reduce the total number of 'questions' by 1 each time

    // Question Counter (which question are we on)
    let questionCounter = 0;
    // Test logic:
    let solicitation = `Please enter a`;
    let questionArray = [
    `${solicitation} year ("2001", "2021" etc)`,
    `${solicitation} full name`, 
    `${solicitation} computer-specific model ("commodore 64" etc)`,
    `${solicitation} famous school`,
    `${solicitation} word for people you know (friends, family etc)`,
    `${solicitation} type of bug`,
    `${solicitation} computer-specific part`,
    `${solicitation} profession (plural-tense, i.e. "painters")`,
    `${solicitation} type of book`,
    `${solicitation} verb (past-tense)`,
    `${solicitation}nother verb (past-tense)`,
    `${solicitation}n adjective`,
    `${solicitation} pronoun`,
    `${solicitation} noun`,
    `${solicitation} verb`,
    `${solicitation} month, day and year (long-form, ie January, 1 2000)`,
    `${solicitation} number`,
    `${solicitation} noun (plural-tense)`,
    `${solicitation} famous museum`,
    `${solicitation} city, state (ie Washington, D.C)`,
    `${solicitation}n adjectiv`,
    `${solicitation} physics-specific noun (ie "gravity")`,
    `${solicitation} person's nam`,
    `${solicitation} numbe`,
    `${solicitation} type of document (ie "poem", "essay" etc)`,
    `${solicitation} bad thing (ie an "error")`,
    `${solicitation}n old machine`,
    `${solicitation} tool used for hunting`,
    `${solicitation} verb (infinitive-tense)`,
    ]
    
    let userInputs = [];
    for (let i = questionTotal; i >= 0; i--) {
        // console.log(`The "i" of our "for" loop `);
        // console.log(i);
        // console.log("What question (of questionArray) is accessed (using questionCounter):");
        console.log(questionArray[questionCounter] + `... (${questionTotal} questions left)`);
        userInputs.push(prompt(questionArray[questionCounter] + `... (${questionTotal} questions left)`));
        console.log(userInputs);
        questionCounter ++;
        // console.log(`This is the current "questionCounter" variable (it should go up):`);
        // console.log(questionCounter);
        questionTotal --;
        // questionsLeft = `; (${questions} questions left)`;
        // console.log(`This is the current "Questions" variable (it should go down ... and be the same as the next "i"`);
        // console.log(questionTotal);
        }
        // let userInputs = [`2021`,
        //     `James`,
        //     `Nintendo 64`, 
        //     `Colgate`, 
        //     `co-workers`, 
        //     `bee`, 
        //     `CPU`, 
        //     `carpenters`, 
        //     `text book`, 
        //     `ran`, 
        //     `washed`, 
        //     `slowly`, 
        //     `they`, 
        //     `television`, 
        //     `skip`, 
        //     `January, 1 2000`, 
        //     `124`, 
        //     `wheels`, 
        //     `Louvre`, 
        //     `St Louis, Ms`, 
        //     `expensive`, 
        //     `black hole`, 
        //     `St Nicholas`, 
        //     `3000`, 
        //     `love letter`, 
        //     `mistake`, 
        //     `cotton gin`, 
        //     `duck call`, 
        //     `loose`]
            

        // let madLibArray = [yearOne,
        //     nameOne,
        //     computerModel, 
        //     famousSchool, 
        //     relationsOne, 
        //     bugType, 
        //     computerPart, 
        //     professionPlural, 
        //     bookType, 
        //     verbPastOne, 
        //     verbPastTwo, 
        //     adjectiveOne,
        //     pronoun, 
        //     nounOne, 
        //     verbTwo, 
        //     monthDayYear, 
        //     ageOne, 
        //     nounPlural, 
        //     museumName, 
        //     cityState, 
        //     adjectiveTwo, 
        //     physicsNoun, 
        //     nameTwo, 
        //     yearTwo, 
        //     writtenInstrument, 
        //     badThing, 
        //     oldMachine, 
        //     huntingTool, 
        //     verbInfinitive]
    // console.log(madLibArray);

    // The following simply *replaces* the undefined variable with the string ... instead of storing it in the variable
    // console.log(madLibArray[0]);
    // console.log(typeof madLibArray[0]);
    // madLibArray[0] = userInputs[0]
    // console.log(madLibArray[0]);
    // console.log(typeof madLibArray[0]);
    // let index = 0;
    // madLibArray.forEach(element => {
    //     element = `${madLibArray[index]}`;
    //     index ++});
    // console.log(madLibArray)

    // The following proves that 1. you can store a variable in an array ... but you need to (in this case at least) initialize it first
    // let variable = "";
    // console.log("+ This is what the user input-ed .. it should be an object if it's a variable");
    // console.log(variable);
    // console.log(typeof variable);
    // let testArray = [];
    // testArray.push(variable);
    // console.log("+ This is the testArray, and it's type")
    // console.log(testArray)
    // console.log(typeof testArray)
    // console.log("+ This is the testArray's 0'th index, and that element's type")
    // console.log(testArray[0])
    // console.log(typeof testArray[0])
    // console.log(`Hi! This is my special ${testArray[0]}`)
    // testArray[0] = prompt("What is this?")
    // console.log("+ This is the testArray's (hopefully) new 0'th index, and that element's type")
    // console.log(testArray[0])
    // console.log(typeof testArray[0])
    // console.log(`Hi! This is my special ${testArray[0]}`)

    // Test 2
    // let variable0 = "";
    // let variable1 = "";
    // let array = [variable0, variable1];
    // let answers = [`Bahamas`, `Toyota, 1982`];
    // let questions = 2; 
    // let i = 0
    // for (let i = questions; i >= 0; i--) {
    //     answers.forEach(instanceVariable => {
    //         array[i] = instanceVariable;
    //         i++;
    //     })
    
    // console.log("Here's the array's entire contents after")
    // console.log(array)
    // console.log("Here's the 0'th index & it's type")
    // console.log(array[0])
    // console.log(typeof array[0])
    // console.log(`Hey! Here's the array's 0'th index concatonated into the sentance: ${array[0]}`)

    
    // console.log(`The "questions" variable should be '0' ... is it?`);
    // console.log(questions);
    // should we add an "if" to make sure the user actually wrote something? Like 'if variable == "" (an empty string), re-do the message with an additional "hey - you didn't seem to add anything?""

    // User-Input variables & questions
    // let adjectiveOne = prompt('Please type an adjective' + questionsLeft);
    // questions -= 1;
    // questionsLeft = ` (${questions} questions left)`;
    // let verb = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
    // questions -= 1;
    // questionsLeft = ` (${questions} questions left)`;
    // let noun = prompt('Please type a noun' + questionsLeft);
    
    

    // Original Output
    // const sentence = "<h2>There once was a " + adjectiveOne;
    // sentence += ' programmer who wanted to use JavaScript to ' + verb;
    // sentence += ' the ' + noun + '.</h2>';
    
   
    // The User's not-drunk history of computer bugs
    let originalStory = `<h2>In ${userInputs[0]}, computer pioneer Grace ${userInputs[1]} found herself working on a Mark II ${userInputs[2]} at Harvard ${userInputs[3]}. It was at this time that her ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the computer’s ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the moth and taped it in their log ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."</h2>

    <h2>Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[11]} culture. ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[13]} favorite ${userInputs[14]}. ${userInputs[1]} died ${userInputs[15]} of natural causes on January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, the offending moth’s ${userInputs[17]}, along with the original log ${userInputs[8]}, can be seen at the Smithsonian National Museum of American ${userInputs[18]} in Washington, D.${userInputs[19]}.</h2>

    <h2>And while this is the "${userInputs[20]} use case of finding a computer ${userInputs[2]} ${userInputs[5]}, the original use of the word dates further back in ${userInputs[21]} to Thomas ${userInputs[22]}, who in an ${userInputs[23]} ${userInputs[24]} used the term "bug" to refer to a technological ${userInputs[25]}. While he worked on the quadruplex ${userInputs[26]}, he said it needed a "bug ${userInputs[5]} ${userInputs[27]} to ${userInputs[28]} properly.</h2>`
    console.log(originalStory);

    // Back-Up of old story
    // let originalStory = `<h2>In 1947 ${yearOne}, computer pioneer Grace Hopper ${nameOne} found herself working on a Mark II Computer ${computerModel} at Harvard University ${famousSchool}. It was at this time that her associates ${relationsOne} discovered a moth ${bugType} had gotten trapped in one of the computer’s relays ${computerPart} and was causing an error. The operators ${professionPlural} removed the moth and taped it in their log book ${bookType}, identifying it as the "first actual case of bug being found ${verbPastOne}."</h2>

    // <h2>Word got out that the team had "debugged" "${verbPastTwo}" the computer ${computerModel}, hence leading to the phrase’s use in computing and pop ${adjectiveOne} culture. Hopper ${nameOne} readily admitted that she ${pronoun} was not there when the incident occurred, but that didn’t stop it from becoming one of her ${pronoun} favorite stories ${nounOne}. Hopper ${nameOne} died at ${verbTwo} of natural causes on January 1, 1992${monthDayYear}, at the age of 85${ageOne}. For those interested, the offending moth’s remains${nounPlural}, along with the original log book${bookType}, can be seen at the Smithsonian National Museum of American History ${museumName} in Washington, D.C${cityState}.</h2>

    // <h2>And while this is the "modern"${adjectiveTwo} use case of finding a computer bug${computerModel} ${bugType}, the original use of the word dates further back in time ${physicsNoun} to Thomas Edison${nameTwo}, who in an 1878${yearTwo} letter${writtenInstrument} used the term "bug" to refer to a technological glitch${badThing}. While he worked on the quadruplex telegraph${oldMachine}, he said it needed a "bug trap"${bugType} ${huntingTool} to function${verbInfinitive} properly.</h2>`
    
    // End of User Inputs
    // alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');

    // Output
    console.log(originalStory);
    document.write(originalStory); // This is throwing the child node error: Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
        // break

    // -+ Original Materials +-
    
    // Template Story: "The Origin of computer bugs, according to a 4 year old"

    // let originalStory = `In 1947 computer pioneer Grace Hopper found herself working on a Mark II Computer at Harvard University It was at this time that her associates discovered a moth had gotten trapped in one of the computer’s relays and was causing an error. The operators removed the moth and taped it in their log book  identifying it as the "first actual case of bug being found." 
    
    // Word got out that the team had "debugged" the computer hence leading to the phrase’s use in computing and pop culture. Hopper readily admitted that she was not there when the incident occurred, but that didn’t stop it from becoming one of her favorite stories Hopper died of natural causes on January 1, 1992 at the age of 85 For those interested, the offending moth’s remains along with the original log book can be seen at the Smithsonian National Museum of American History in Washington, D.C.

    // And while this is the "modern" use case of finding a computer bug the original use of the word dates further back in time to Thomas Edison who in an 1878 letter used the term "bug" to refer to a technological glitch While he worked on the quadruplex telegraph he said it needed a "bug trap" to function properly.`

    // // Question Counter
    // var questions = 3;
    // var questionsLeft = ' [' + questions + ' questions left]';
    // // User-Input variables & questions
    // var adjective = prompt('Please type an adjective' + questionsLeft);
    // questions -= 1;
    // questionsLeft = ' [' + questions + ' questions left]';
    // var verb = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
    // questions -= 1;
    // questionsLeft = ' [' + questions + ' questions left]';
    // var noun = prompt('Please type a noun' + questionsLeft);
    // // End of User Inputs
    // alert('All done. Ready for the message?');
    // // Original, The Final Result/Composit
    // var sentence = "<h2>There once was a " + adjective;
    // sentence += ' programmer who wanted to use JavaScript to ' + verb;
    // sentence += ' the ' + noun + '.</h2>';
    // document.write(sentence);
}