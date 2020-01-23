import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import { HotelIntroBookingCard } from '../components/HotelIntro';
import SigninRequired from '../containers/SigninRequired';
import _ from 'lodash';
import hotelsImg from '../assets/images/hotels';

const Trips = (props) => {
	if (!props.user.email) return <SigninRequired title="Sign in to view your upcoming trips." />;

	const [ hotelBookings, setHotelBookings ] = useState([]);
	useEffect(() => setHotelBookings(_.values(props.user.hotelBookings)), [ _.keys(props.user.hotelBookings).length ]);

	// orderNumber: shortid.generate(),
	// bookingDates: props.bookingDates,
	// guests: props.guests,
	// hotel: hotel,
	// room: room,
	// payment: {
	// 	roomRate: room.salePrice,
	// 	taxesFees: (props.bookingDates.totalNightsQty *
	// 		props.guests.totalRoomsQty *
	// 		room.salePrice *
	// 		0.1).toFixed(2),
	// 	total: (props.bookingDates.totalNightsQty * props.guests.totalRoomsQty * room.salePrice * 1.1).toFixed(
	// 		2
	// 	),
	// 	creditCardNumber: ''
	// }

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={hotelBookings}
				keyExtractor={(hotelBooking) => hotelBooking.orderNumber}
				ListHeaderComponent={() => (
					<View style={{ margin: 12 }}>
						<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>
							To see your bookings, you might need to import them using your booking reference number and
							PIN.
						</Text>
						<View style={{ height: 12 }} />
						<TouchableOpacity
							onPress={() => props.navigation.navigate('TripsHotelImportBooking')}
							style={{
								backgroundColor: Colors.white,
								borderRadius: 6,
								justifyContent: 'center',
								alignItems: 'center',
								borderWidth: 1,
								borderColor: Colors.theme
							}}
						>
							<Text style={{ color: Colors.theme, fontWeight: 'bold', padding: 12, fontSize: 16 }}>
								Import your booking
							</Text>
						</TouchableOpacity>
						<View style={{ height: 12 }} />
						<View style={{ height: 1, backgroundColor: Colors.cloud }} />
						<View style={{ height: 12 }} />
					</View>
				)}
				renderItem={({ item: hotelBooking, index }) => (
					<View key={hotelBooking.orderNumber}>
						<HotelIntroBookingCard
							img={hotelsImg[hotelBooking.hotel.coverImg]}
							hotelName={hotelBooking.hotel.name}
							locaion={hotelBooking.hotel.location}
							roomName={hotelBooking.room.name}
							beds={hotelBooking.room.beds}
							startDate={hotelBooking.bookingDates.startDate}
							endDate={hotelBooking.bookingDates.endDate}
							onView={() =>
								props.navigation.navigate('TripsHotelBooking', {
									hotelID: hotelBooking.hotel.ID,
									hotelBookingOrderNumber: hotelBooking.orderNumber
								})}
						/>
					</View>
				)}
				ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
				ListFooterComponent={() => <View style={{ height: 48 }} />}
			/>
		</View>
	);
};

const mapStateToProps = ({ user }) => ({
	user
});

export default connect(mapStateToProps, null)(Trips);
