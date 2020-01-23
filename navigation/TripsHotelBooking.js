import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import HotelViewAbout from '../screens/HotelViewAbout';
import HotelViewRooms from '../screens/HotelViewRooms';
import HotelViewReviews from '../screens/HotelViewReviews';
import Colors from '../constants/Colors';

import HeaderTitleLogo from './customHeaders/HeaderTitleLogo';
import HeaderLeftBack from './customHeaders/HeaderLeftBack';
import HeaderLeftPop from './customHeaders/HeaderLeftPop';
import HotelListHeaderTitle from './customHeaders/HotelListHeaderTitle';
import HotelListHeaderRightFilter from './customHeaders/HotelListHeaderRightFilter';

import HotelList from './HotelList';
// import HotelView from './HotelView';
import HotelBookingSummary from '../screens/HotelBookingSummary';
import HotelSmartLock from '../screens/HotelSmartLock';

export default createAppContainer(
	createStackNavigator(
		{
			TripsHotelBooking: {
				screen: createAppContainer(
					createMaterialTopTabNavigator(
						{
							TripsHotelBookingViewAbout: {
								screen: HotelViewAbout,
								navigationOptions: { title: 'Hotel' }
							},
							HotelBookingSummary: {
								screen: HotelBookingSummary,
								navigationOptions: { title: 'Summary' }
							},
							HotelSmartLock: {
								screen: HotelSmartLock,
								navigationOptions: { title: 'Smart Lock' }
							}
							//HotelViewRooms: { screen: HotelViewRooms, navigationOptions: { title: 'Rooms' } },
							//HotelViewReviews: { screen: HotelViewReviews, navigationOptions: { title: 'Reviews' } }
						},
						{
							tabBarOptions: {
								activeTintColor: Colors.theme,
								inactiveTintColor: Colors.inactive,
								labelStyle: {
									fontSize: 14,
									fontWeight: 'bold'
								},
								indicatorStyle: {
									backgroundColor: Colors.theme
								},
								style: {
									backgroundColor: Colors.white,
									borderBottomWidth: 0
								}
							}
						}
					)
				),
				navigationOptions: {
					headerLeft: <HeaderLeftPop icon="chevron-down" />
				}
			}
			// HotelRoomBook: {
			// 	screen: HotelRoomBook,
			// 	navigationOptions: {
			// 		headerLeft: <HeaderLeftPop icon="chevron-left" />
			// 	}
			// }
		},
		{
			defaultNavigationOptions: {
				headerTitle: <HeaderTitleLogo />,
				headerStyle: {
					backgroundColor: Colors.theme
				}
				// headerTitle: NavHeaderLogo
			}
		}
	)
);
