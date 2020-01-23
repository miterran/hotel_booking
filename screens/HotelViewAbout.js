import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import hotelsImg from '../assets/images/hotels';
import { connect } from 'react-redux';

import { HotelIntroAbout } from '../components/HotelIntro';

import HotelAmenities from '../components/HotelAmenities';

const HotelViewAbout = (props) => {
	const [ hotel, setHotel ] = useState({});
	// setParams
	useEffect(() => {
		setHotel(props.hotels[props.navigation.dangerouslyGetParent().getParam('hotelID')]);
	}, []);
	return (
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			<ScrollView>
				<HotelIntroAbout
					hotelID={hotel.ID}
					img={hotelsImg[hotel.coverImg]}
					isTKHotel={hotel.isTKHotel}
					stars={hotel.stars}
					name={hotel.name}
					location={hotel.location}
					reviews={hotel.reviews}
					guestScore={hotel.guestScore}
				/>
				<View style={styles.hr} />
				<HotelAmenities />
				<View style={styles.hr} />
				<Text style={styles.title}>About This Hotel</Text>
				<Text style={styles.content}>{hotel.about}</Text>
				<View style={styles.hr} />
				<Text style={styles.title}>Hotel Policies</Text>
				<Text style={styles.content}>......</Text>
				<View style={styles.hr} />
				<Text style={styles.title}>Important Information</Text>
				<Text style={styles.content}>......</Text>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		color: Colors.dark_elephant,
		fontSize: 16,
		margin: 12
	},
	content: {
		color: Colors.light_elephant,
		marginLeft: 12,
		marginRight: 12,
		marginBottom: 12
	},
	hr: {
		height: 1,
		backgroundColor: Colors.cloud,
		marginLeft: 12,
		marginRight: 12
	}
});

const mapStateToProps = ({ hotels, user }) => ({ hotels, user });

export default connect(mapStateToProps, null)(HotelViewAbout);
