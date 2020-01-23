import React from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import {
	createStackNavigator,
	createAppContainer,
	createMaterialTopTabNavigator,
	createSwitchNavigator
} from 'react-navigation';

import Colors from '../constants/Colors';

import HotelQueryCalendarListHeaderTitle from './customHeaders/HotelQueryCalendarListHeaderTitle';
import HotelQueryGuestsHeaderTitle from './customHeaders/HotelQueryGuestsHeaderTitle';
import HotelQueryDestinationHeaderTitle from './customHeaders/HotelQueryDestinationHeaderTitle';
import HotelQueryFilterHeaderTitle from './customHeaders/HotelQueryFilterHeaderTitle';
import HotelQueryFilterHeaderRightReset from './customHeaders/HotelQueryFilterHeaderRightReset';
import HotelQueryGuestsHeaderRightAddRoom from './customHeaders/HotelQueryGuestsHeaderRightAddRoom';

import HotelQueryCalendarList from '../screens/HotelQueryCalendarList';
import HotelQueryDestination from '../screens/HotelQueryDestination';
import HotelQueryGuests from '../screens/HotelQueryGuests';
import HotelQueryFilter from '../screens/HotelQueryFilter';

export default createAppContainer(
	createSwitchNavigator({
		HotelQueryDestination: createAppContainer(
			createStackNavigator({
				HotelQueryDestination: {
					screen: HotelQueryDestination,
					navigationOptions: {
						headerTitle: <HotelQueryDestinationHeaderTitle />,
						headerStyle: {
							backgroundColor: Colors.theme
						}
					}
				}
			})
		),
		HotelQueryCalendarList: createAppContainer(
			createStackNavigator({
				HotelQueryCalendarList: {
					screen: HotelQueryCalendarList,
					navigationOptions: {
						headerTitle: <HotelQueryCalendarListHeaderTitle />,
						headerStyle: {
							backgroundColor: Colors.theme
						}
					}
				}
			})
		),
		HotelQueryGuests: createAppContainer(
			createStackNavigator({
				HotelQueryGuests: {
					screen: HotelQueryGuests,
					navigationOptions: {
						headerTitle: <HotelQueryGuestsHeaderTitle />,
						headerRight: <HotelQueryGuestsHeaderRightAddRoom />,
						headerStyle: {
							backgroundColor: Colors.theme
						}
					}
				}
			})
		),
		HotelQueryFilter: createAppContainer(
			createStackNavigator({
				HotelQueryFilter: {
					screen: HotelQueryFilter,
					navigationOptions: {
						headerTitle: <HotelQueryFilterHeaderTitle />,
						headerRight: <HotelQueryFilterHeaderRightReset />,
						headerStyle: {
							backgroundColor: Colors.theme
						}
					}
				}
			})
		)
	})
);
