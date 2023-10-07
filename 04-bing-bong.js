// 04 'Bing' for multiples of 3, 'Bong' for multiples of 5, 'BingBong' for both, and prompted number if neither one

let number = parseFloat( prompt( 'Please type a number: ' ) );
let answer = '';

if( number % 3 == 0) {
    answer = answer + 'Bing';
}

if( number % 5 ==0 ) {
    answer = answer + 'Bong';
}

if ( ! answer ) {
    console.log( number );
} else {
    console.log ( answer );
}