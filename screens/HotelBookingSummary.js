import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import hotelsImg from '../assets/images/hotels';
import { HotelIntroViewCard } from '../components/HotelIntro';
import _ from 'lodash';
import { connect } from 'react-redux';
import ImageLayout from 'react-native-image-layout';
import { FontAwesome } from '@expo/vector-icons';

const RowBetween = ({ children }) => <View style={styles.rowBetween}>{children}</View>;

const Head = ({ title }) => (
	<RowBetween>
		<Text style={styles.headTitle}>{title}</Text>
		<Text style={styles.headEnd}>
			{
				//<FontAwesome name="chevron-right" size={20} color={Colors.cloud} />
			}
		</Text>
	</RowBetween>
);

const Item = ({ title, content }) => (
	<RowBetween>
		<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{title}</Text>
		<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{content}</Text>
	</RowBetween>
);

const ItemButton = ({ title }) => (
	<RowBetween>
		<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{title}</Text>
		<FontAwesome name="chevron-right" size={20} color={Colors.cloud} />
	</RowBetween>
);

const Section = ({ children }) => <View style={styles.sectionContainer}>{children}</View>;

const HotelBookingSummary = (props) => {
	const [ hotelBooking, setHotelBooking ] = useState(
		props.user.hotelBookings[props.navigation.dangerouslyGetParent().getParam('hotelBookingOrderNumber')]
	);
	// setParams
	return (
		<View style={{ flex: 1, backgroundColor: Colors.cloud }}>
			<ScrollView>
				<Section>
					<Head title="Booking" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Hotel" content={hotelBooking.hotel.name} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Room Type" content={hotelBooking.room.name} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Bed Type" content={hotelBooking.room.beds} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Check-in" content={hotelBooking.bookingDates.startDate} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Check-out" content={hotelBooking.bookingDates.endDate} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Nights stay" content={hotelBooking.bookingDates.totalNightsQty} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Number of rooms" content={hotelBooking.guests.totalRoomsQty} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Number of adults" content={hotelBooking.guests.totalAdultsQty} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Number of children" content={hotelBooking.guests.totalChildrenQty} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
				</Section>
				<View style={{ height: 12, backgroundColor: Colors.cloud }} />
				<Section>
					<Head title="Price summary" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Room rate" content={hotelBooking.payment.roomRate} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Taxes & Fees" content={hotelBooking.payment.taxesFees} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Total" content={hotelBooking.payment.total} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
				</Section>
				<View style={{ height: 48, backgroundColor: Colors.cloud }} />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		backgroundColor: Colors.white,
		flexDirection: 'column',
		padding: 12
	},
	rowBetween: {
		width: '100%',
		marginTop: 12,
		marginBottom: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	headTitle: {
		flex: 1,
		color: Colors.dark_elephant,
		fontSize: 18,
		fontWeight: 'bold'
	},
	input: {
		padding: 12,
		flex: 1,
		fontSize: 16,
		color: Colors.light_elephant,
		borderWidth: 1,
		borderColor: Colors.cloud,
		borderRadius: 12
	}
});

const mapStateToProps = ({ user, hotels }) => ({
	user,
	hotels
});

export default connect(mapStateToProps, null)(HotelBookingSummary);
