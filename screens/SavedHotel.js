import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/Colors';
import hotelsImg from '../assets/images/hotels';
import { HotelIntroViewCard } from '../components/HotelIntro';
import _ from 'lodash';
import { connect } from 'react-redux';
import SigninRequired from '../containers/SigninRequired';

const Search = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={{ margin: 12 }}>
			<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>
				Save the hotel on the list so you can find it later.
			</Text>
			<View style={{ height: 12 }} />
			<TouchableOpacity
				onPress={() => navigation.navigate('Shop')}
				style={{
					backgroundColor: Colors.white,
					borderRadius: 6,
					justifyContent: 'center',
					alignItems: 'center',
					borderWidth: 1,
					borderColor: Colors.theme
				}}
			>
				<Text style={{ color: Colors.theme, fontWeight: 'bold', padding: 12, fontSize: 16 }}>Search</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const Saved = (props) => {
	if (!props.user.email) return <SigninRequired title="Sign in to view your saved hotels." />;

	// const [ savedHotels, setSavedHotels ] = useState([]);
	// useEffect(() => setSavedHotels(_.keys(props.user.savedHotelIDs).map((hotelID) => props.hotels[hotelID])), [
	// 	_.keys(props.user.savedHotelIDs).length
	// ]);

	if (_.keys(props.user.savedHotelIDs).length === 0) return <Search navigation={props.navigation} />;

	return (
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			<FlatList
				data={_.keys(props.user.savedHotelIDs).map((hotelID) => props.hotels[hotelID])}
				keyExtractor={(hotel, idx) => `hotel_saved_intro_${idx}`}
				ListHeaderComponent={() => <View style={{ height: 12 }} />}
				renderItem={({ item: hotel }) => (
					<HotelIntroViewCard
						hotelID={hotel.ID}
						img={hotelsImg[hotel.coverImg]}
						isTKHotel={hotel.isTKHotel}
						stars={hotel.stars}
						name={hotel.name}
						location={hotel.location}
						reviews={hotel.reviews}
						guestScore={hotel.guestScore}
						orgPrice={hotel.orgPrice}
						salePrice={hotel.salePrice}
						onView={() => props.navigation.navigate('HotelView', { hotelID: hotel.ID })}
					/>
				)}
				ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
				ListFooterComponent={() => <View style={{ height: 48 }} />}
			/>
		</View>
	);
};

const mapStateToProps = ({ user, hotels }) => ({
	user,
	hotels
});

export default connect(mapStateToProps, null)(Saved);
