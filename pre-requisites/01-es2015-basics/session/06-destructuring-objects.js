let person = {
    name: 'Prashanth',
    contact: {
        street: 'Some lane',
        phone: 1234567890,

    }
};

// let name = person.name, address = person.contact, street = address.street
// Variable being created is name, address
let { name, contact : address, contact: { street : lane }, worksFor = 'Some company' } = person;

console.log( name );
console.log( address );
console.log( lane );
// console.log( street ); // error
console.log( worksFor );
// console.log( contact );

// let { x = 10, y } = { x: 1, y: 2 }
function foo( { x = 10, y } = { x: 1000, y: 2000 } ) {
    console.log( x, y );
}

foo({
    x: 1,
    y: 2
});

foo({
    y: 200
});

foo();