import mockHotels from '../../mock/hotels';

const hotels = (state = mockHotels, action) => {
	switch (action.type) {
		default:
			return state;
	}
	return state;
};

export default hotels;
