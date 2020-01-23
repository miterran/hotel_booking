import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import BottomConfirmButton from '../components/BottomConfirmButton';
import { addUserHotelBookings } from '../redux/actions/handleUser';
import shortid from 'shortid';

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

const HotelRoomBook = (props) => {
	const [ hotelBooking ] = useState(() => {
		const hotel = props.hotels[props.navigation.state.params.hotelID];
		const room = hotel.rooms[props.navigation.state.params.roomID];

		return {
			orderNumber: shortid.generate().toString(),
			bookingDates: props.bookingDates,
			guests: props.guests,
			hotel: hotel,
			room: room,
			payment: {
				roomRate: room.salePrice,
				taxesFees: (props.bookingDates.totalNightsQty *
					props.guests.totalRoomsQty *
					room.salePrice *
					0.1).toFixed(2),
				total: (props.bookingDates.totalNightsQty * props.guests.totalRoomsQty * room.salePrice * 1.1).toFixed(
					2
				),
				creditCardNumber: ''
			}
		};
	});

	return (
		<View style={{ flex: 1, backgroundColor: Colors.cloud }}>
			<ScrollView>
				<Section>
					<Head title="Payment" />
					<View style={{ flexDirection: 'row', width: '100%' }}>
						<TextInput
							style={styles.input}
							placeholder="First name"
							// onChangeText={(text) => null}
							// value={props.filter.hotelNameContains}
						/>
						<View style={{ width: 12 }} />
						<TextInput
							style={styles.input}
							placeholder="Last name"
							// onChangeText={(text) => null}
							// value={props.filter.hotelNameContains}
						/>
					</View>
					<View style={{ height: 12 }} />
					<TextInput
						style={styles.input}
						placeholder="Credit card number"
						// onChangeText={(text) => null}
						// value={props.filter.hotelNameContains}
					/>
				</Section>
				<View style={{ height: 12, backgroundColor: Colors.cloud }} />
				<Section>
					<Head title="Booking" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Hotel" content={hotelBooking.hotel.name} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Room Type" content={hotelBooking.room.name} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Bed Type" content={hotelBooking.room.beds} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Check-in" content={props.bookingDates.startDate} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Check-out" content={props.bookingDates.endDate} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Nights stay" content={props.bookingDates.totalNightsQty} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Number of rooms" content={props.guests.totalRoomsQty} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Number of adults" content={props.guests.totalAdultsQty} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Number of children" content={props.guests.totalChildrenQty} />
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

			<BottomConfirmButton
				onPress={() => {
					//console.log(hotelBooking);
					props.addUserHotelBookings(hotelBooking);
					props.navigation.popToTop();
					props.navigation.navigate('Trips');
				}}
				title="Confirm"
				disabled={false}
			/>
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

const mapStateToProps = ({ hotels, user, hotelsQuery: { bookingDates, guests } }) => ({
	hotels,
	user,
	bookingDates,
	guests
});

export default connect(mapStateToProps, { addUserHotelBookings })(HotelRoomBook);
