import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const amenities = [
	{ name: 'Free Parking', icon: 'local-parking' },
	{ name: 'Free Breakfast', icon: 'free-breakfast' },
	{ name: 'Pets Allowed', icon: 'pets' },
	{ name: 'Fitness Center', icon: 'fitness-center' },
	{ name: 'Shuttle', icon: 'airport-shuttle' },
	{ name: 'Restaurant', icon: 'restaurant' },
	{ name: 'No Smoking', icon: 'smoke-free' },
	{ name: 'Handicap Accessible', icon: 'accessible' },
	{ name: 'Free Internet', icon: 'wifi' }
];

const HotelAmenities = () => {
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			{amenities.map((amenity) => (
				<View style={{ width: 60, paddingTop: 6, paddingBottom: 6, alignItems: 'center' }} key={amenity.name}>
					<MaterialIcons
						style={{ textAlign: 'center' }}
						name={amenity.icon}
						size={24}
						color={Colors.light_elephant}
					/>
					<Text style={{ textAlign: 'center', color: Colors.light_elephant, fontSize: 8, width: 48 }}>
						{amenity.name}
					</Text>
				</View>
			))}
		</ScrollView>
	);
};

export default HotelAmenities;
