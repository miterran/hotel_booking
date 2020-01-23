import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, Slider, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {
	setFilterPricePerNightMax,
	setFilterSortBy,
	selectFilterHotelStars,
	setFilterGuestScoreAbove,
	selectFilterAmenity,
	resetFilter
} from '../redux/actions/handleHotelsQuery';
import BottomConfirmButton from '../components/BottomConfirmButton';
import update from 'immutability-helper';

const Row = ({ children, marginTop = 12 }) => <View style={[ styles.row, { marginTop } ]}>{children}</View>;

const Head = ({ title, end }) => (
	<Row>
		<Text style={styles.headTitle}>{title}</Text>
		<Text style={styles.headEnd}>{end}</Text>
	</Row>
);

const Amenity = ({ icon, title, isSelected, onPress }) => (
	<TouchableOpacity
		style={[ styles.amenity, { borderColor: isSelected ? Colors.theme : Colors.cloud } ]}
		onPress={onPress}
	>
		<MaterialIcons name={icon} size={24} color={isSelected ? Colors.theme : Colors.silver} />
		<Text style={{ fontSize: 8, color: isSelected ? Colors.theme : Colors.silver }}>{title}</Text>
	</TouchableOpacity>
);

const HotelStars = ({ stars, isSelected, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<Row>
			<View style={{ flexDirection: 'row' }}>
				{new Array(stars).fill(0).map((x, i) => {
					return <FontAwesome key={`star_${stars}_${i}`} name="star" size={24} color={Colors.theme} />;
				})}
			</View>
			<FontAwesome
				name={isSelected ? 'check-square' : 'square-o'}
				size={24}
				color={isSelected ? Colors.theme : Colors.silver}
			/>
		</Row>
	</TouchableOpacity>
);

const Sort = ({ title, isSelected, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<Row>
			<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{title}</Text>
			<FontAwesome
				name={isSelected ? 'dot-circle-o' : 'circle-thin'}
				size={24}
				color={isSelected ? Colors.theme : Colors.silver}
			/>
		</Row>
	</TouchableOpacity>
);

const HotelQueryFilter = (props) => {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.cloud }}>
			<ScrollView>
				<View style={{ height: 0 }} />
				<View style={styles.sectionContainer}>
					<Head title="Hotel Name Contains" />
					<TextInput
						style={styles.input}
						placeholder="Hotel..."
						onChangeText={(text) => null}
						// value={props.filter.hotelNameContains}
					/>
				</View>

				<View style={{ height: 12 }} />
				<View style={styles.sectionContainer}>
					<Head
						title="Price Per Night Max"
						end={props.filter.pricePerNightMax >= 1000 ? 'Unlimited' : props.filter.pricePerNightMax}
					/>
					<Slider
						step={10}
						minimumValue={50}
						maximumValue={1000}
						value={props.filter.pricePerNightMax}
						onValueChange={(value) => props.setFilterPricePerNightMax(value)}
						minimumTrackTintColor={Colors.theme}
						maximumTrackTintColor={Colors.silver}
					/>
				</View>

				<View style={{ height: 12 }} />
				<View style={styles.sectionContainer}>
					<Head title="Sort By" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Sort
						title="Distance"
						isSelected={props.filter.sortBy == 'distance'}
						onPress={() => props.setFilterSortBy('distance')}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Sort
						title="Price"
						isSelected={props.filter.sortBy == 'price'}
						onPress={() => props.setFilterSortBy('price')}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Sort
						title="Score"
						isSelected={props.filter.sortBy == 'score'}
						onPress={() => props.setFilterSortBy('score')}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Sort
						title="Review"
						isSelected={props.filter.sortBy == 'review'}
						onPress={() => props.setFilterSortBy('review')}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
				</View>
				<View style={{ height: 12 }} />
				<View style={styles.sectionContainer}>
					<Head title="Hotel Stars" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<HotelStars
						stars={1}
						isSelected={props.filter.hotelStars[1]}
						onPress={() => props.selectFilterHotelStars(1)}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<HotelStars
						stars={2}
						isSelected={props.filter.hotelStars[2]}
						onPress={() => props.selectFilterHotelStars(2)}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<HotelStars
						stars={3}
						isSelected={props.filter.hotelStars[3]}
						onPress={() => props.selectFilterHotelStars(3)}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<HotelStars
						stars={4}
						isSelected={props.filter.hotelStars[4]}
						onPress={() => props.selectFilterHotelStars(4)}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<HotelStars
						stars={5}
						isSelected={props.filter.hotelStars[5]}
						onPress={() => props.selectFilterHotelStars(5)}
					/>
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
				</View>

				<View style={{ height: 12 }} />
				<View style={styles.sectionContainer}>
					<Head title="Guest Score Aboves" end={props.filter.guestScoreAbove} />
					<Slider
						step={1}
						minimumValue={0}
						maximumValue={9}
						value={props.filter.guestScoreAbove}
						onValueChange={(value) => props.setFilterGuestScoreAbove(value)}
						minimumTrackTintColor={Colors.silver}
						maximumTrackTintColor={Colors.theme}
					/>
				</View>

				<View style={{ height: 12 }} />
				<View style={styles.sectionContainer}>
					<Head title="Amenities" />
					<Row marginTop={0}>
						<Amenity
							icon="local-parking"
							title="Free Parking"
							isSelected={props.filter.amenities.freeParking}
							onPress={() => props.selectFilterAmenity('freeParking')}
						/>
						<View style={{ width: 12 }} />
						<Amenity
							icon="free-breakfast"
							title="Free Breakfast"
							isSelected={props.filter.amenities.freeBreakfast}
							onPress={() => props.selectFilterAmenity('freeBreakfast')}
						/>
						<View style={{ width: 12 }} />
						<Amenity
							icon="pets"
							title="Pets Allowed"
							isSelected={props.filter.amenities.petsAllowed}
							onPress={() => props.selectFilterAmenity('petsAllowed')}
						/>
						<View style={{ width: 12 }} />
						<Amenity
							icon="fitness-center"
							title="Fitness Center"
							isSelected={props.filter.amenities.fitnessCenter}
							onPress={() => props.selectFilterAmenity('fitnessCenter')}
						/>
					</Row>

					<Row marginTop={0}>
						<Amenity
							icon="restaurant"
							title="Restaurant"
							isSelected={props.filter.amenities.restaurant}
							onPress={() => props.selectFilterAmenity('restaurant')}
						/>
						<View style={{ width: 12 }} />
						<Amenity
							icon="pool"
							title="Pool"
							isSelected={props.filter.amenities.pool}
							onPress={() => props.selectFilterAmenity('pool')}
						/>
						<View style={{ width: 12 }} />
						<Amenity
							icon="accessible"
							title="Accessible"
							isSelected={props.filter.amenities.handicapAccessible}
							onPress={() => props.selectFilterAmenity('handicapAccessible')}
						/>
						<View style={{ width: 12 }} />
						<Amenity
							icon="wifi"
							title="Free Internet"
							isSelected={props.filter.amenities.freeWifi}
							onPress={() => props.selectFilterAmenity('freeWifi')}
						/>
					</Row>
				</View>

				<View style={{ height: 48 }} />
			</ScrollView>
			<BottomConfirmButton
				onPress={() => {
					props.navigation.pop();
				}}
				title="Apply"
				disabled={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		backgroundColor: Colors.white,
		flexDirection: 'column',
		//borderRadius: 12,
		//marginLeft: 12,
		//marginRight: 12,
		padding: 12
	},
	input: {
		padding: 12,
		flex: 1,
		fontSize: 16,
		color: Colors.light_elephant,
		borderWidth: 1,
		borderColor: Colors.cloud,
		borderRadius: 12
	},
	row: {
		width: '100%',
		marginTop: 12,
		marginBottom: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	headTitle: {
		flex: 1,
		color: Colors.dark_elephant,
		fontSize: 18,
		fontWeight: 'bold'
	},
	headEnd: {
		fontSize: 18,
		color: Colors.theme,
		fontWeight: 'bold'
	},
	amenity: {
		flex: 1,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 6,
		padding: 6
	}
});

const mapStateToProps = ({ hotelsQuery: { filter } }) => ({
	filter
});

export default connect(mapStateToProps, {
	setFilterPricePerNightMax,
	setFilterSortBy,
	selectFilterHotelStars,
	setFilterGuestScoreAbove,
	selectFilterAmenity,
	resetFilter
})(HotelQueryFilter);
