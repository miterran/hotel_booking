import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';
import moment from 'moment';

const genBookingDatesPlaceholder = (startDate, endDate, totalNightsQty) => {
	return `${moment(startDate).format('MMM DD')} - ${moment(endDate).format(
		'MMM DD'
	)} (${totalNightsQty} Night${totalNightsQty > 1 ? 's' : ''})`;
};

const HotelQueryCalendarListHeaderTitle = (props) => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold' }}>
			{genBookingDatesPlaceholder(
				props.bookingDates.startDate,
				props.bookingDates.endDate,
				props.bookingDates.totalNightsQty
			)}
		</Text>
	</View>
);

const mapStateToProps = ({ hotelsQuery: { bookingDates } }) => ({
	bookingDates
});

export default connect(mapStateToProps, null)(HotelQueryCalendarListHeaderTitle);
