const getHotelIds = (hotelCheckoutObject) => {
  return hotelCheckoutObject.hotelDetails
    .filter((item) => item !== undefined)
    .map((hotel) => hotel.booking_id)
}

export default getHotelIds
