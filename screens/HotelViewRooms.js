import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, StyleSheet, Alert } from 'react-native';
import Colors from '../constants/Colors';
import suitesImg from '../assets/images/suites';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { HotelRoomIntroBookCard } from '../components/HotelIntro';
import _ from 'lodash';
import { connect } from 'react-redux';
import { handleConfirmHotelBookingDates, handleConfirmHotelGuests } from '../redux/actions/handleHotelsQuery';
import moment from 'moment';
import InputButton from '../components/InputButton';

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

const HotelViewRooms = (props) => {
	const [ hotelID, setHotelID ] = useState('');
	const [ rooms, setRooms ] = useState([]);

	useEffect(() => {
		setHotelID(props.navigation.dangerouslyGetParent().getParam('hotelID'));
		setRooms(_.values(props.hotels[props.navigation.dangerouslyGetParent().getParam('hotelID')].rooms));
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			<FlatList
				data={rooms}
				keyExtractor={(room) => room.ID}
				ListHeaderComponent={() => (
					<View style={{ margin: 12 }}>
						<InputButton
							icon="calendar-o"
							title="CHOOSE DATES"
							placeholder={genBookingDatesPlaceholder(
								props.bookingDates.startDate,
								props.bookingDates.endDate,
								props.bookingDates.totalNightsQty
							)}
							onPress={() => props.navigation.navigate('HotelQueryCalendarList')}
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
						<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					</View>
				)}
				renderItem={({ item: room, index }) => (
					<HotelRoomIntroBookCard
						img={suitesImg[room.coverImg]}
						name={room.name}
						beds={room.beds}
						salePrice={room.salePrice}
						orgPrice={room.orgPrice}
						onBook={() => {
							if (!props.user.email) {
								Alert.alert(
									'Book room',
									'Sign in required',
									[
										{ text: 'Sign in', onPress: () => props.navigation.navigate('AuthSignin') },
										{ text: 'Cancel', onPress: () => null, style: 'cancel' }
									],
									{ cancelable: true }
								);
								return;
							}

							props.navigation.navigate('HotelRoomBook', { hotelID: hotelID, roomID: room.ID });
						}}
					/>
				)}
				ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
				ListFooterComponent={() => <View style={{ height: 48 }} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 12,
		width: '100%',
		justifyContent: 'space-around',
		flexDirection: 'row'
	},
	text: {
		color: Colors.theme,
		fontSize: 16,
		fontWeight: 'bold'
	},
	subText: {
		color: Colors.theme,
		fontSize: 12,
		fontWeight: 'bold'
	}
});

const mapStateToProps = ({ user, hotels, hotelsQuery: { bookingDates, guests } }) => ({
	hotels,
	user,
	bookingDates,
	guests
});

export default connect(mapStateToProps, null)(HotelViewRooms);
