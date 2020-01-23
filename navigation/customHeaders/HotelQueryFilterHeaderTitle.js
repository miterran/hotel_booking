import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';

const HotelQueryFilterHeaderTitle = (props) => (
	<Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold' }}>Filter</Text>
);

export default HotelQueryFilterHeaderTitle;
