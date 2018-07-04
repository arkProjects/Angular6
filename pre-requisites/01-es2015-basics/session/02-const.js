var x = 1;
const y = 2;
// y = 3; // error

// block-level scope is not there 
// re-declare allowed (treated as assignment)
{
    var x = 'one';
    const y = 'two';
    const z = 'three';
    console.log( y );
}

console.log( x );
console.log( y );
// console.log( z ); // error

const obj = {
    a: 1
};

obj.a = 2; // this is ok
console.log( obj );

obj = { // error - reassignment
    a: 2
};