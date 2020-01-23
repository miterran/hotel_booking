import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Colors from '../constants/Colors';
import hotelsImg from '../assets/images/hotels';
import { HotelIntroViewCard } from '../components/HotelIntro';
import _ from 'lodash';
import { connect } from 'react-redux';
import ImageLayout from 'react-native-image-layout';
import { FontAwesome } from '@expo/vector-icons';

const HotelImagesDisplay = (props) => {
	const [ images ] = useState(
		_.values(hotelsImg).map((hotelImage) => {
			return { source: hotelImage, dimensions: { width: 1, height: 1 } };
		})
	);

	const renderPageHeader = (image, index, onClose) => {
		return (
			<SafeAreaView>
				<TouchableOpacity
					style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}
					onPress={() => onClose()}
				>
					<FontAwesome name="close" color={Colors.white} size={24} />
				</TouchableOpacity>
			</SafeAreaView>
		);
	};

	return (
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			<ImageLayout renderPageHeader={renderPageHeader} images={images} />
		</View>
	);
};

export default HotelImagesDisplay;

// const mapStateToProps = ({ hotels }) => ({ hotels });

// export default connect(mapStateToProps, null)(HotelImagesDisplay);
