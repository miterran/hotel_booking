import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import cities from '../assets/images/cities';

import InputButton from '../components/InputButton';
import moment from 'moment';

const mockCities = [
	{
		name: 'San Francisco',
		img: 'san_francisco',
		price: 86
	},
	{
		name: 'New York',
		img: 'new_york',
		price: 91
	},
	{
		name: 'Boston',
		img: 'boston',
		price: 78
	},
	{
		name: 'Las Vegas',
		img: 'las_vegas',
		price: 108
	},
	{
		name: 'Las Angeles',
		img: 'los_angeles',
		price: 82
	},
	{
		name: 'Miami',
		img: 'miami',
		price: 90
	}
];

const genGuestsPlaceholder = (roomsQty, totalAdultsQty, totalChildrenQty) => {
	return `${roomsQty} Room${roomsQty > 1 ? 's' : ''} - ${totalAdultsQty} Adult${totalAdultsQty > 1
		? 's'
		: ''}${totalChildrenQty > 0 ? ` - ${totalChildrenQty} Child${totalChildrenQty > 1 ? 'ren' : ''}` : ''}`;
};

const genBookingDatesPlaceholder = (startDate, endDate, nightsQty) => {
	return `${moment(startDate).format('MMM DD')} - ${moment(endDate).format('MMM DD')} (${nightsQty} Night${nightsQty >
	1
		? 's'
		: ''})`;
};

const CityCard = ({ name, price, img }) => (
	<TouchableOpacity
		style={{ height: 140, borderRadius: 6, overflow: 'hidden', marginLeft: 12, marginRight: 12, marginBottom: 12 }}
	>
		<ImageBackground
			style={{
				flex: 1,
				resizeMode: 'center',
				justifyContent: 'center',
				alignItems: 'center'
			}}
			source={cities[img]}
		>
			<Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.white }}>{name}</Text>
			<Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.white }}>{`$${price}/night`}</Text>
		</ImageBackground>
	</TouchableOpacity>
);

const Filter = ({ onPress }) => (
	<TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
		<Text
			style={{
				fontSize: 12,
				color: Colors.light_elephant
			}}
		>
			Advance search (optional)
		</Text>
	</TouchableOpacity>
);

const ShopHotel = (props) => (
	<View style={{ flex: 1, backgroundColor: Colors.white }}>
		<ScrollView>
			<View style={{ padding: 12 }}>
				<InputButton
					icon="map-marker"
					title="DESTINATION"
					placeholder={props.destination.location || 'Enter destination'}
					color={props.destination.location ? Colors.dark_elephant : Colors.silver}
					onPress={() => props.navigation.navigate('HotelQueryDestination')}
				/>
				<InputButton
					icon="calendar-o"
					title="CHOOSE DATES"
					placeholder={genBookingDatesPlaceholder(
						props.bookingDates.startDate,
						props.bookingDates.endDate,
						props.bookingDates.totalNightsQty
					)}
					onPress={() => props.navigation.navigate('HotelQueryCalendarList')}
					// onPress={() => setCalendarListModalVisible(!calendarListModalVisible)}
				/>
				<InputButton
					icon="user-o"
					title="GUESTS"
					placeholder={genGuestsPlaceholder(
						props.guests.totalRoomsQty,
						props.guests.totalAdultsQty,
						props.guests.totalChildrenQty
					)}
					onPress={() => props.navigation.navigate('HotelQueryGuests')}
				/>
				<Filter onPress={() => props.navigation.navigate('HotelQueryFilter')} />
				<View style={{ height: 12 }} />
				<TouchableOpacity
					style={{
						backgroundColor: Colors.active,
						alignItems: 'center',
						borderRadius: 6
					}}
					onPress={() =>
						props.destination.location
							? props.navigation.navigate('HotelList')
							: props.navigation.navigate('HotelQueryDestination')}
				>
					<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', padding: 12 }}>Search Hotel</Text>
				</TouchableOpacity>
				<View style={{ height: 12 }} />
				<View style={{ height: 1, backgroundColor: Colors.cloud }} />
			</View>
			<Text style={{ textAlign: 'center', margin: 12, color: Colors.light_elephant, fontWeight: 'bold' }}>
				Discover deals in every city
			</Text>
			{mockCities.map((c) => <CityCard key={c.name} name={c.name} img={c.img} price={c.price} />)}
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	welcome: {
		color: Colors.dark_elephant,
		fontSize: 21,
		fontWeight: 'bold',
		marginTop: 12,
		marginBottom: 12
	},
	inputButton: {
		borderRadius: 6,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.cloud
	}
});

const mapStateToProps = ({ hotelsQuery: { guests, bookingDates, destination }, user }) => ({
	destination,
	guests,
	bookingDates,
	user
});

export default connect(mapStateToProps, null)(ShopHotel);
