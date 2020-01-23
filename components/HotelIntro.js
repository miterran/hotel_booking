import React, { useState, useMemo } from 'react';
import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	StyleSheet,
	Image
} from 'react-native';
import Colors from '../constants/Colors';
import suitesImg from '../assets/images/suites';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import _ from 'lodash';
import { connect } from 'react-redux';
import HotelSaveIconButton from '../containers/HotelSaveIconButton';
import HotelMapIconButton from '../containers/HotelMapIconButton';
import HotelShareIconButton from '../containers/HotelShareIconButton';
import HotelImagesDisplayIconButton from '../containers/HotelImagesDisplayIconButton';

const Card = ({ children }) => <View style={styles.card}>{children}</View>;

const RowBetween = ({ left, right }) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: '100%'
		}}
	>
		<View>{left}</View>
		<View>{right}</View>
	</View>
);

const HotelPhoto = ({ img, left, right }) => (
	<ImageBackground style={styles.photo} source={img}>
		<RowBetween left={left} right={right} />
	</ImageBackground>
);

const TKHotelLogo = ({ isTKHotel }) => {
	return <View />;
};

const Stars = ({ stars }) => {
	let arr = [];
	for (let i = 0; i < 5; i++) {
		if (stars >= 1) {
			arr.push('star');
			stars--;
			continue;
		}
		if (stars === 0.5) {
			arr.push('star-half');
			stars -= 0.5;
			continue;
		}
	}
	return (
		<View style={{ flexDirection: 'row' }}>
			{arr.map((name, i) => <FontAwesome key={`star_${i}`} name={name} size={12} color={Colors.theme} />)}
		</View>
	);
};

const Title = ({ name, content }) => (
	<View>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.content}>{content}</Text>
	</View>
);

const Reviews = ({ reviews }) => (
	<View style={{ flexDirection: 'row' }}>
		<Text style={{ color: Colors.light_elephant, fontSize: 12 }}>{'Reviews '}</Text>
		<Text style={{ color: Colors.light_yellow, fontSize: 12, fontWeight: 'bold' }}>{reviews}</Text>
	</View>
);

const GuestScore = ({ guestScore }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text style={{ color: Colors.light_elephant, fontSize: 12 }}>{'Guest score '}</Text>
			<Text style={{ color: Colors.light_green, fontSize: 12, fontWeight: 'bold' }}>{guestScore}</Text>
		</View>
	);
};

const Price = ({ orgPrice, salePrice }) => (
	<View style={{ alignItems: 'flex-end' }}>
		<Text style={{ fontWeight: 'bold', color: Colors.theme, fontSize: 12 }}>
			$<Text style={{ fontSize: 16 }}>{salePrice}</Text>
		</Text>
		<Text style={{ color: Colors.light_elephant, fontSize: 12 }}>
			{orgPrice > salePrice && (
				<Text
					style={{
						textDecorationLine: 'line-through',
						textDecorationStyle: 'solid',
						textDecorationColor: Colors.concrete
					}}
				>
					{`$${orgPrice}`}
				</Text>
			)}
			{` night`}
		</Text>
	</View>
);

const Button = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.button}>
		<Text style={{ color: Colors.theme, fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		overflow: 'hidden',
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.cloud
	},
	photo: {
		height: 180,
		resizeMode: 'cover',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	name: {
		fontWeight: 'bold',
		color: Colors.dark_elephant,
		fontSize: 16
	},
	content: {
		color: Colors.light_elephant,
		fontSize: 12
	},
	button: {
		minHeight: 32,
		width: 96,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: Colors.theme,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export const HotelIntroViewCard = ({
	hotelID,
	img,
	isTKHotel,
	stars,
	name,
	location,
	reviews,
	guestScore,
	orgPrice,
	salePrice,
	onView
}) => (
	<View style={{ marginLeft: 12, marginRight: 12 }}>
		<Card>
			<HotelPhoto
				img={img}
				left={<TKHotelLogo isTKHotel={isTKHotel} />}
				right={<HotelSaveIconButton style={{ margin: 12 }} hotelID={hotelID} />}
			/>
			<View style={{ margin: 12 }}>
				<Stars stars={stars} />
				<Title name={name} content={location} />
				<View style={{ height: 12 }} />
				<RowBetween
					left={
						<View>
							<GuestScore guestScore={guestScore} />
							<Reviews reviews={reviews} />
						</View>
					}
					right={
						<View style={{ flexDirection: 'row' }}>
							<Price orgPrice={orgPrice} salePrice={salePrice} />
							<View style={{ width: 12 }} />
							<Button onPress={onView} title={'View'} />
						</View>
					}
				/>
			</View>
		</Card>
	</View>
);

export const HotelIntroAbout = ({ hotelID, img, stars, name, location, reviews, guestScore }) => (
	<View>
		<HotelPhoto img={img} />
		<View style={{ margin: 12 }}>
			<Stars stars={stars} />
			<Title name={name} content={location} />
			<View style={{ height: 12 }} />
			<RowBetween
				left={
					<View>
						<GuestScore guestScore={guestScore} />
						<Reviews reviews={reviews} />
					</View>
				}
				right={
					<View style={{ flexDirection: 'row' }}>
						<HotelMapIconButton style={{ marginLeft: 9, marginRight: 9 }} hotelID={hotelID} />
						<HotelImagesDisplayIconButton />
						<HotelSaveIconButton style={{ marginLeft: 9, marginRight: 9 }} hotelID={hotelID} />
						<HotelShareIconButton hotelID={hotelID} />
					</View>
				}
			/>
		</View>
	</View>
);

export const HotelRoomIntroBookCard = ({ img, name, beds, salePrice, orgPrice, onBook }) => (
	<View style={{ marginLeft: 12, marginRight: 12 }}>
		<Card>
			<HotelPhoto img={img} />
			<View style={{ margin: 12 }}>
				<Title name={name} content={beds} />
				<View style={{ height: 12 }} />
				<RowBetween
					left={
						<View>
							<Text style={{ color: Colors.dark_red, fontSize: 12 }}>Non-Refundable</Text>
							<Text style={{ color: Colors.dark_orange, fontSize: 12 }}>We have 2 rooms left!</Text>
							<Text style={{ color: Colors.dark_green, fontSize: 12 }}>Free cancellation</Text>
							<Text style={{ color: Colors.light_elephant, fontSize: 12 }}>Before Jul, 13</Text>
						</View>
					}
					right={
						<View style={{ flexDirection: 'row' }}>
							<Price orgPrice={orgPrice} salePrice={salePrice} />
							<View style={{ width: 12 }} />
							<Button onPress={onBook} title={'Book'} />
						</View>
					}
				/>
			</View>
		</Card>
	</View>
);

export const HotelIntroBookingCard = ({ img, hotelName, locaion, roomName, beds, startDate, endDate, onView }) => (
	<View style={{ marginLeft: 12, marginRight: 12 }}>
		<Card>
			<HotelPhoto img={img} />
			<View style={{ margin: 12 }}>
				<Title name={hotelName} content={locaion} />
				<View style={{ height: 12 }} />
				<RowBetween
					left={
						<View>
							<Text style={{ color: Colors.light_elephant, fontSize: 12 }}>{roomName}</Text>
							<Text style={{ color: Colors.light_elephant, fontSize: 12 }}>{beds}</Text>
							<Text
								style={{ color: Colors.light_elephant, fontSize: 12 }}
							>{`Check-in ${startDate}`}</Text>
							<Text style={{ color: Colors.light_elephant, fontSize: 12 }}>{`Check-out ${endDate}`}</Text>
						</View>
					}
					right={
						<View style={{ flexDirection: 'row' }}>
							<Button onPress={onView} title={'View'} />
						</View>
					}
				/>
			</View>
		</Card>
	</View>
);
