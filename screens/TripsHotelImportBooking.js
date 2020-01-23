import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import InputBox from '../components/InputBox';
import Colors from '../constants/Colors';
import BottomConfirmButton from '../components/BottomConfirmButton';
import _ from 'lodash';

const TripsHotelImportBooking = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={{ margin: 12 }}>
					<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>
						Import a booking you made on a different account.
					</Text>

					<View style={{ height: 12 }} />
					<InputBox placeholder="Confirmation Number" />
					<View style={{ height: 12 }} />
					<InputBox placeholder="PIN" />
				</View>
			</View>
			<BottomConfirmButton
				onPress={() => {
					props.navigation.pop();
				}}
				title="Import"
				disabled={false}
			/>
		</View>
	);
};

const mapStateToProps = ({ user }) => ({
	user
});

export default connect(mapStateToProps, null)(TripsHotelImportBooking);
