import update from 'immutability-helper';
import moment from 'moment';

const defaultBookingDates = {
	startDate: moment().format('YYYY-MM-DD'),
	endDate: moment().add(1, 'days').format('YYYY-MM-DD'),
	totalNightsQty: 1
};

const defaultFilter = {
	hotelNameContains: '',
	pricePerNightMax: 1000,
	sortBy: 'distance',
	hotelStars: {
		1: false,
		2: false,
		3: false,
		4: false,
		5: false
	},
	guestScoreAbove: 0,
	amenities: {
		freeWifi: false,
		pool: false,
		freeBreakfast: false,
		petsAllowed: false,
		freeParking: false,
		fitnessCenter: false,
		handicapAccessible: false,
		restaurant: false
	}
};

const defaultGuests = {
	rooms: [ { adultsQty: 1, childrenQty: 0 } ],
	totalRoomsQty: 1,
	totalAdultsQty: 1,
	totalChildrenQty: 0
};

const defaultDestination = {
	coords: {
		latitude: null,
		longitude: null
	},
	location: ''
};

const initialState = {
	bookingDates: defaultBookingDates,
	destination: defaultDestination,
	guests: defaultGuests,
	filter: defaultFilter
};

const searchHotelQuery = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_HOTEL_FILTER_PRICE_PER_NIGHT_MAX':
			state = update(state, { filter: { pricePerNightMax: { $set: action.payload } } });
			break;
		case 'SET_HOTEL_FILTER_SORT_BY':
			state = update(state, { filter: { sortBy: { $set: action.payload } } });
			break;
		case 'SELECT_HOTEL_FILTER_HOTEL_STARS':
			state = update(state, {
				filter: { hotelStars: { [action.payload]: { $set: !state.filter.hotelStars[action.payload] } } }
			});
			break;
		case 'SET_HOTEL_FILTER_GUEST_SCORE_ABOVE':
			state = update(state, { filter: { guestScoreAbove: { $set: action.payload } } });
			break;
		case 'SELECT_HOTEL_FILTER_AMENITY':
			state = update(state, {
				filter: { amenities: { [action.payload]: { $set: !state.filter.amenities[action.payload] } } }
			});
			break;
		case 'RESET_HOTEL_FILTER':
			state = update(state, { filter: { $set: defaultFilter } });
			break;
		case 'SET_HOTEL_DESTINATION_LOCATION':
			state = update(state, { destination: { location: { $set: action.payload } } });
			break;
		case 'ADD_HOTEL_GUESTS_ROOM':
			if (state.guests.totalRoomsQty >= 20) return state;
			state = update(state, {
				guests: {
					rooms: { $push: [ { adultsQty: 1, childrenQty: 0 } ] },
					totalRoomsQty: { $set: state.guests.totalRoomsQty + 1 },
					totalAdultsQty: { $set: state.guests.totalAdultsQty + 1 }
				}
			});
			break;
		case 'REMOVE_HOTEL_GUESTS_ROOM':
			if (state.guests.totalRoomsQty <= 1) return state;
			state = update(state, {
				guests: {
					rooms: { $splice: [ [ action.payload, 1 ] ] },
					totalRoomsQty: { $set: state.guests.totalRoomsQty - 1 },
					totalAdultsQty: { $set: state.guests.totalAdultsQty - 1 }
				}
			});
			break;
		case 'ADD_HOTEL_GUESTS_ROOM_ADULTS_QTY':
			if (state.guests.rooms[action.payload].adultsQty >= 12) return state;
			state = update(state, {
				guests: {
					rooms: {
						[action.payload]: { adultsQty: { $set: state.guests.rooms[action.payload].adultsQty + 1 } }
					},
					totalAdultsQty: { $set: state.guests.totalAdultsQty + 1 }
				}
			});
			break;
		case 'SUBTRACT_HOTEL_GUESTS_ROOM_ADULTS_QTY':
			if (state.guests.rooms[action.payload].adultsQty <= 1) return state;
			state = update(state, {
				guests: {
					rooms: {
						[action.payload]: { adultsQty: { $set: state.guests.rooms[action.payload].adultsQty - 1 } }
					},
					totalAdultsQty: { $set: state.guests.totalAdultsQty - 1 }
				}
			});
			break;
		case 'ADD_HOTEL_GUESTS_ROOM_CHILDREN_QTY':
			if (state.guests.rooms[action.payload].childrenQty >= 12) return;
			state = update(state, {
				guests: {
					rooms: {
						[action.payload]: { childrenQty: { $set: state.guests.rooms[action.payload].childrenQty + 1 } }
					},
					totalChildrenQty: { $set: state.guests.totalChildrenQty + 1 }
				}
			});
			break;
		case 'SUBTRACT_HOTEL_GUESTS_ROOM_CHILDREN_QTY':
			if (state.guests.rooms[action.payload].childrenQty <= 0) return state;
			state = update(state, {
				guests: {
					rooms: {
						[action.payload]: { childrenQty: { $set: state.guests.rooms[action.payload].childrenQty - 1 } }
					},
					totalChildrenQty: { $set: state.guests.totalChildrenQty - 1 }
				}
			});
			break;
		case 'RESET_HOTEL_GUESTS':
			state = update(state, { guests: { $set: defaultGuests } });
			break;
		case 'SELECT_HOTEL_BOOKING_DATE':
			const selectedDate = action.payload;
			const { startDate, endDate } = state.bookingDates;
			if (moment(selectedDate).isBefore(moment().subtract(1, 'day'))) {
				return state;
			}
			if (moment(selectedDate).isSameOrBefore(startDate) || moment(selectedDate).isSame(endDate)) {
				const newStartDate = selectedDate;
				const newEndDate = moment(selectedDate).add(1, 'd').format('YYYY-MM-DD');
				state = update(state, {
					bookingDates: {
						startDate: { $set: newStartDate },
						endDate: { $set: newEndDate },
						totalNightsQty: { $set: 1 }
					}
				});
				return state;
			}
			if (moment(selectedDate).isAfter(endDate) || moment(selectedDate).isBetween(startDate, endDate)) {
				const newNightQty = moment(selectedDate).diff(moment(startDate), 'days');
				state = update(state, {
					bookingDates: {
						endDate: { $set: selectedDate },
						totalNightsQty: { $set: newNightQty }
					}
				});
				return state;
			}
			break;
		default:
			return state;
	}
	return state;
};

export default searchHotelQuery;
