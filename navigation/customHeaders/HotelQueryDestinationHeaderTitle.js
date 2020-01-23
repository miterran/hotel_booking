import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';

const HotelQueryDestinationHeaderTitle = (props) => (
	<Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold' }}>Enter Destination</Text>
);
const mapStateToProps = ({ hotelsQuery: { destination } }) => ({
	destination
});

export default connect(mapStateToProps, null)(HotelQueryDestinationHeaderTitle);
