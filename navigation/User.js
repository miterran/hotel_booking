import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import User from '../screens/User';
import HeaderTitleLogo from './customHeaders/HeaderTitleLogo';
import Colors from '../constants/Colors';
import UserHeaderRightLogout from './customHeaders/UserHeaderRightLogout';
export default createAppContainer(
	createStackNavigator(
		{
			User: {
				screen: User,
				navigationOptions: {
					headerRight: <UserHeaderRightLogout />
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
