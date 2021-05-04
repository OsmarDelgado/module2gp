/**
 * Exercise 1
 * 
 *      Get two numbers from console for operate with them
 */
// const num1 = parseInt( window.prompt( 'Number 1:' ) );
// const num2 = parseInt( window.prompt( 'Number 2:' ) );

// if( num1 > num2 ) {
//     console.log(num1 / num2);
// }

// if( num1 < num2 ) {
//     console.log(num1 + num2);
// }

// if( num1 === num2 ) {
//     console.log(num1 * num2);
// }

/**
 * Exercise 2
 * 
 *      Determine if a number is odd or even
 */
// const num1 = parseInt( window.prompt( 'Number 1: ' ) );

// if( num1 % 2 !== 0 ) {
//     console.log( `Number ${ num1 } is odd` );
// }

// if( num1 % 2 === 0 ) {
//     console.log( `Number ${ num1 } is even` );
// }

/**
 * Homework
 */

/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */

// const weightInMoon = (weight) => {
//     return ( weight / 9.81 ) * 1.622;
// };

// const name = window.prompt( 'What is your name?' );
// const weight = parseInt( window.prompt( 'What is your weight? (In kilograms)' ) );

// const inMoon = weightInMoon( weight );

// console.log( `${ name }, your weight in the moon is ${ inMoon } in kilograms` );

/**
 * 2:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */
// const score = window.prompt( 'What is the score? (0 - 100)' );

// if( score >= 90 ) console.log( 'Your score is A' );
// if( score >= 80 && score < 90 ) console.log( 'Your score is B' );
// if( score >= 70 && score < 80 ) console.log( 'Your score is C' );
// if( score >= 60 && score < 70 ) console.log( 'Your score is D' );
// if( score >= 50 && score < 60 ) console.log( 'Your score is E' );
// if( score < 50 ) console.log( 'Your score is F' );

/**
 * 3:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * Comparar si ese numero es divisible entre 2, 3 u 11
 * Imprimir en consola un mensaje que indique de que numero(s) es múltiplo
 * p.ej. 6 es multiplo de 2 y de 3
 * p.ej. 22 es multiplo de 2 y de 11
 * p.ej. 21 es multiplo de 3
 * Sino, enviar un mensaje en consola que lo indique
 */
// const num = parseInt( window.prompt( 'Give a number between 1 - 100' ) );



/**
 * 4:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
// const num1 = parseInt( window.prompt( 'Give a number between 1 - 100' ) );

// console.log( ( num1 % 2 !== 0 ) ? `Number ${ num1 } is odd` : `Number ${ num1 } is even` );

/**
 * 5:
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
// const days = window.prompt( 'Give a weekday' );

// const weekDays = days.toLowerCase();

// if( weekDays === 'domingo' ) console.log( `The weekday ${ weekDays } is 1` );
// if( weekDays === 'lunes' ) console.log( `The weekday ${ weekDays } is 2` );
// if( weekDays === 'martes' ) console.log( `The weekday ${ weekDays } is 3` );
// if( weekDays === 'miercoles' ) console.log( `The weekday ${ weekDays } is 4` );
// if( weekDays === 'jueves' ) console.log( `The weekday ${ weekDays } is 5` );
// if( weekDays === 'viernes' ) console.log( `The weekday ${ weekDays } is 6` );
// if( weekDays === 'sabado' ) console.log( `The weekday ${ weekDays } is 7` );

/**
 * 6:
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
const num1 = parseInt( window.prompt( 'Give number 1' ) );
const num2 = parseInt( window.prompt( 'Give number 2' ) );

const higher = Math.max( num1, num2 );
const lower = Math.min( num1, num2 );
console.log( `The number ${ higher } is the higher numbew` );
console.log( `The number ${ lower } is the lower numbew` );