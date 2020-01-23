import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

const HotelMapIconButton = ({ hotelID, navigation, style = {} }) => (
	<TouchableOpacity style={style} onPress={() => navigation.navigate('HotelLocationMap', { hotelID: hotelID })}>
		<FontAwesome name={'map'} color={Colors.cloud} size={24} />
	</TouchableOpacity>
);

export default withNavigation(HotelMapIconButton);
