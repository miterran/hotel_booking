const initialState = {};

const users = (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_USER_REGISTER_SUCCESSFUL':
			state[action.payload.email] = action.payload;
			break;
		default:
			return state;
	}
	return state;
};

export default users;
