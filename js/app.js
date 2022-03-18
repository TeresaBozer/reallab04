'use strict';
console.log('app.js is connected.');

//comment
/**
 * comment
 * enter
 * another star
 * multi line comment
 * 
 */

//ask the user their name
// var craig = 'craig';
// console.log(craig);
              //  prompt is a method that opens the prompt window with an input box for the user name

// question


function userName(){
    let userName = prompt('¿Cómo te llamas?');
    //console.log (userName);
    return document.write(userName);
}


alert('¡Hola, ' + userName + ' !');

// console.log(userName);

//gender

let title = prompt('¿Cuál es tu título?');

// console.log(title);
let message;

if(title == 'Señor' || title == 'Sr.'){
    message = '¡Bienvenido!';
  } else if(title == 'Señora' || title == 'Sra.' || title == 'Señorita' || title == 'Srta.'){
    message = '¡Bienvenida!';
  } else {
    message = 'Tienes que eligir entre Señor, Señora, Señorita.';
  } 


  


document.write('¡Hola ' + title +  '! '   + message);