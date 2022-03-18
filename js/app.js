'use strict';
console.log('app.js is connected.');



function userName(){
    let userName = prompt('¿Cómo te llamas?');
    alert('¡Hola, ' + userName + ' !');
    return document.write(userName);
    
}


// console.log(userName);

//gender

// console.log(title);

function secondQuestion(){
    let title;
    let message;

title = prompt('¿Cuál es tu título?');

if(title == 'Señor' || title == 'Sr.'){
    message = '¡Bienvenido!';
  } else if(title == 'Señora' || title == 'Sra.' || title == 'Señorita' || title == 'Srta.'){
    message = '¡Bienvenida!';
  } else {
    message = 'Tienes que eligir entre Señor, Señora, Señorita.';
    return document.write('¡Hola ' + title +  '! '   + message);
 } 
}

//lab 07

// This loop will run forever, prompting the user to enter a number until they type 1. 
var stop = '1'; //SENTINAL
while(true){
  var input = prompt('Give a number. Type 1 to exit. ');
  if(input === stop) {
    break;
  }
}
let myArray = ['craig', 49, [], {}, 1, 2, 3];
console.log(myArray);

////////////////////////// lab 8//////////////////////


function guessANumber(){
    let answer;
  
   do {
     answer = prompt('Guess a number between 1-10');
     if(answer != 7){
       alert('try again!');
     } else {
       alert('you are correct!');
     }
  
   } while(answer != 7);
  }
  
  
  
  function displayRating(){
    let output = '';
    let rating = prompt('On a scale of 1-5, how many stars?');
  
    for(let i = 0; i < rating; i = i + 1){
     output = output +  '<img src="images/star.png" height="50px" width="50px">';
    }
     return document.write(output);
  }
  
  
  //invoke or call a function 
  //guessANumber();
  