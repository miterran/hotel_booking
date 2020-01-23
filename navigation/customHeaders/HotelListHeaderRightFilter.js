import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { withNavigation } from 'react-navigation';

const HotelListHeaderRightFilter = (props) => (
	<TouchableOpacity
		style={{ marginRight: 18, marginLeft: 18 }}
		onPress={() => props.navigation.navigate('HotelQueryFilter')}
	>
		<FontAwesome name="tasks" color={Colors.white} size={22} />
	</TouchableOpacity>
);

export default withNavigation(HotelListHeaderRightFilter);
