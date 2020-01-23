import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Share } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const HotelShareIconButton = ({ hotels, hotelID, style = {} }) => {
	return (
		<TouchableOpacity
			style={style}
			onPress={() =>
				Share.share({
					message: `${hotels[hotelID].name} (${hotels[hotelID].location})`
				})}
		>
			<FontAwesome name={'share'} color={Colors.cloud} size={24} />
		</TouchableOpacity>
	);
};

const mapStateToProps = ({ hotels }) => ({ hotels });

export default connect(mapStateToProps, null)(HotelShareIconButton);
