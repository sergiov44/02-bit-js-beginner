// 09 Prompt for a number and build an array from 1 to prompted number


let number = parseFloat( prompt( 'Type any number higher than 1: ' ) );
let array = [];

for (let i = 1; i <= number; i++) {
    array.push( i );
}

console.log( array );