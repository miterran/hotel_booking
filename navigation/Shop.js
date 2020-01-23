import { createStackNavigator, createAppContainer } from 'react-navigation';
import ShopHotel from '../screens/ShopHotel';
import HeaderTitleLogo from './customHeaders/HeaderTitleLogo';
import Colors from '../constants/Colors';

export default createAppContainer(
	createStackNavigator(
		{
			ShopHotel: ShopHotel
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
