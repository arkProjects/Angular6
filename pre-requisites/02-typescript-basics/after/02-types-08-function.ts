/**
 *  Function type
    Using types for arguments and return types
    The void type
    Using types when arguments or return values have a given structure (say object with a pre-defined set of properties)
    Optional arguments/properties on an object
    Typing a function expression variable (typing its arguments and return value before even assigning a function)
 */

// Function that accepts 2 arguments (each can be number or string) and returns a number or string
let sum = ( a: number, b: number ) : number => a + b;

// Function that accepts 2 arguments (each number or string) and returns nothing (void type)
let log = ( a: number | string, b: number | string ) : void => console.log( a, b );

// Instead of specifying the type for a function's arguments and return value in the function definition, we can create a type representing the function's signature. Note the use of '=>' instead of ':' in the function type definition 
// Note that the variable names in the type definition and the actual function need not match
let welcome: ( message : string ) => void = ( msg ) => console.log( msg );

// since the type is specified in the above line, welcome3 must maintain the same type
// welcome = ( message: number ) => console.log( message ); // error

// in TypeScript all arguments are compulsory (unless mentioned as optional) - additionally the number of formal arguments and actual arguments must match (like in other popular languages)
// welcome(); // error - too few arguments
// welcome( 'hello', 'world' ); // error - too many arguments

// Representing optional arguments
// Use ? to indicate optional argument
let welcome2 = (message? : string ) : void => {
    message ? console.log( '[welcome2]', message ) : console.log( '[welcome2] Received no welcome message' );
};
welcome2( 'Please come' );
welcome2(); // the message argument is optional - so this works

// You can freely use ES2015 features like defaults, destructuring etc. Shown below is use of defaults for the argument
let welcome3 = ( message : string = 'Good to see you!' ) : void => {
    console.log( '[welcome3]', message );
};
welcome3( 'Please come' );
welcome3(); // arguments are less than specified in function signature - that' ok since there is a default value

// Complex definition involving objects and callback functions
// Observe the signatures for success and error
function ajax( options: { url : string, method : string, success? : (string) => void, error? : (Error) => string } ): void {
    // define ajax operation here...
}

ajax({
    url: '/messages',
    method: 'GET',
    contentType: 'application/json', // not accepted
    success: function( data ) {
        console.log( );
        return 1;
    }
});