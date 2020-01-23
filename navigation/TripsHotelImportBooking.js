import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import TripsHotelImportBooking from '../screens/TripsHotelImportBooking';
import HeaderLeftPop from './customHeaders/HeaderLeftPop';
import HeaderTitleLogo from './customHeaders/HeaderTitleLogo';
import Colors from '../constants/Colors';

export default createAppContainer(
	createStackNavigator(
		{
			TripsHotelImportBooking: {
				screen: TripsHotelImportBooking,
				navigationOptions: {
					headerLeft: <HeaderLeftPop icon="chevron-down" />
				}
			}
		},
		{
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: Colors.theme
				},
				headerTitle: HeaderTitleLogo
			}
		}
	)
);
