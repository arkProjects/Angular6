(function() {
    let hotelId : any = 123;
    let hotelName = 'A2B'; // type is optional

    let name : ( string | number ) = 'eRevMax'; // union type

    let isRaining : boolean = false;

    hotelId = 'Abc123'; // TypeScript automatically infers type

    name = 23;

    name = true; // can be number or string
}());