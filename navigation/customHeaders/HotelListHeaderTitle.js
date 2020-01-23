import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { connect } from 'react-redux';
import moment from 'moment';
import { withNavigation } from 'react-navigation';

const HotelListHeaderTitle = (props) => (
	<View style={{ flex: 1 }}>
		<View style={styles.container}>
			<TouchableOpacity
				style={{ alignItems: 'center', justifyContent: 'center' }}
				onPress={() => props.navigation.navigate('HotelQueryCalendarList')}
			>
				<Text style={styles.text}>
					{`${moment(props.bookingDates.startDate).format('MMM DD')} - ${moment(
						props.bookingDates.endDate
					).format('MMM DD')}`}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ alignItems: 'center', justifyContent: 'center' }}
				onPress={() => props.navigation.navigate('HotelQueryGuests')}
			>
				<Text style={styles.text}>{`${props.guests.totalRoomsQty} Room${props.guests.totalRoomsQty > 1
					? 's'
					: ''}`}</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row'
	},
	text: {
		color: Colors.white,
		fontSize: 16,
		fontWeight: 'bold'
	},
	subText: {
		color: Colors.white,
		fontSize: 12,
		fontWeight: 'bold'
	}
});

const mapStateToProps = ({ hotelsQuery: { bookingDates, guests } }) => ({
	bookingDates,
	guests
});

export default connect(mapStateToProps, null)(withNavigation(HotelListHeaderTitle));
