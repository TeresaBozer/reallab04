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

let userName = prompt('¿Cómo te llamas?');

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


  'use strict';
  console.log('app.js is connected.');
  
  
  // function functionName(){
  //   console.log('we are in the function!!!!!!!!');
  // }
  // functionName();
  
  
  function userName(){
    let userName = prompt('What is your name?');
    // console.log('userName is this =', userName);
    return document.write(userName);
  }
  
  
  function timeOfDay() {
    let userTime = prompt('What time is it?');
    let message;
  
    if(userTime <= 11){
      message = 'Good Morning';
    } else if(userTime <= 18){
      message = 'Good Afternoon';
    } else if (userTime <= 24){
      message = 'Good Evening';
    } else {
      message = 'Your input does not work for a time.';
    } 
    return message;
  }



  //alert is another method.



//ask what time is it? 
//variable assignment and declaration

// console.log(userTime);

//have some logic to respond to the user.
// if(this is true){
//  then we should do this.
// } else if(this is true){
//   we will do this.
// } else {
//   lets just do this.
// }

// variable declaration creates locaiton in memory so i can store one of the messages below.
 

//this will output the message variable with the assigned value based on the if else conditional.
// console.log('This is the if output ', message);


//out put the users response to the page. 


document.write('Hello ' + userName +  '! '   + message);