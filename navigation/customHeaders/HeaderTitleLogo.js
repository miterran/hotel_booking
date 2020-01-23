import React from 'react';
import { View, Image, Text } from 'react-native';

const HeaderTitleLogo = () => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
		<Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}>Hotel Booking</Text>
	</View>
);

export default HeaderTitleLogo;
