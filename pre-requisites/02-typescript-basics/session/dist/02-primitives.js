(function () {
    var hotelId = 123;
    var hotelName = 'A2B'; // type is optional
    var name = 'eRevMax'; // union type
    var isRaining = false;
    hotelId = 'Abc123'; // TypeScript automatically infers type
    name = 23;
    name = true; // can be number or string
}());
