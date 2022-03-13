"use strict";
// 4.4, "Insert JQuery library & Test"

// Description: While applying to various companies, you've come across a few who have asked for a working understanding of JQuery in order to deal with their aging code base. Given that you're becoming a JS savant, you have decided to download it and give it a try. Dig up any notes and code files you might have from lesson 3.2 ("JavaScript Events"), because you are going to try and duplicate your vanilla JavaScript code in the next assignment. For now, simply add JQuery to your 3.2 code file.

// In 3.2 we 
// - Stored elements
// - Used 'click' listener to turn the first box background red
// - Updated that to pass the event in AND use the toggle method
// - Used special, shortened 'onclick' syntax to change the second box's background to toggle blue
// - Also used dblclick, mousedown, mouseup, mouseenter & mouseleave 

// What do we want to do:
// Change border color & thickness upon mouseenter, and revert upon mouseleave
// Use dblclick listener to make the font-size toggle bigger & smaller
// 

const $box1 = $("#box1");
const $box2 = $("#box2");

$("#box1").dblclick(function(e){
    console.log("JQuery was used on a double-click!");
    const element = e.target;
    if (element.style.fontSize == "100px"){
        element.style.fontSize = "45px"
    }else{element.style.fontSize = "100px"};
})

$("#box2").mouseenter(function(e){
    const element = e.target;
    if (element.style.borderColor == "black"){
        element.style.borderColor = "red"
    }
    else{element.style.borderColor = "black"}
})
$("#box2").mouseleave(function(e){
    const element = e.target;
    if (element.style.borderColor == "red"){
        element.style.borderColor = "black"
    }
    else{element.style.borderColor = "red"}
})


