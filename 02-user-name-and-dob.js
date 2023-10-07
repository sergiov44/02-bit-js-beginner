// 02 Prompt for name and date of birth, and then print a sentence including their current age, assuming it is 2020

let name = prompt( 'Please type your name:' );
let dob = parseFloat( prompt( 'Please type your date of birth' ) );
let currentAge = 2020 - dob;

console.log( `Hello ${ name }. You are ${ currentAge } years old` );