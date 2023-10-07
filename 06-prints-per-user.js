// 06 Print a sentence as many times as provided by user

let sentence = prompt( 'Please type a sentence: ' );
let repetitions = parseFloat( prompt( 'Please type the number of repetitions: ' ) );
let counter = 0;

do {
    console.log( `${ counter + 1 }: ${ sentence }`  );
    counter++;
} while( counter < repetitions  );