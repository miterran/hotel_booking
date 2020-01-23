import React from 'react';
import { Text, TouchableOpacity, Alert, View } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';
import { setUserLogout } from '../../redux/actions/handleAuth';

const UserHeaderRightLogout = (props) => {
	if (!props.user.email) return <View />;
	return (
		<TouchableOpacity
			onPress={() => {
				Alert.alert(
					'Sign out',
					'',
					[
						{ text: 'Confirm', onPress: () => props.setUserLogout() },
						{ text: 'Cancel', onPress: () => null, style: 'cancel' }
					],
					{ cancelable: true }
				);
			}}
		>
			<Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold', marginLeft: 18, marginRight: 18 }}>
				Logout
			</Text>
		</TouchableOpacity>
	);
};

const mapStateToProps = ({ user }) => ({
	user
});

export default connect(mapStateToProps, { setUserLogout })(UserHeaderRightLogout);
