'use strict';

function great(){
  let sayHello = prompt('Well hello there! What is your name?');
  if(sayHello){
    alert(`Bonjour, ${sayHello}!`);
  }
}
great();

let score = 0;
let attempts = 3;
let myNumber = 4;
let userGuess = null;

function numberOne(){
  let questionOne = prompt('Do you like the Doberman breed?').toLowerCase();
  if(questionOne === 'y' || questionOne === 'yes'){
    score++;
    alert('Great! Welcome to our landing page for the Doberman breed!');
  } else if(questionOne === 'n' || questionOne === 'no'){
    alert('Then why did you click on this page?');
  }
  console.log();
}
numberOne();

// while(attempts > 0){
//   userGuess = prompt('Guess the Magic number to be able to access the page!')
//   if(userGuess > myNumber)
// }

