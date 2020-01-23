import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import Colors from '../constants/Colors';

const BottomConfirmButton = ({ onPress, title, disabled = false }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			backgroundColor: disabled ? Colors.inactive : Colors.active,
			height: 80,
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.white }}>{title}</Text>
		<View style={{ height: 12 }} />
	</TouchableOpacity>
);

export default BottomConfirmButton;
