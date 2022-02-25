"use strict";

window.onload = () => {
  // console.log('This is your first program executing!');
    // console.log(`Hi Neighbor! 


    // You know what we always say: "We have better prices than our competition - *every* time!"


    // And make sure to check our “latest discounts” page!`);
    // console.log(`Hi Neighbor!`.toUpperCase());
    // console.log(++"3");
    // console.log(27 + "this is a string");
    // let customerName = "Mariko";
    // console.log(`Hi ${customerName}!
    // It’s been ${30-3} days since you joined our family - and you know what we always say: "We have better prices than our competition - *every* time!"
    
    // And ${customerName.toUpperCase()} - make sure to check our “latest discounts” page!`);

        // let userPoints = 1;
    // if(userPoints < 100)
    //     console.log(`You don’t have enough for a complementary pie, yet - please come back later!`);
    // else 
    //     console.log(`Please choose any small pizza on us!`);

    // console.log("about" < "boat");
    // let userPoints = 2001;
    // if(userPoints < 100) {
    //     console.log(`You don’t have enough for a complementary pie, yet - please come back later!`);}
    // else if (userPoints > 99 && userPoints < 200){
    //     console.log(`Please choose any small pizza on us!`);}
    // else if (userPoints > 199 && userPoints < 300){
    //     console.log(`Please have a medium pizza of your choice for free!`);}
    // else {
    //     console.log(`Any large pizza is on the house - thank you for being such a loyal customer!`);}
       
        
    // if(userPoints > 1000) {
    //     console.log("Congratulations! We would like to invite you to a special dining experience - please call with your account info handy");} 
    // else {
    //     console.log("By the way - we love having you as a customer. Please keep coming back for something special …");}

// Assignment 10.6

    // let weekDay = "3";

    // switch (weekDay) {
    // case "Monday":
    //     console.log("Time to make da Pizzas!");
    //     break;
    // case "Tuesday":
    //     console.log("Tuesday is two days too long without pizza ...");
    //     break;
    // case "Wednesday":
    //     console.log("Nothing cures the mid-week blues like pizza!");
    //     break;
    // case "Thursday":
    //     console.log("Thursday's Special Secret Surprize Pie day!");
    //     break;
    // case "Friday":
    //     console.log("Friday night, and Pizza's alllll riiiiight!");
    //     break;
    // case "Saturday":
    //     console.log("Saturday, Game Day - really any day is a good time for Pizza!");
    //     break;
    // case "Sunday":
    //     console.log("Lazy Sundays are only made better with extra cheese!");
    //     break;
    // default:
    //     console.log("Something is funny about today ... What day of the week is it?");
    //     break;
    // }

// Assignment 11.4

    // for(let i = 99 ; i > 0 ; i --) {
    //     console.log(`${i} bottles of beer on the wall
    //     ${i} bottles of beer!
    //     Take one down and pass it around -
    //     ${i-1} bottles of beer on the wall!`);
    // }

// Assignment 11.6

    // let originalPoem = `This little piggy went to market, this little piggy stayed home, this little piggy had roast beef, and this little piggy had none, and this little piggy cried “Wee! Wee! Wee!” all the way home!`;

    // let spacedPoem;
    
    // for (const element of originalPoem) {
    //     console.log(element);
        
    // }   

    // console.log(spacedPoem);
    // for (const element of originalPoem) {
    //     // console.log(element);
    //     if(element ==","){
    //         console.log(element)
    //     } 
    // }   
    // console.log(spacedPoem);

    // for (const element of originalPoem) {
    //     // console.log(element);
    //     if(element ==","){
    //         spacedPoem += `\n`;
    //     } else {
    //         spacedPoem += element;
    //     }
    // }   
    // console.log(spacedPoem);

// Assignment 11.5

    // let lives = 3;
	// while (lives > 0 ) {
    //     console.log(lives);
	// 	lives--;
	// }
	
    // console.log("Game Over!")

    // let lives = 3;
	// while (lives > 0 ) {
	// 	let result = prompt(`You have ${lives} chances left. What is 2+2?`);
	// 	lives--;
	// 	}
	
    // console.log("Game Over!")

    // let lives = 3;
	// while (lives > 0 ) {
	// 	let result = prompt(`You have ${lives} chances left. What is 2+2?`);
	// 	if (result !=="4"){
	// 	lives--;
    //     console.log("I'm afraid that's not right - try again");
	// 	} else {
    //     console.log("Congratulations! That's the correct answer.");
    //     break;
    //     }
	// }
    
// Assignment 12.5
    // let friends = ["Sarah", "Lukas", "Claude", "Annette", "Matthias"];
    // console.log(friends);
    // friends.push("Darius");
    // console.log(friends);
    // friends.unshift("Elizabetha");
    // console.log(friends);
    // friends.pop();
    // console.log(friends);
    
// Assignemnt  12.6   
    // Use a 'for...of' loop
//     let subscriberAge = [16, 22, 38, 45, 33, 17, 27, 55, 17];
//     for (let element of subscriberAge) {
//         console.log(element);
// }
//     let subscriberAge = [16, 22, 38, 45, 33, 17, 27, 55, 17];
//     for (let element of subscriberAge) {
//         console.log(`Is ${element} larger than 20? Ans:${element > 20} `);
// }
    // let subscriberAge = [16, 22, 38, 45, 33, 17, 27, 55, 17];
    // let targetAudiance = [];
    // for (let element of subscriberAge) {
    //     if(element > 20){
    //         targetAudiance.push(element);
    //     }
    //     console.log(`Is ${element} larger than 20? Ans:${element > 20} `);
    // };
// console.log(targetAudiance);
    // Use a 'For' loop
//     for(let index = 0; index < subscriberAge.length; index++) {
//     console.log(`Is ${subscriberAge[index]} larger than 20? Ans: ${subscriberAge[index] > 20}`);
//     if(subscriberAge[index] > 20){
//         targetAudiance.push(subscriberAge[index]);
//     }
//     };
// console.log(targetAudiance);

    // Use a 'forEach' loop
//     subscriberAge.forEach(item => {
//         if(item > 20){
//             targetAudiance.push(item);
//         }
//     })

// console.log(targetAudiance);

// Assignment 13.3
// let originalPoem = `This little piggy went to market this little piggy stayed home this little piggy had roast beef and this little piggy had none and this little piggy cried "Wee! Wee! Wee!" all the way home!`;
//     let arrayedPoem = originalPoem.split(" ");
//     console.log(arrayedPoem);
//     // console.log(arrayedPoem.length);
//     // console.log("==BREAK==");

//     // #1
//     console.log(arrayedPoem.indexOf("piggy")); // Where is the first time "piggy" comes up?
//     // #2
//     console.log(arrayedPoem.lastIndexOf("cried")); // Where did we quote a pig?
//     // #3
//     console.log(arrayedPoem.indexOf(`cried`)); 
//     console.log(arrayedPoem.lastIndexOf(`all`)); 

//     console.log(arrayedPoem.slice(28,31)); //198 is where the second quotation starts, so we need to use 199 to include it in our slice selection
//     // #4
//     console.log(arrayedPoem.indexOf(`and`)); 
    
//     console.log(arrayedPoem.splice(17,1));
//     // #5
//     console.log(arrayedPoem.join(" "));
//     // #6
//     console.log(arrayedPoem.concat("The","End"));
}