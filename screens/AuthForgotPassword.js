import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { setUserLoginSuccessful } from '../redux/actions/handleAuth';
import InputBox from '../components/InputBox';
import { withFormik } from 'formik';
import BottomConfirmButton from '../components/BottomConfirmButton';
import LoadingModal from '../modals/LoadingModal';
import * as yup from 'yup';

const AuthForgotPassword = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={{ margin: 12 }}>
					<InputBox placeholder="Email address" />
					<View style={{ height: 12 }} />
					<Text style={{ color: Colors.light_elephant }}>
						We will email you instructions for reseting your password.
					</Text>
				</View>
			</View>
			<BottomConfirmButton onPress={() => null} title="Reset My Password" disabled={false} />
		</View>
	);
};

export default AuthForgotPassword;
