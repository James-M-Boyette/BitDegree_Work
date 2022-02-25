"use strict";
// Assignment 3.12, "Add Button Events & Input Conditionals"

// Description: No sign-up form is complete without a button. Add one to yours, and give it some style! This is a great chance to show off to your client what kind of CSS and Javascript skills you've got (and feel free to do more styling than we supply, here). Also, the client had a final note for the week: they'd like you to make sure the user is prompted if they mistakenly leave any field blank.

// STEP 2: Store this button element in a variable named submitionButton, and add mouseover and away listeners that will log the user’s behavior
const submitionButton = document.querySelector("#submit");
submitionButton.addEventListener("mouseenter", function(){console.log("User considering SUBMITTING <button> ...");});
submitionButton.addEventListener("mouseleave", function(){console.log("User DIDN'T submit <button> ...");});

// STEP 3: Add to your mouse on and mouse off listeners (for the submit button) that make the button slightly bigger, change its background color, and text color when hovered-over (and toggled back to normal when not)
// Hint: chain attributes of the button using "."
// Hint: use .style.background, .style.color, and .style.font-size
const submitionButton = document.querySelector("#submit");
submitionButton.addEventListener("mouseenter", function(){
    console.log("User considering SUBMITTING <button> ...");
    submitionButton.style.color = "white";
    submitionButton.style.background = "rgb(32,32,32)";
    submitionButton.style.fontSize = "18px";
    // submitionButton.style.fontweight = "bold";
});
submitionButton.addEventListener("mouseleave", function(){
    console.log("User DIDN'T submit <button> ...");
    submitionButton.style.color = "black";
    submitionButton.style.background = "rgb(232,232,232)";
    submitionButton.style.fontSize = "13.5px";
    // submitionButton.style.fontWeight = "normal";
    // submitionButton.style.borderWidth = "thin";
});


// STEP 4: Add an onclick listener that will log that the button was pressed, and alert a message like “Welcome! We're delighted to have you as part of the family!!" when pushed
// Hint: use alert("")
submitionButton.onclick = function(){
    console.log(`Submission Button clicked!`);
    alert(`Welcome! We're delighted to have you as part of the family!!`);
}

// STEP 5: Add an event listener for the 'form' element that will, on "submit", prevent the default behavior of the browser; log when this happens.
// Hint: use preventDefault
// Hint: pass the event through the function and target it
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Prevented default browser behavior -");
});

// STEP 6: Add a conditional (to this listener) that will check whether any field has been left blank, and if so, log "User left a field blank"
// Hint: you want to check whether the given field's "value" is the equivalent of an empty string
// Hint: you can chain all the fields together in one conditional if you seperate the statements with 'or' characters (" || ")
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Prevented default browser behavior -");
    if (
        fName.value === "" || 
        lName.value === "" ||
        address1.value === "" ||
        address2.value === "" ||
        userCity.value === "" ||
        userState.value === "" ||
        userPhone.value === ""
        )
        {console.log("User left a field blank");};
});

// STEP 7: Declare an error message in your conditional, and store in it a new "paragraph element"
// Hint: use createElement
// Hint: you're going to be appending this as html, so make the element a paragraph, h1 etc
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Prevented default browser behavior -");
    if (
        fName.value === "" || 
        lName.value === "" ||
        address1.value === "" ||
        address2.value === "" ||
        userCity.value === "" ||
        userState.value === "" ||
        userPhone.value === ""
        ){
        console.log("User left a field blank");
        const errorMessage = document.createElement("p")
    }; 
});

// STEP 8: Style your error message's color, font size, and text. Log and test your error message. 
// Hint: this is another time you can chain the property "style" with subsequent css properties
// Hint: use .style.color, .style.fontweight, and .innerText
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Prevented default browser behavior -");
    if (
        fName.value === "" || 
        lName.value === "" ||
        address1.value === "" ||
        address2.value === "" ||
        userCity.value === "" ||
        userState.value === "" ||
        userPhone.value === ""
        ){
        console.log("User left a field blank");
        const errorMessage = document.createElement("p")
        errorMessage.style.color = "red";
        errorMessage.style.fontWeight = 800;
        errorMessage.innerText = "Sorry - no fields can be left blank!";
        console.log(errorMessage);
    }; 
});

// STEP 9: Append the errorMessage to the form element
// Hint: target the "form" element and use the append method
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Prevented default browser behavior -");
    if (
        fName.value === "" || 
        lName.value === "" ||
        address1.value === "" ||
        address2.value === "" ||
        userCity.value === "" ||
        userState.value === "" ||
        userPhone.value === ""
        ){
        console.log("User left a field blank");
        const errorMessage = document.createElement("p")
        errorMessage.style.color = "red";
        errorMessage.style.fontWeight = 800;
        errorMessage.innerText = "Sorry - no fields can be left blank!";
        console.log(errorMessage);
        form.append(errorMessage);
    }; 
});