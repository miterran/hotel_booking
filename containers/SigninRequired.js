import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/Colors';
import hotelsImg from '../assets/images/hotels';
import { HotelIntroViewCard } from '../components/HotelIntro';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const SigninRequired = ({ navigation, title }) => (
	<View style={{ flex: 1 }}>
		<View style={{ margin: 12 }}>
			<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{title}</Text>
			<View style={{ height: 12 }} />
			<TouchableOpacity
				onPress={() => navigation.navigate('AuthSignin')}
				style={{
					backgroundColor: Colors.white,
					borderRadius: 6,
					justifyContent: 'center',
					alignItems: 'center',
					borderWidth: 1,
					borderColor: Colors.theme
				}}
			>
				<Text style={{ color: Colors.theme, fontWeight: 'bold', padding: 12, fontSize: 16 }}>Sign in</Text>
			</TouchableOpacity>
		</View>
	</View>
);

export default withNavigation(SigninRequired);
