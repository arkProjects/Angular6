var x = 1;
let y = 2;
// var y = 'too'; // error

// block-level scope is not there 
// re-declare allowed (treated as assignment)
{
    var x = 'one';
    let y = 'two';
    let z = 'three';
    console.log( y );
}

console.log( x );
console.log( y );
console.log( z ); // error