import React, { useState, useEffect } from 'react';
import { View, Text, Modal } from 'react-native';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
import { selectBookingDate } from '../redux/actions/handleHotelsQuery';
import moment from 'moment';
import { CalendarList } from 'react-native-calendars';
import BottomConfirmButton from '../components/BottomConfirmButton';

const genDisabledDates = () => {
	const n = moment().date();
	const disabledDates = {};
	for (let i = 1; i < n; i++) {
		let disabled_date = moment().subtract(i, 'day').format('YYYY-MM-DD');
		disabledDates[disabled_date] = { disabled: true };
	}
	return disabledDates;
};

const genSelectedDates = (startDate, endDate, totalNightsQty) => {
	const selectedDates = {
		[startDate]: {
			startingDay: true,
			color: Colors.theme,
			textColor: 'white'
		},
		[endDate]: {
			endingDay: true,
			color: Colors.theme,
			textColor: 'white'
		}
	};
	for (let i = 1; i < totalNightsQty; i++) {
		selectedDates[moment(startDate).add(i, 'd').format('YYYY-MM-DD')] = {
			color: Colors.theme,
			textColor: 'white'
		};
	}
	return selectedDates;
};

const genBookingDatesPlaceholder = (startDate, endDate, totalNightsQty) => {
	return `${moment(startDate).format('MMM DD')} - ${moment(endDate).format(
		'MMM DD'
	)} (${totalNightsQty} Night${totalNightsQty > 1 ? 's' : ''})`;
};

const HotelQueryCalendarList = (props) => {
	const [ disabledDates ] = useState(genDisabledDates());
	const [ selectedDates, setSelectedDates ] = useState({});

	useEffect(
		() => {
			console.log('hotel query calendar list useeffect');
			setSelectedDates(
				genSelectedDates(
					props.bookingDates.startDate,
					props.bookingDates.endDate,
					props.bookingDates.totalNightsQty
				)
			);
		},
		[ props.bookingDates.startDate, props.bookingDates.endDate ]
	);

	return (
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			<View style={{ flex: 1 }}>
				<CalendarList
					markedDates={{ ...disabledDates, ...selectedDates }}
					onDayPress={({ dateString }) => props.selectBookingDate(dateString)}
					markingType={'period'}
					pastScrollRange={0}
					futureScrollRange={18}
					scrollEnabled={true}
					showScrollIndicator={true}
				/>
			</View>
			<BottomConfirmButton onPress={() => props.navigation.pop()} title="Select Dates" disabled={false} />
		</View>
	);
};

const mapStateToProps = ({ hotelsQuery: { bookingDates } }) => ({
	bookingDates
});

export default connect(mapStateToProps, { selectBookingDate })(HotelQueryCalendarList);
