import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainMenuBottomTab from './MainMenuBottomTab';
import HotelQuery from './HotelQuery';
import AuthSignin from './AuthSignin';
import TripsHotelImportBooking from './TripsHotelImportBooking';
import HotelImagesDisplay from './HotelImagesDisplay';
import HotelLocationMap from './HotelLocationMap';
import TripsHotelBooking from './TripsHotelBooking';
import Colors from '../constants/Colors';

import HotelList from './HotelList';
import HotelView from './HotelView';

const AppNavigator = createAppContainer(
	createStackNavigator(
		{
			MainMenuBottomTab: MainMenuBottomTab,
			HotelList: HotelList,
			HotelView: HotelView,
			HotelLocationMap: HotelLocationMap,
			HotelQuery: HotelQuery,
			HotelImagesDisplay: HotelImagesDisplay,
			TripsHotelBooking: TripsHotelBooking,
			TripsHotelImportBooking: TripsHotelImportBooking,
			AuthSignin: AuthSignin
		},
		{
			//backBehavior: 'history'
			defaultNavigationOptions: {
				header: null,
				gesturesEnabled: false
			},
			mode: 'modal'
		}
	)
);

export default AppNavigator;
