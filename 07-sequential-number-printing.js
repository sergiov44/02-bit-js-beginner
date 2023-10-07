// 07 Prompt for 2 numbers and print the natural numbers sequence in between

let lowNumber = parseFloat( prompt( 'Please type a number: '));
let counter = lowNumber;
let hiNumber = parseFloat( prompt( 'Please type a higher number: ' ) );

do {
    console.log( counter );
    counter++;
} while ( counter <= hiNumber );