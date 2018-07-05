(function() {
    type StringOrNumber = (string | number); // custom convenience union type alias

    let days : StringOrNumber[] = [ // usage of custom type (you can use (string | number) also)
        'Sunday',
        'Monday',
        'Tuesday'
    ];

    let someOtherDays : Array<String> = [
        'Wednesday',
        'Thursday'
    ];

    someOtherDays.push( 'Friday' );
    someOtherDays.push( 1 ); // items have to be string

    days.push( 123 ); // can be number or string
}());