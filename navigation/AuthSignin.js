import React from 'react';

import {
	createAppContainer,
	createMaterialTopTabNavigator,
	MaterialTopTabBar,
	createStackNavigator
} from 'react-navigation';

import AuthRegister from '../screens/AuthRegister';
import AuthLogin from '../screens/AuthLogin';
import AuthForgotPassword from '../screens/AuthForgotPassword';

import Colors from '../constants/Colors';
import HeaderTitleLogo from './customHeaders/HeaderTitleLogo';
import HeaderLeftBack from './customHeaders/HeaderLeftBack';
import HeaderLeftPop from './customHeaders/HeaderLeftPop';

export default createAppContainer(
	createStackNavigator({
		AuthSignin: {
			screen: createMaterialTopTabNavigator(
				{
					AuthLogin: {
						screen: AuthLogin,
						navigationOptions: {
							title: 'Login'
						}
					},
					AuthRegister: {
						screen: AuthRegister,
						navigationOptions: {
							title: 'Register'
						}
					}
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
			),
			navigationOptions: {
				headerStyle: {
					backgroundColor: Colors.theme
				},
				headerLeft: <HeaderLeftPop icon="chevron-down" />,
				headerTitle: <HeaderTitleLogo />
			}
		},
		AuthForgotPassword: {
			screen: AuthForgotPassword,
			navigationOptions: {
				headerStyle: {
					backgroundColor: Colors.theme
				},
				headerLeft: <HeaderLeftBack icon="chevron-left" />,
				headerTitle: <HeaderTitleLogo />
			}
		}
	})
);
