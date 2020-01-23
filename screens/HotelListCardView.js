import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import hotelsImg from '../assets/images/hotels';
import { HotelIntroViewCard } from '../components/HotelIntro';
import _ from 'lodash';
import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';

const HotelListCardView = (props) => {
	const [ hotels, setHotels ] = useState([]);
	useEffect(() => {
		console.log('HotelListCardView');
		setHotels(_.values(props.hotels));
	}, []);
	return (
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			<FlatList
				data={hotels}
				keyExtractor={(hotel, idx) => `hotel_intro_${idx}`}
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

const mapStateToProps = ({ hotels, user }) => ({ hotels, user });

export default connect(mapStateToProps, null)(HotelListCardView);
