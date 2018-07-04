// declaration // es5
function foo( x, y ) {
    console.log( x, y );
}

// function expression syntax // es5
var bar = function( x, y ) {
    console.log( x, y );
};

// arrow function syntax
// behavior of this function is different from the function expression and declaration syntax
var baz = ( x, y ) => console.log( x, y );
baz( 1, 2 );

// let sum = ( x, y ) => {
//     return x + y;
// };
let sum = ( x, y ) => x + y;
console.log( sum( 2, 3 ) );

let square = x => x * x;
console.log( square( 7 ) );