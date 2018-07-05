(function() {
    type NumberOrString = number | string;
    let sum = ( x : number, y : string  ) : string => x + y; // line 3

    sum( 1, 2 );
    sum( 1, 'hello' ); // error

    let str : string = sum( 1, 2 ); // error

    let printSum = ( x : number, y : number ) => console.log( x + y );
    let printSum2 = ( x : number, y : number ) : void => console.log( x + y ); // you can also explicitly specify void return

    let z : string = printSum( 1, 2 );

    let sum2 : ( a : number, b : string ) => string = ( x, y ) => x + y; // exactly same as line 3 (alternative syntax)

    // Exercise:
    let nums : number[] = [
        1, 2, 3
    ];

    let squaredNums = nums.map(function( item, index, array ) {
        console.log( item, index, array );
        return item * item;
    });

    let map : ( iterator : ( item : number, index : number, array : number[] ) => number ) => number[]  = function( iterator ) {
        return [1, 2];
    }
    console.log( squaredNums );

    map( function( 1, 2, [3, 4] ) {
        return 3;
    } );

    let hotels = [
        {
            name: 'Udupi Grand',
            location: 'Ashok Nagar'
        },
        {
            name: 'Nagarjuna',
            location: 'Ashok Nagar'
        }
    ];

    let hotelNames = hotels.map( function( item ) {
        return item.name;
    });

    console.log( hotelNames );
}());