import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const InputButton = ({ icon, placeholder, onPress, color = Colors.dark_elephant }) => (
	<View style={{ marginBottom: 12 }}>
		<TouchableOpacity onPress={onPress}>
			<View
				style={{
					borderRadius: 6,
					alignItems: 'center',
					flexDirection: 'row',
					backgroundColor: Colors.white,
					borderWidth: 1,
					borderColor: Colors.cloud
				}}
			>
				<FontAwesome
					style={{ margin: 12, width: 24, textAlign: 'center' }}
					name={icon}
					color={Colors.theme}
					size={24}
				/>
				<Text
					style={{
						fontSize: 16,
						color: color
					}}
				>
					{placeholder}
				</Text>
			</View>
		</TouchableOpacity>
	</View>
);

export default InputButton;
