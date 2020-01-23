import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const InputBox = ({ editable = true, placeholder, secureTextEntry = false, onChangeText, value }) => (
	<TextInput
		editable={editable}
		autoCapitalize="none"
		style={styles.container}
		placeholder={placeholder}
		placeholderTextColor={Colors.silver}
		secureTextEntry={secureTextEntry}
		autoCorrect={false}
		maxLength={18}
		onChangeText={(text) => onChangeText(text)}
		value={value}
	/>
);

const styles = StyleSheet.create({
	container: {
		padding: 12,
		fontSize: 16,
		color: Colors.light_elephant,
		borderWidth: 1,
		borderColor: Colors.cloud,
		borderRadius: 12
	}
});

export default InputBox;
