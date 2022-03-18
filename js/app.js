'use strict';
console.log('app.js is connected.');



function userName(){
    let message;
    let title;
    let userName = prompt('¿Cómo te llamas?');
    alert('¡Hola, ' + userName + ' !');
    return document.write(userName);
    
}


// console.log(userName);

//gender

// console.log(title);

function titleQ(){
    let title;
    let message;

title = prompt('¿Cuál es tu título?');

if(title == 'Señor' || title == 'Sr.'){
    message = '¡Bienvenido!';
  } else if(title == 'Señora' || title == 'Sra.' || title == 'Señorita' || title == 'Srta.'){
    message = '¡Bienvenida!';
  } else {
    message = 'Tienes que eligir entre Señor, Señora, Señorita.';
 document.write('¡Hola ' + title +  '! '   + message);
 } 
}
