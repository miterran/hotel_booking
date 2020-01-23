import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import { setUserSaveHotel } from '../redux/actions/handleUser';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import _ from 'lodash';
const SaveHotelButton = ({ hotelID, user, navigation, setUserSaveHotel, style }) => {
	// const [ isSaved, setIsSaved ] = useState(false);
	// useEffect(
	// 	() => {
	// 		console.log('save button');
	// 		setIsSaved(user.savedHotelIDs[hotelID]);
	// 	},
	// 	[ _.keys(props.user.savedHotelIDs).length ]
	// );
	// console.log(_.keys(user.savedHotelIDs).length);
	return (
		<TouchableOpacity
			style={style}
			onPress={() => {
				if (!user.email) {
					Alert.alert(
						'Save Hotel',
						'Sign in required',
						[
							{ text: 'Sign in', onPress: () => navigation.navigate('AuthSignin') },
							{ text: 'Cancel', onPress: () => null, style: 'cancel' }
						],
						{ cancelable: true }
					);
					return;
				}
				if (user.savedHotelIDs[hotelID]) {
					Alert.alert(
						'Remove it from the save list',
						'',
						[
							{
								text: 'Confirm',
								onPress: () => {
									setUserSaveHotel(hotelID);
								}
							},
							{ text: 'Cancel', onPress: () => null, style: 'cancel' }
						],
						{ cancelable: true }
					);
					return;
				}
				setUserSaveHotel(hotelID);
			}}
		>
			<FontAwesome
				name={user.savedHotelIDs[hotelID] ? 'heart' : 'heart-o'}
				color={user.savedHotelIDs[hotelID] ? Colors.light_red : Colors.cloud}
				size={24}
			/>
		</TouchableOpacity>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { setUserSaveHotel })(withNavigation(SaveHotelButton));
