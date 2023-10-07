// 11 Print the quantity of 1's in the array

// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1 ];
const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0 ];

let counter = 0;

for (let i = 0; i < nums.length; i++) {
    if( nums[ i ] == 1 ) {
        counter = counter + 1;
    }
}

console.log( counter );