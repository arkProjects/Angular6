(function() {
    // custom Person interface (custom data type)- it defines a structure for any object of this interface
    interface Person {
        name: string,
        email: string,
        age: number,
        phones?: (number | string)[] // ? indicates optional property
        getPrimaryPhone: () => string // interface can define signature of the object's methods
    };

    let john : Person = { // person should have contact
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 32
    };

    let jenny : Person = { // person should have contact
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        age: 32,
        phones: [ 1234 ],
        getPrimaryPhone() {
            return this.phones[0];
        }
    };

    function printPersonDetails( person: Person ) {
        console.log( person.name );
        console.log( person.email );
        console.log( person.age );
        
        if( person.phones ) {
            console.log( person.phones[0] );
        }
    }

    // Exercise:
    // Create an interface for any entity that you have used in RateTiger/LIveOS/??
    interface Hotel2 {
        code: number | string,
        name: string,
        address: string,
        isChain: boolean,
        location: string,
    }

    interface Hotel {
        hotelId : number,
        hotelName: string,
        readonly region? : string,
        getHotelDetails: () => string
    }

    let ITC: Hotel = {
        hotelId : 1234,
        hotelName: 'ITC Banglore',
        getHotelDetails(){
            return 'details';
        }
    };
    
    let Royal: Hotel = {
        hotelId : 1234,
        hotelName: 'Royal',
        region: 'India',
        getHotelDetails(){
            return this.region;
        }
    }

    Royal.region = 'USA';

    function printHotelEntity (hotel:Hotel){
        console.log(hotel.hotelId);
        console.log(hotel.hotelName);
        console.log(hotel.region);
        console.log(hotel.getHotelDetails());
    }

    let gateway = {
        hotelId: 3456,
        hotelName: 'Gateway',
        region: 'India',
        getHotelDetails(){
            return this.region;
        }
    };
    
    printHotelEntity(Royal);
    
    printHotelEntity(gateway); // allowed - since gateway has the structure of Hotel type
}());