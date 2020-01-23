import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import wallpapers from '../assets/images/wallpapers';
import Colors from '../constants/Colors';

const reviews = [
	{
		ID: '01',
		firstName: 'Wendy',
		date: 'May 28, 2019',
		score: 9.2,
		comment: 'Great location. We enjoyed our stay.'
	},
	{
		ID: '02',
		firstName: 'Douglas',
		date: 'May 9, 2019',
		score: 7.1,
		comment: 'The room was spacious and on a high floor which eliminated some of the street noise.'
	},
	{
		ID: '03',
		firstName: 'Leonard',
		date: 'May 1, 2019',
		score: 8.3,
		comment: 'Size of room and bathroom. Location nice but lots of homeless right outside of entrances.'
	},
	{
		ID: '04',
		firstName: 'Tammy',
		date: 'Apr 22, 2019',
		score: 5.7,
		comment: 'The location was great!'
	},
	{
		ID: '05',
		firstName: 'Janene',
		date: 'Mar 25, 2019',
		score: 7.5,
		comment: 'Constant upselling to rooms that are identical to what you paid for in original reservation.'
	}
];

const Title = ({ text, content, style }) => (
	<View style={style}>
		<Text
			style={{
				fontWeight: 'bold',
				color: Colors.dark_elephant,
				fontSize: 16
			}}
		>
			{text}
		</Text>
		<Text
			style={{
				color: Colors.light_elephant,
				fontSize: 12
			}}
		>
			{content}
		</Text>
	</View>
);

const Circle = ({ avgScore }) => (
	<View style={{ flexDirection: 'row', alignItems: 'center' }}>
		<View
			style={{
				height: 48,
				width: 48,
				borderRadius: 24,
				backgroundColor: Colors.dark_green,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold' }}>{avgScore.toFixed(1)}</Text>
		</View>
		<Title style={{ margin: 12 }} text="Guest Score" content="Base on a scale of 10" />
	</View>
);

const Review = ({ score, firstName, date, comment }) => (
	<View style={{ margin: 12 }}>
		<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
			<Text style={{ fontWeight: 'bold', color: Colors.theme, width: 48, fontSize: 16, textAlign: 'center' }}>
				{score.toFixed(1)}
			</Text>
			<View style={{ width: 12 }} />
			<Text style={{ color: Colors.light_elephant }}>{firstName}</Text>
			<Text style={{ color: Colors.light_elephant, textAlign: 'right', flex: 1 }}>{date}</Text>
		</View>
		<View style={{ height: 12 }} />
		<Text style={{ color: Colors.light_elephant, marginLeft: 60 }}>{comment}</Text>
	</View>
);

const HotelViewReviews = () => (
	<View style={{ flex: 1, backgroundColor: Colors.white, flexDirection: 'column' }}>
		<FlatList
			data={reviews}
			keyExtractor={(review) => review.ID}
			ListHeaderComponent={() => (
				<View>
					<View style={{ margin: 12 }}>
						<Circle avgScore={9.0} />
						<View style={{ flexDirection: 'column' }}>
							<View
								style={{
									paddingLeft: 60,
									width: '100%',
									flexDirection: 'row',
									alignContent: 'space-around'
								}}
							>
								<Title style={{ flex: 1 }} text={'9.0'} content="Service" />
								<Title style={{ flex: 1 }} text={'7.3'} content="Cleanliness" />
								<Title style={{ flex: 1 }} text={'8.0'} content="Comfort" />
								<Title style={{ flex: 1 }} text={'8.5'} content="Condition" />
							</View>
							<View style={{ height: 12 }} />
							<Title style={{ marginLeft: 60 }} text={388} content="Verified guest reviews" />
						</View>
					</View>

					<View style={{ height: 1, marginLeft: 12, marginRight: 12, backgroundColor: Colors.cloud }} />
				</View>
			)}
			renderItem={({ item: review, index }) => (
				<Review score={review.score} firstName={review.firstName} date={review.date} comment={review.comment} />
			)}
			ItemSeparatorComponent={() => (
				<View style={{ height: 1, marginLeft: 12, marginRight: 12, backgroundColor: Colors.cloud }} />
			)}
			ListFooterComponent={() => <View style={{ height: 48 }} />}
		/>
	</View>
);

export default HotelViewReviews;
