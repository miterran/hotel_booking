import React, { useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
import { setUserLogout } from '../redux/actions/handleAuth';
import SigninRequired from '../containers/SigninRequired';
import { FontAwesome } from '@expo/vector-icons';

const RowBetween = ({ children }) => <View style={styles.rowBetween}>{children}</View>;

const Head = ({ title }) => (
	<RowBetween>
		<Text style={styles.headTitle}>{title}</Text>
		<Text style={styles.headEnd}>
			{
				//<FontAwesome name="chevron-right" size={20} color={Colors.cloud} />
			}
		</Text>
	</RowBetween>
);

const Item = ({ title, content }) => (
	<RowBetween>
		<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{title}</Text>
		<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{content}</Text>
	</RowBetween>
);

const ItemButton = ({ title }) => (
	<RowBetween>
		<Text style={{ color: Colors.light_elephant, fontSize: 16 }}>{title}</Text>
		<FontAwesome name="chevron-right" size={20} color={Colors.cloud} />
	</RowBetween>
);

const Section = ({ children }) => <View style={styles.sectionContainer}>{children}</View>;

const User = (props) => {
	if (!props.user.email) return <SigninRequired title="Sign in to view your account." />;

	return (
		<View style={{ flex: 1, backgroundColor: Colors.cloud }}>
			<ScrollView>
				<Section>
					<Head title="Account" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="First Name" content={props.user.firstName} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Last Name" content={props.user.lastName} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Email" content={props.user.email} />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Language" content="English" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<Item title="Currency" content="USD" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
				</Section>
				<View style={{ height: 12, backgroundColor: Colors.cloud }} />
				<Section>
					<Head title="Communicate" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<ItemButton title="Rate the app" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<ItemButton title="Tell a friend" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
				</Section>
				<View style={{ height: 12, backgroundColor: Colors.cloud }} />
				<Section>
					<Head title="Legal" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<ItemButton title="Clear private date" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<ItemButton title="Terms and conditions" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<ItemButton title="Privacy policy" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
					<ItemButton title="Acknowledgements" />
					<View style={{ height: 1, backgroundColor: Colors.cloud }} />
				</Section>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		backgroundColor: Colors.white,
		flexDirection: 'column',
		padding: 12
	},
	rowBetween: {
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
	}
});

const mapStateToProps = ({ user }) => ({
	user
});

export default connect(mapStateToProps, { setUserLogout })(User);
