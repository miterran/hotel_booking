import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';
import { resetFilter } from '../../redux/actions/handleHotelsQuery';

const HotelQueryFilterHeaderRightReset = (props) => (
	<TouchableOpacity onPress={() => props.resetFilter()}>
		<Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold', marginLeft: 18, marginRight: 18 }}>
			Reset
		</Text>
	</TouchableOpacity>
);

// const mapStateToProps = ({ hotelsQuery: { bookingDates } }) => ({
// 	bookingDates
// });

export default connect(null, { resetFilter })(HotelQueryFilterHeaderRightReset);
