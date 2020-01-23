import update from 'immutability-helper';

const initialState = {
	lastName: '',
	firstName: '',
	email: '',
	password: '',
	subscribe: false,
	agreeTerms: false,
	savedHotelIDs: {},
	hotelBookings: {}
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_LOGIN_SUCCESSFUL':
		case 'NEW_USER_REGISTER_SUCCESSFUL':
			state = update(state, { $set: action.payload });
			break;
		case 'USER_LOGOUT':
			state = update(state, { $set: initialState });
			break;
		case 'SET_USER_SAVE_HOTEL':
			if (state.savedHotelIDs[action.payload]) {
				state = update(state, { savedHotelIDs: { $unset: [ action.payload ] } });
			} else {
				state = update(state, { savedHotelIDs: { [action.payload]: { $set: true } } });
			}
			break;
		case 'ADD_USER_HOTEL_BOOKINGS':
			state = update(state, { hotelBookings: { [action.payload.orderNumber]: { $set: action.payload } } });
			break;
		default:
			return state;
	}
	return state;
};

export default user;
