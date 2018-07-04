(function() {
    let x = 'one';
    {
        let x = 1;
        console.log( x );
    }

    function foo() {
        let sum = ( x, y ) => x + y;
        let foo = () => console.log( this );
    }

    console.log( x );
}());

