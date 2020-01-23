import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import AppNavigator from './navigation';
// import wallpapers from './assets/images/wallpapers';
import cities from './assets/images/cities';
import hotels from './assets/images/hotels';
import suites from './assets/images/suites';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux';

import _ from 'lodash';

const init = async () => {
	return null;
};

const App = (props) => {
	const [ isLoadingComplete, setLoadingComplete ] = useState(false);
	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				<AppLoading
					startAsync={loadResourcesAsync}
					onError={handleLoadingError}
					onFinish={() => handleFinishLoading(setLoadingComplete)}
				/>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}

				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<AppNavigator />
					</PersistGate>
				</Provider>
			</View>
		);
	}
};

const loadResourcesAsync = async () => {
	await init();
	await Promise.all([
		Asset.loadAsync(_.values(cities)),
		Asset.loadAsync(_.values(hotels)),
		Asset.loadAsync(_.values(suites)),
		Font.loadAsync({
			...FontAwesome.font,
			...MaterialIcons.font,
			robotoL: require('./assets/fonts/Roboto-Light.ttf'),
			robotoR: require('./assets/fonts/Roboto-Regular.ttf'),
			robotoM: require('./assets/fonts/Roboto-Medium.ttf'),
			robotoB: require('./assets/fonts/Roboto-Bold.ttf'),
			robotoK: require('./assets/fonts/Roboto-Black.ttf'),
			'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
		})
	]);
};

const handleLoadingError = (error) => {
	console.warn(error);
};

const handleFinishLoading = (setLoadingComplete) => {
	setLoadingComplete(true);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});

export default App;
