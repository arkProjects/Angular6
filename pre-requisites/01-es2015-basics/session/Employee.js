import * as Obj from './Person.js';
// Employee class should have...
// name (string)
// age (number)
// role (string)
// dept (string)
// Add 1 or 2 getter/setters
// celebrateBirthday() - should alert saying "Happy birthday! Here is a coupon you can spend on dinner at your favorite restaurant tonight" and it increments age by 1


// Person class
// Obj.Person

// john object
// Obj.john

console.log( Obj.Person );
console.log( Obj.john );
console.log( Obj.jenny ); // unedfined

export class Employee extends Person {
    constructor( name, age = 30, role, dept ) { // constructor is a keyword
        super( name, age );
        this.role = role;
        this.dept = dept;
    }

    // inherited
    // getName() {
    //     return this.name;
    // }

    // setName( name ) {
    //     this.name = name;
    // }

    getRole() {
        return this.role;
    }

    setRole( role ) {
        this.role = role;
    }

    // overriding super class method with same name
    celebrateBirthday() {
        // this.age++;  // why do this when we can use base class implemetation which increments age ?
        super.celebrateBirthday();
        alert( "Happy BirthDay! Here is a coupon you can spend on dinner at your fevourate restaurant tonight" );
    }
}

export class ContractEmployee {
    constructor( x ) {
        this.x = x;
    }    

    getX() {
        return this.x;
    }
}

let erevEmployee = new Employee ('Debajyoti', 32, 'Lead Engineer', 'Rate Tiger');
console.log("Employee obj: ", erevEmployee);
erevEmployee.celebrateBirthday();
console.log( erevEmployee.getName() ); // inherited
console.log( erevEmployee.getRole() ); // defined in Employee

let cEmployee = new ContractEmployee( 100 );
console.log( 'cEmployee.getX() = ', cEmployee.getX() );