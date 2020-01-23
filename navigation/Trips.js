import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import TripsHotel from '../screens/TripsHotel';

import HeaderTitleLogo from './customHeaders/HeaderTitleLogo';
import Colors from '../constants/Colors';

// const navigationOptions = {
// 	headerStyle: {
// 		backgroundColor: Colors.theme
// 	},
// 	headerTitle: NavHeaderLogo
// };

export default createAppContainer(
	createStackNavigator(
		{
			Trips: TripsHotel
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
