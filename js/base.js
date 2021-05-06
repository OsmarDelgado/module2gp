/**
 * 1:
 * Pedir al usuario un numero entre 1 y 12
 * Imprimir en consola el numero de días que corresponden a ese mes y su nombre
 * p.ej.
 * --> El mes 5 (Mayo) tiene 31 días
 */
// const num = parseInt( window.prompt( 'Give me a number between 1 and 12' ) );

// switch( num ) {
//     case 1:
//         console.log( `The month ${ num } (january) have 31 days` );
//     break;

//     case 2:
//         console.log( `The month ${ num } (february) have 28 days` );
//     break;

//     case 3:
//         console.log( `The month ${ num } (march) have 31 days` );
//     break;

//     case 4:
//         console.log( `The month ${ num } (april) have 30 days` );
//     break;

//     case 5:
//         console.log( `The month ${ num } (may) have 31 days` );
//     break;

//     case 6:
//         console.log( `The month ${ num } (june) have 30 days` );
//     break;

//     case 7:
//         console.log( `The month ${ num } (july) have 31 days` );
//     break;

//     case 8:
//         console.log( `The month ${ num } (august) have 30 days` );
//     break;

//     case 9:
//         console.log( `The month ${ num } (september) have 31 days` );
//     break;

//     case 10:
//         console.log( `The month ${ num } (octuber) have 30 days` );
//     break;

//     case 11:
//         console.log( `The month ${ num } (november) have 31 days` );
//     break;

//     case 12:
//         console.log( `The month ${ num } (december) have 30 days` );
//     break;

//     default:
//         console.log( `The month ${ num } does not exist in this planet!!!` );
// }

/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */
// const response = window.prompt( 'How is the weather in your city?' );

// const weather = response.toLowerCase();

// switch( weather ) {
//     case 'soleado':
//         console.log( 'Oh!, que buen clima para estar en la playa' );
//     break;

//     case 'nevado':
//         console.log( 'Oh!, que buen clima para una taza de café' );
//     break;

//     case 'lluvioso':
//         console.log( 'Oh!, que buen clima para estar en casa' );
//     break;

//     case 'nublado':
//         console.log( 'Oh!, que buen clima para disfrutar del aire' );
//     break;

//     default:
//         const res = window.prompt( 'What do you want to do in your day?' );
//         console.log( 'That sound perfect!' );
// }

/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */
// const name = window.prompt( 'What is you name?' );

// const lowCase = name.toLowerCase();

// const lastChar = lowCase.charAt( lowCase.length-1 );

// console.log( `Your name ends in ${ lastChar }` );

/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */
// const name = window.prompt( 'What is you name?' );

// const rev = name.split("").reverse().join("");;

// console.log( rev );

/**
 * 5:
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */
const word = window.prompt( 'Give me a word' );
const num = parseInt( window.prompt( 'Give me a number' ) );

console.log( word.repeat( num ) );