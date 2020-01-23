import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { withNavigation } from 'react-navigation';

const HeaderLeftBack = (props) => (
	<TouchableOpacity style={{ marginLeft: 18, marginRight: 18 }} onPress={() => props.navigation.goBack(null)}>
		<FontAwesome name={props.icon} color={Colors.white} size={22} />
	</TouchableOpacity>
);

export default withNavigation(HeaderLeftBack);
