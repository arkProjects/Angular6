(function() {
    function add<T>( x : T , y : T ) : T {
        return x + y;
    }

    console.log( add<number>( 1, 2 ) );
    console.log( add<string>( 'hello', 'world' ) );
});