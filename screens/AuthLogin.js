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

const AuthLogin = (props) => {
	const {
		navigation,
		handleSubmit,
		setFieldValue,
		errors,
		isSubmitting,
		resetForm,
		values: { email, password }
	} = props;
	return (
		<View style={{ flex: 1 }}>
			<LoadingModal visible={isSubmitting} />
			<View style={{ flex: 1 }}>
				<View style={{ margin: 12 }}>
					<InputBox
						placeholder="Email address"
						onChangeText={(text) => setFieldValue('email', text)}
						value={email}
					/>
					<View style={{ height: 12 }} />
					<InputBox
						placeholder="Password"
						onChangeText={(text) => setFieldValue('password', text)}
						value={password}
						secureTextEntry={true}
					/>
				</View>

				<TouchableOpacity
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('AuthForgotPassword')}
				>
					<Text
						style={{
							fontSize: 12,
							color: Colors.light_elephant
						}}
					>
						Forgot password
					</Text>
				</TouchableOpacity>

				<View style={{ height: 24 }} />
				<TouchableOpacity onPress={() => resetForm()}>
					<Text
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							color: Colors.light_red
						}}
					>
						{errors.alert}
					</Text>
				</TouchableOpacity>
			</View>

			<Text style={{ textAlign: 'center', color: Colors.silver }}>Login with other accounts</Text>
			<View style={{ height: 24 }} />
			<View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
				<FontAwesome
					style={{ flex: 1, textAlign: 'center' }}
					name="facebook"
					size={32}
					color={Colors.facebook_blue}
				/>
				<FontAwesome
					style={{ flex: 1, textAlign: 'center' }}
					name="google"
					size={32}
					color={Colors.google_cinnabar}
				/>
				<FontAwesome
					style={{ flex: 1, textAlign: 'center' }}
					name="wechat"
					size={32}
					color={Colors.wechat_green}
				/>
			</View>
			<View style={{ height: 24 }} />

			<BottomConfirmButton onPress={handleSubmit} title="Login" disabled={false} />
		</View>
	);
};

const emailSchema = yup.object().shape({
	email: yup.string().email().required()
});

const AuthLoginWithData = withFormik({
	mapPropsToValues: () => ({ email: '', password: '' }),
	handleSubmit: (
		{ email, password },
		{ setSubmitting, setErrors, props: { navigation, users, setUserLoginSuccessful } }
	) => {
		setTimeout(async () => {
			setSubmitting(false);
			const isEmailValid = await emailSchema.isValid({ email: email });
			if (!isEmailValid) {
				setErrors({ alert: 'Email address is invalid.' });
				return;
			}
			if (password.length < 6) {
				setErrors({ alert: 'Password at least 6 characters long.' });
				return;
			}
			if (email in users && users[email].password === password) {
				setUserLoginSuccessful(users[email]);
				navigation.pop();
				return;
			}
			setErrors({ alert: 'Email or Password is incorrect.' });
			return;
		}, 500);
	}
})(AuthLogin);

const mapStateToProps = ({ users }) => ({
	users
});

export default connect(mapStateToProps, { setUserLoginSuccessful })(AuthLoginWithData);
