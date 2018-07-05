// only one export in the file can be mentioned as default
export default interface IHotel {
    hotelId : number,
    hotelName: string,
    readonly region? : string,
    getHotelDetails: () => string
}

let ITC: IHotel = { // this is the IHotel in Hotel.ts
    hotelId : 1234,
    hotelName: 'ITC Banglore',
    getHotelDetails(){
        return 'details';
    }
};

console.log( ITC );

export let rateHotel = ( rate ) => console.log( 'todo' );
