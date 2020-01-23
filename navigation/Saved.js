import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import SavedHotel from '../screens/SavedHotel';
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
			Saved: SavedHotel
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
