import React from 'react';
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';

const LoadingModal = ({ visible }) => (
	<Modal transparent={true} visible={visible}>
		<View style={styles.container}>
			<ActivityIndicator size="large" color="white" />
		</View>
	</Modal>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: 'rgba(50, 50, 50, 0.5)'
	}
});

export default LoadingModal;
