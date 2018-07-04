function randomGreeting() {
    return Math.random() > 0.5 ? 'Good morning' : 'Good Evening';
}

// function greeting( name, message = 'Good morning' ) {
//     // message = message || 'Good morning';

//     console.log( `${message} ${name}!` );
// }

function greeting( name, message = randomGreeting() ) {
    // message = message || 'Good morning';

    console.log( `${message} ${name}!` );
}


greeting( 'John', 'Hello' );

greeting( 'John' );
greeting( 'John' );
greeting( 'John' );
greeting( 'John' );