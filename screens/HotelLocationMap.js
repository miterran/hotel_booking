import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StyleSheet, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';

const Pin = () => (
	<View style={{ alignItems: 'center' }}>
		<FontAwesome name="map-marker" color={Colors.theme} size={32} />
	</View>
);

const HotelLocationMap = (props) => {
	const [ hotel ] = useState(props.hotels[props.navigation.state.params.hotelID]);
	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={{ flex: 1 }}
				showsPointsOfInterest={false}
				showsTraffic={false}
				showsIndoors={false}
				showsUserLocation={true}
				initialRegion={{
					latitude: hotel.latitude,
					longitude: hotel.longitude,
					latitudeDelta: 0.062367098999295933,
					longitudeDelta: 0.04506531630421762
				}}
			>
				<MapView.Marker
					coordinate={{
						latitude: hotel.latitude,
						longitude: hotel.longitude
					}}
					title={hotel.name}
				>
					<Pin />
				</MapView.Marker>
			</MapView>
		</View>
	);
};

const mapStateToProps = ({ hotels }) => ({ hotels });

export default connect(mapStateToProps, null)(HotelLocationMap);
