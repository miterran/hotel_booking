import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StyleSheet, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import _ from 'lodash';
import Colors from '../constants/Colors';
import hotelsImg from '../assets/images/hotels';
import HotelIntroViewCardModal from '../modals/HotelIntroViewCardModal';

const Pin = ({ salePrice }) => (
	<View style={{ alignItems: 'center' }}>
		<View style={{ backgroundColor: Colors.theme, borderRadius: 6 }}>
			<Text
				style={{
					color: Colors.white,
					fontSize: 12,
					fontWeight: 'bold',
					padding: 6
				}}
			>{`$${salePrice}`}</Text>
		</View>
		<FontAwesome name="map-marker" color={Colors.theme} size={32} />
	</View>
);

const HotelListMapView = (props) => {
	const [ region, setRegion ] = useState({
		latitude: 37.78925493002006,
		latitudeDelta: 0.062367098999295933,
		longitude: -122.42082335837263,
		longitudeDelta: 0.04506531630421762
	});
	const [ hotels ] = useState(_.values(props.hotels));
	const [ hotelID, setHotelID ] = useState(null);
	const [ hotelIntroViewCardModalVisible, setHotelIntroViewCardModalVisible ] = useState(false);

	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={{ flex: 1 }}
				showsPointsOfInterest={false}
				showsTraffic={false}
				showsIndoors={false}
				showsUserLocation={true}
				initialRegion={region}
				onRegionChangeComplete={(region) => setRegion(region)}
				onPress={() => null}
			>
				{hotels.map((hotel) => (
					<MapView.Marker
						key={hotel.ID}
						coordinate={{
							latitude: hotel.latitude,
							longitude: hotel.longitude
						}}
						title={hotel.name}
						onPress={() => {
							setHotelID(hotel.ID);
							setHotelIntroViewCardModalVisible(true);
						}}
					>
						<Pin salePrice={hotel.salePrice} />
					</MapView.Marker>
				))}
			</MapView>
			{hotelID && (
				<HotelIntroViewCardModal
					hotelID={hotelID}
					visible={hotelIntroViewCardModalVisible}
					onClose={() => setHotelIntroViewCardModalVisible(!hotelIntroViewCardModalVisible)}
				/>
			)}
		</View>
	);
};

const mapStateToProps = ({ hotels }) => ({ hotels });

export default connect(mapStateToProps, null)(HotelListMapView);
