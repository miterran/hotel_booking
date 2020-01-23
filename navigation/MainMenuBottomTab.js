import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Shop from './Shop';
import Saved from './Saved';
import Trips from './Trips';
import User from './User';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default createAppContainer(
	createBottomTabNavigator(
		{
			Shop: {
				screen: Shop,
				navigationOptions: {
					title: 'Search',
					tabBarIcon: ({ tintColor }) => (
						<FontAwesome style={{ marginBottom: -3 }} name="search" color={tintColor} size={24} />
					)
				}
			},
			Saved: {
				screen: Saved,
				navigationOptions: {
					title: 'Saved',
					tabBarIcon: ({ tintColor }) => (
						<FontAwesome style={{ marginBottom: -3 }} name="heart-o" color={tintColor} size={24} />
					)
				}
			},
			Trips: {
				screen: Trips,
				navigationOptions: {
					title: 'Trips',
					tabBarIcon: ({ tintColor }) => (
						<FontAwesome style={{ marginBottom: -3 }} name="plane" color={tintColor} size={24} />
					)
				}
			},
			User: {
				screen: User,
				navigationOptions: {
					title: 'Account',
					tabBarIcon: ({ tintColor }) => (
						<FontAwesome style={{ marginBottom: -3 }} name="user-o" color={tintColor} size={24} />
					)
				}
			}
		},
		{
			tabBarOptions: {
				activeTintColor: Colors.theme,
				inactiveTintColor: Colors.inactive
			}
		}
	)
);
