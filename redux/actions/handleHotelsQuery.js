export const setFilterPricePerNightMax = (price) => ({
	type: 'SET_HOTEL_FILTER_PRICE_PER_NIGHT_MAX',
	payload: price
});
export const setFilterSortBy = (sortBy) => ({
	type: 'SET_HOTEL_FILTER_SORT_BY',
	payload: sortBy
});
export const selectFilterHotelStars = (stars) => ({
	type: 'SELECT_HOTEL_FILTER_HOTEL_STARS',
	payload: stars
});
export const setFilterGuestScoreAbove = (score) => ({
	type: 'SET_HOTEL_FILTER_GUEST_SCORE_ABOVE',
	payload: score
});
export const selectFilterAmenity = (amenity) => ({
	type: 'SELECT_HOTEL_FILTER_AMENITY',
	payload: amenity
});
export const resetFilter = () => ({
	type: 'RESET_HOTEL_FILTER'
});
export const setDestinationLocation = (location) => ({
	type: 'SET_HOTEL_DESTINATION_LOCATION',
	payload: location
});
export const addGuestsRoom = () => ({
	type: 'ADD_HOTEL_GUESTS_ROOM'
});
export const removeGuestsRoom = (index) => ({
	type: 'REMOVE_HOTEL_GUESTS_ROOM',
	payload: index
});
export const addGuestsRoomAdultsQty = (index) => ({
	type: 'ADD_HOTEL_GUESTS_ROOM_ADULTS_QTY',
	payload: index
});
export const subtractGuestsRoomAdultsQty = (index) => ({
	type: 'SUBTRACT_HOTEL_GUESTS_ROOM_ADULTS_QTY',
	payload: index
});
export const addGuestsRoomChildrenQty = (index) => ({
	type: 'ADD_HOTEL_GUESTS_ROOM_CHILDREN_QTY',
	payload: index
});
export const subtractGuestsRoomChildrenQty = (index) => ({
	type: 'SUBTRACT_HOTEL_GUESTS_ROOM_CHILDREN_QTY',
	payload: index
});
export const resetGuests = () => ({
	type: 'RESET_HOTEL_GUESTS'
});
export const selectBookingDate = (selectedDate) => ({
	type: 'SELECT_HOTEL_BOOKING_DATE',
	payload: selectedDate
});
