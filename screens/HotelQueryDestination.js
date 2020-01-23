import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { setDestinationLocation } from '../redux/actions/handleHotelsQuery';

const mockLocations = [
	{
		coords: {
			latitude: null,
			longitude: null
		},
		location: 'San Francisco, CA'
	},
	{
		coords: {
			latitude: null,
			longitude: null
		},
		location: 'Oakland, CA'
	},
	{
		coords: {
			latitude: null,
			longitude: null
		},
		location: 'San Rafael, CA'
	},
	{
		coords: {
			latitude: null,
			longitude: null
		},
		location: 'Daly City, CA'
	},
	{
		coords: {
			latitude: null,
			longitude: null
		},
		location: 'South San Francisco, CA'
	}
];

const Location = ({ location, onPress }) => (
	<TouchableOpacity
		style={{
			marginLeft: 12,
			marginRight: 12,
			backgroundColor: Colors.white,
			borderRadius: 6,
			borderWidth: 1,
			borderColor: Colors.cloud
		}}
		onPress={onPress}
	>
		<Text style={{ margin: 12, fontSize: 16, color: Colors.dark_elephant }}>{location}</Text>
	</TouchableOpacity>
);

const HotelQueryDestination = (props) => {
	// const [ destination, setDestination ] = useState(props.destination);
	// const [ locations ] = useState(mockLocations);
	return (
		<View style={{ flex: 1, backgroundColor: Colors.white }}>
			<View style={{ height: 12 }} />

			<View style={{ marginLeft: 12, marginRight: 12 }}>
				<View
					style={{
						borderRadius: 6,
						alignItems: 'center',
						flexDirection: 'row',
						backgroundColor: Colors.white,
						borderWidth: 1,
						borderColor: Colors.theme
					}}
				>
					<FontAwesome
						style={{ margin: 12, width: 24, textAlign: 'center' }}
						name={'search'}
						color={Colors.theme}
						size={24}
					/>
					<TextInput
						style={{ flex: 1, fontSize: 16, color: Colors.dark_elephant }}
						placeholder={props.destination.location}
					/>
				</View>
				<View
					style={{
						alignItems: 'center',
						flexDirection: 'row'
					}}
				>
					<FontAwesome
						style={{ margin: 12, width: 24, textAlign: 'center' }}
						name={'location-arrow'}
						color={Colors.inactive}
						size={24}
					/>
					<Text style={{ flex: 1, fontSize: 16, color: Colors.inactive }}>Current Location</Text>
				</View>
				<View style={{ height: 1, backgroundColor: Colors.cloud }} />
			</View>

			<FlatList
				ListHeaderComponent={() => <View style={{ height: 12 }} />}
				data={mockLocations}
				keyExtractor={(location, idx) => `location_${idx}`}
				renderItem={({ item: location }) => (
					<Location
						location={location.location}
						onPress={() => {
							props.setDestinationLocation(location.location);
							props.navigation.pop();
						}}
					/>
				)}
				ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
				ListFooterComponent={() => <View style={{ height: 48 }} />}
			/>
		</View>
	);
};

const mapStateToProps = ({ hotelsQuery: { destination } }) => ({
	destination
});

export default connect(mapStateToProps, { setDestinationLocation })(HotelQueryDestination);
