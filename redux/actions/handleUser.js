export const setUserSaveHotel = (hotelID) => ({
	type: 'SET_USER_SAVE_HOTEL',
	payload: hotelID
});

export const addUserHotelBookings = (hotelBooking) => ({
	type: 'ADD_USER_HOTEL_BOOKINGS',
	payload: hotelBooking
});
