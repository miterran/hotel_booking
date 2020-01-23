import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import HeaderTitleLogo from './customHeaders/HeaderTitleLogo';
import HeaderLeftBack from './customHeaders/HeaderLeftBack';
import HeaderLeftPop from './customHeaders/HeaderLeftPop';
import HotelListHeaderTitle from './customHeaders/HotelListHeaderTitle';
import HotelListHeaderRightFilter from './customHeaders/HotelListHeaderRightFilter';
import Colors from '../constants/Colors';

import HotelLocationMap from '../screens/HotelLocationMap';

export default createAppContainer(
	createStackNavigator({
		HotelLocationMap: {
			screen: HotelLocationMap,
			navigationOptions: {
				headerStyle: {
					backgroundColor: Colors.theme
				},
				headerLeft: <HeaderLeftPop icon="chevron-down" />,
				headerTitle: <HeaderTitleLogo />
			}
		}
	})
);
