// import ILodging, { rateHotel } from './Hotel'; // no .ts extension in import

import IHotel, { rateHotel } from './Hotel';

interface FiveStarHotel extends IHotel {
    hasDutyFreeShopping: boolean
}

let itcWindsor : FiveStarHotel = {
    hasDutyFreeShopping: true,
    hotelId: 3456,
    hotelName: 'ITC Windsor Manor',
    getHotelDetails: () => this.hotelName
};