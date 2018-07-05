(function () {
    ;
    var john = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 32
    };
    var jenny = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        age: 32,
        phones: [1234],
        getPrimaryPhone: function () {
            return this.phones[0];
        }
    };
    function printPersonDetails(person) {
        console.log(person.name);
        console.log(person.email);
        console.log(person.age);
        if (person.phones) {
            console.log(person.phones[0]);
        }
    }
    var ITC = {
        hotelId: 1234,
        hotelName: 'ITC Banglore',
        getHotelDetails: function () {
            return 'details';
        }
    };
    var Royal = {
        hotelId: 1234,
        hotelName: 'Royal',
        region: 'India',
        getHotelDetails: function () {
            return this.region;
        }
    };
    Royal.region = 'USA';
    function printHotelEntity(hotel) {
        console.log(hotel.hotelId);
        console.log(hotel.hotelName);
        console.log(hotel.region);
        console.log(hotel.getHotelDetails());
    }
    var gateway = {
        hotelId: 3456,
        hotelName: 'Gateway',
        region: 'India',
        getHotelDetails: function () {
            return this.region;
        }
    };
    printHotelEntity(Royal);
    printHotelEntity(gateway); // allowed - since gateway has the structure of Hotel type
}());
