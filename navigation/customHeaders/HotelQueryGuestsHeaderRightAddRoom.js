import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';
import { addGuestsRoom } from '../../redux/actions/handleHotelsQuery';
import { FontAwesome } from '@expo/vector-icons';

const HotelQueryGuestsHeaderRightAddRoom = (props) => (
	<TouchableOpacity style={{ marginRight: 18, marginLeft: 18 }} onPress={() => props.addGuestsRoom()}>
		<FontAwesome name="plus-circle" color={Colors.white} size={21} />
	</TouchableOpacity>
);

// const mapStateToProps = ({ hotelsQuery: { bookingDates } }) => ({
// 	bookingDates
// });

export default connect(null, { addGuestsRoom })(HotelQueryGuestsHeaderRightAddRoom);
