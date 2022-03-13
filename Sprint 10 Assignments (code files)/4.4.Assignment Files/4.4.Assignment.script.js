"use strict";
// 4.4, "Insert JQuery library & Test"

// STEP 5: Store both box elements in new, JQuery-styled variables (remember to declare them using the JQuery dollar-sign convention in order to avoid confusion later). 
const $box1 = $("#box1");
const $box2 = $("#box2");

// STEP 6: Add a double-click listner for your JQuery box1 object and have it log something like "JQuery was used on a double-click!"
// Hint: instead of using querySelector etc, use the $() syntax
$("#box1").dblclick(function(){
    console.log("JQuery was used on a double-click!");
})

// STEP 7: Pass the event through the function and store it in a variable; log the element
$("#box1").dblclick(function(e){
    console.log("JQuery was used on a double-click!");
    const element = e.target;
    console.log(element);
})

// STEP 8: Make the dblclick event toggle the size of the box from normal to large
// Hint: use a conditional
$("#box1").dblclick(function(e){
    console.log("JQuery was used on a double-click!");
    const element = e.target;
    if (element.style.fontSize == "100px"){
        element.style.fontSize = "45px"
    }else{element.style.fontSize = "100px"};
})

// STEP 9: Add a mouseenter listner for your JQuery box2 object and have it log something like "JQuery was used on a mouse hover!"
$("#box2").mouseenter(function(e){
    console.log("JQuery was used on a mouse hover!");
})

// STEP 10: Pass the event through the function and store it in a variable; log the element
$("#box2").mouseenter(function(e){
    const element = e.target;
    console.log(element);
})

// STEP 11: Make the mouseenter event toggle the border color from black to red 
// Hint: use a conditional
$("#box2").mouseenter(function(e){
    const element = e.target;
    if (element.style.borderColor == "black"){
        element.style.borderColor = "red"
    }
    else{element.style.borderColor = "black"}
})

// Bonus: make a mouseleave listener that will toggle the border from red to black (so that now, the border will change color every time the mouse either enters or leaves!) 
// Hint: reverse the conditional logic of the mouseenter
$("#box2").mouseleave(function(e){
    const element = e.target;
    if (element.style.borderColor == "red"){
        element.style.borderColor = "black"
    }
    else{element.style.borderColor = "red"}
})