import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {
	addGuestsRoom,
	removeGuestsRoom,
	addGuestsRoomAdultsQty,
	subtractGuestsRoomAdultsQty,
	addGuestsRoomChildrenQty,
	subtractGuestsRoomChildrenQty,
	resetGuests
} from '../redux/actions/handleHotelsQuery';
import BottomConfirmButton from '../components/BottomConfirmButton';

const genGuestsPlaceholder = (roomsQty, adultsQty, childrenQty) => {
	return `${roomsQty} Room${roomsQty > 1 ? 's' : ''} - ${adultsQty} Adult${adultsQty > 1 ? 's' : ''}${childrenQty > 0
		? ` - ${childrenQty} Child${childrenQty > 1 ? 'ren' : ''}`
		: ''}`;
};

const Row = ({ children }) => (
	<View style={{ marginTop: 12, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>{children}</View>
);

const Room = ({
	title,
	adultsQty,
	childrenQty,
	onAdultsQtyAdd,
	onAdultsQtySubtract,
	onChildrenQtyAdd,
	onChildrenQtySubtract,
	onRemove
}) => (
	<View style={styles.room}>
		<Row>
			<Text style={{ flex: 1, color: Colors.dark_elephant, fontSize: 21, fontWeight: 'bold' }}>{title}</Text>
			<TouchableOpacity onPress={onRemove}>
				<FontAwesome style={{ marginRight: 6 }} name={'minus-circle'} color={Colors.cloud} size={24} />
			</TouchableOpacity>
		</Row>

		<View style={{ height: 1, backgroundColor: Colors.cloud }} />

		<Row>
			<Text style={{ color: Colors.light_elephant, fontSize: 16, flex: 1 }}>Adults</Text>
			<TouchableOpacity onPress={onAdultsQtySubtract}>
				<FontAwesome name={'minus-circle'} color={Colors.cloud} size={24} />
			</TouchableOpacity>

			<Text style={styles.guestsQty}>{adultsQty}</Text>

			<TouchableOpacity onPress={onAdultsQtyAdd}>
				<FontAwesome style={{ marginRight: 6 }} name={'plus-circle'} color={Colors.cloud} size={24} />
			</TouchableOpacity>
		</Row>

		<View style={{ height: 1, backgroundColor: Colors.cloud }} />

		<Row>
			<Text style={{ color: Colors.light_elephant, fontSize: 16, flex: 1 }}>
				Children <Text style={{ fontSize: 12 }}>(age 0 - 17)</Text>
			</Text>
			<TouchableOpacity onPress={onChildrenQtySubtract}>
				<FontAwesome name={'minus-circle'} color={Colors.cloud} size={24} />
			</TouchableOpacity>
			<Text style={styles.guestsQty}>{childrenQty}</Text>
			<TouchableOpacity onPress={onChildrenQtyAdd}>
				<FontAwesome style={{ marginRight: 6 }} name={'plus-circle'} color={Colors.cloud} size={24} />
			</TouchableOpacity>
		</Row>
	</View>
);

const HotelQueryGuests = (props) => (
	<View style={{ flex: 1, backgroundColor: Colors.cloud }}>
		<FlatList
			data={props.guests.rooms}
			keyExtractor={(room, index) => `guest_room_${index}`}
			ListHeaderComponent={() => <View style={{ height: 12 }} />}
			ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
			renderItem={({ item: room, index }) => (
				<Room
					title={`Room ${index + 1}`}
					adultsQty={room.adultsQty}
					childrenQty={room.childrenQty}
					onAdultsQtyAdd={() => props.addGuestsRoomAdultsQty(index)}
					onAdultsQtySubtract={() => props.subtractGuestsRoomAdultsQty(index)}
					onChildrenQtyAdd={() => props.addGuestsRoomChildrenQty(index)}
					onChildrenQtySubtract={() => props.subtractGuestsRoomChildrenQty(index)}
					onRemove={() => props.removeGuestsRoom(index)}
				/>
			)}
			ListFooterComponent={() => <View style={{ height: 48 }} />}
		/>
		<BottomConfirmButton onPress={() => props.navigation.pop()} title="Apply" disabled={false} />
	</View>
);

const styles = StyleSheet.create({
	room: {
		flexDirection: 'column',
		borderRadius: 6,
		marginLeft: 12,
		marginRight: 12,
		padding: 12,
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.cloud
	},
	guestsQty: {
		color: Colors.light_elephant,
		fontWeight: 'bold',
		fontSize: 16,
		width: 60,
		textAlign: 'center'
	}
});

const mapStateToProps = ({ hotelsQuery: { guests } }) => ({
	guests
});

export default connect(mapStateToProps, {
	addGuestsRoom,
	removeGuestsRoom,
	addGuestsRoomAdultsQty,
	subtractGuestsRoomAdultsQty,
	addGuestsRoomChildrenQty,
	subtractGuestsRoomChildrenQty,
	resetGuests
})(HotelQueryGuests);
