import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import InputBox from '../components/InputBox';
import { FontAwesome } from '@expo/vector-icons';
import { withFormik } from 'formik';
import BottomConfirmButton from '../components/BottomConfirmButton';
import Colors from '../constants/Colors';
import { setNewUserRegisterSuccessful } from '../redux/actions/handleAuth';
import LoadingModal from '../modals/LoadingModal';
import * as yup from 'yup';

const AuthRegister = (props) => {
	const {
		handleSubmit,
		setFieldValue,
		errors,
		isSubmitting,
		resetForm,
		values: { firstName, lastName, email, password, passwordConfirm, subscribe, agreeTerms }
	} = props;
	return (
		<View style={{ flex: 1 }}>
			<LoadingModal visible={isSubmitting} />
			<View style={{ flex: 1 }}>
				<View style={{ margin: 12 }}>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputBox
								placeholder="First name"
								onChangeText={(text) => setFieldValue('firstName', text)}
								value={firstName}
							/>
						</View>
						<View style={{ width: 12 }} />
						<View style={{ flex: 1 }}>
							<InputBox
								placeholder="Last name"
								onChangeText={(text) => setFieldValue('lastName', text)}
								value={lastName}
							/>
						</View>
					</View>
					<View style={{ height: 12 }} />
					<InputBox
						placeholder="Email adress"
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
					<View style={{ height: 12 }} />
					<InputBox
						placeholder="Confirm password"
						onChangeText={(text) => setFieldValue('passwordConfirm', text)}
						value={passwordConfirm}
						secureTextEntry={true}
					/>

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
			</View>

			<View style={{ margin: 12 }}>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity style={{ width: 24 }} onPress={() => setFieldValue('subscribe', !subscribe)}>
						<FontAwesome name={subscribe ? 'check-square' : 'square-o'} size={24} color={Colors.theme} />
					</TouchableOpacity>
					<View style={{ width: 12 }} />
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<Text style={{ fontSize: 12, color: Colors.light_elephant }}>
							Please send me emails with travel deals, special offers and other information.
						</Text>
					</View>
				</View>

				<View style={{ height: 24 }} />

				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity style={{ width: 24 }} onPress={() => setFieldValue('agreeTerms', !agreeTerms)}>
						<FontAwesome name={agreeTerms ? 'check-square' : 'square-o'} size={24} color={Colors.theme} />
					</TouchableOpacity>
					<View style={{ width: 12 }} />
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<Text style={{ fontSize: 12, color: Colors.light_elephant }}>
							By creating an account, I have read and accept the Rewards{' '}
							<Text style={{ fontWeight: 'bold' }}>Terms and Conditions</Text>, and have read and accpet
							the <Text style={{ fontWeight: 'bold' }}>Terms of Use</Text> and the{' '}
							<Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>.
						</Text>
					</View>
				</View>

				<View style={{ height: 24 }} />
			</View>
			<BottomConfirmButton onPress={handleSubmit} title="Register" disabled={false} />
		</View>
	);
};

const emailSchema = yup.object().shape({
	email: yup.string().email().required()
});

const AuthRegisterWithData = withFormik({
	mapPropsToValues: () => ({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordConfirm: '',
		subscribe: false,
		agreeTerms: false
	}),
	handleSubmit: (
		{ firstName, lastName, email, password, passwordConfirm, subscribe, agreeTerms },
		{ setSubmitting, setErrors, props: { navigation, users, setNewUserRegisterSuccessful } }
	) => {
		setTimeout(async () => {
			setSubmitting(false);

			const regex = /^[a-zA-Z]*$/;

			if (firstName.length <= 0) {
				setErrors({ alert: 'First name is required.' });
				return;
			}

			if (!regex.test(firstName)) {
				setErrors({ alert: 'First name is invalid.' });
				return;
			}

			if (lastName.length <= 0) {
				setErrors({ alert: 'Last name is required.' });
				return;
			}

			if (!regex.test(lastName)) {
				setErrors({ alert: 'Last name is invalid.' });
				return;
			}

			const isEmailValid = await emailSchema.isValid({ email: email });
			if (!isEmailValid) {
				setErrors({ alert: 'Email address is invalid.' });
				return;
			}
			if (password.length < 6) {
				setErrors({ alert: 'Password at least 6 characters long.' });
				return;
			}

			if (password !== passwordConfirm) {
				setErrors({ alert: 'Passwords are not match.' });
				return;
			}

			if (!agreeTerms) {
				setErrors({ alert: 'Please read and accept Terms.' });
				return;
			}

			if (email in users) {
				setErrors({ alert: 'Email already exists' });
				return;
			}
			const newUser = {
				firstName,
				lastName,
				email,
				password,
				subscribe,
				agreeTerms,
				savedHotelIDs: {},
				hotelBookings: {}
			};
			setNewUserRegisterSuccessful(newUser);
			navigation.pop();
			return;
		}, 500);
	}
})(AuthRegister);

const mapStateToProps = ({ user, users }) => ({
	user,
	users
});

export default connect(mapStateToProps, { setNewUserRegisterSuccessful })(AuthRegisterWithData);
