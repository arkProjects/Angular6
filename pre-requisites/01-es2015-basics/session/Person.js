export class Person {
    constructor( name, age = 30, address ) { // constructor is a keyword
        // if( arguments.length === 2 ) {
        //     this.name = name;
        //     this.age = age;
        // } else if( arguments.length === 1 ) {
        //     if( typeof name === 'string' ) {

        //     } else if( )
        // }
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    setName( name ) {
        this.name = name;
    }

    // celebrateBirthday() has to increase age of person by 1
    celebrateBirthday() {
        this.age++;
    }

    static sayHello() {
        console.log( 'hello' );
    }
}

// exported ones are public variable
export let john = new Person( 'John Doe', undefined, 'House number 123' );

// private variable for the module
let jenny = new Person( 'Jane Doe', undefined, 'House number 1234' );
console.log( 'jphn object is ', john );
console.log( 'john name = ', john.name );
console.log( 'john name = ', john.getName() );
john.celebrateBirthday();
console.log( 'john age = ', john.age );
console.log( Person.sayHello() );

// exported object
// {
//     Person,
//     john
// }