import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';

const genGuestsPlaceholder = (roomsQty, adultsQty, childrenQty) => {
	return `${roomsQty} Room${roomsQty > 1 ? 's' : ''} - ${adultsQty} Adult${adultsQty > 1 ? 's' : ''}${childrenQty > 0
		? ` - ${childrenQty} Child${childrenQty > 1 ? 'ren' : ''}`
		: ''}`;
};

const HotelQueryGuestsHeaderTitle = (props) => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold' }}>
			{genGuestsPlaceholder(
				props.guests.totalRoomsQty,
				props.guests.totalAdultsQty,
				props.guests.totalChildrenQty
			)}
		</Text>
	</View>
);

const mapStateToProps = ({ hotelsQuery: { guests } }) => ({
	guests
});

export default connect(mapStateToProps, null)(HotelQueryGuestsHeaderTitle);
