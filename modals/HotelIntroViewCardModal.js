import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import hotelsImg from '../assets/images/hotels';
import { HotelIntroViewCard } from '../components/HotelIntro';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const HotelIntroViewCardModal = (props) => {
	const [ hotel, setHotel ] = useState(props.hotels[props.hotelID]);
	useEffect(() => setHotel(props.hotels[props.hotelID]), [ props.hotelID ]);
	return (
		<Modal animationType="slide" transparent={true} visible={props.visible}>
			<TouchableOpacity style={{ flex: 1 }} onPress={() => props.onClose()} />
			<SafeAreaView style={{ marginBottom: 32 }}>
				<HotelIntroViewCard
					hotelID={hotel.ID}
					img={hotelsImg[hotel.coverImg]}
					isTKHotel={hotel.isTKHotel}
					stars={hotel.stars}
					name={hotel.name}
					location={hotel.location}
					reviews={hotel.reviews}
					guestScore={hotel.guestScore}
					orgPrice={hotel.orgPrice}
					salePrice={hotel.salePrice}
					onView={() => {
						props.onClose();
						props.navigation.navigate('HotelView', { hotelID: hotel.ID });
					}}
				/>
			</SafeAreaView>
		</Modal>
	);
};

const mapStateToProps = ({ hotels }) => ({ hotels });

export default connect(mapStateToProps, null)(withNavigation(HotelIntroViewCardModal));
