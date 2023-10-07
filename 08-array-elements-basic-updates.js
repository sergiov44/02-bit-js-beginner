// 08 Prompt for an element to add an element, and prompt for another element to replace the third position

let array = [ "Pedro", "Pablo", "María", "Juan", "Diana" ];

let newElement = prompt( 'Please type a name: ' );
array.push( newElement );
console.log( array );

let thirdElement = prompt( 'Please type a name: ' );
array.splice( 2, 0, thirdElement );
console.log( array );