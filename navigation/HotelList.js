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

import HotelListCardView from '../screens/HotelListCardView';
import HotelListMapView from '../screens/HotelListMapView';

export default createAppContainer(
	createStackNavigator(
		{
			HotelList: {
				screen: createAppContainer(
					createMaterialTopTabNavigator(
						{
							HotelListCardView: { screen: HotelListCardView, navigationOptions: { title: 'List' } },
							HotelListMapView: { screen: HotelListMapView, navigationOptions: { title: 'Map' } }
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
					headerLeft: <HeaderLeftPop icon="chevron-down" />,
					headerRight: <HotelListHeaderRightFilter />,
					headerTitle: <HotelListHeaderTitle />
				}
			}
		},
		{
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: Colors.theme
				}
				// headerTitle: NavHeaderLogo
			}
		}
	)
);
