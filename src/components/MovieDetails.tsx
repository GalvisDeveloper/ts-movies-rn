import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cast, FullInfoMovie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
	fullInfoMovie: FullInfoMovie;
	cast: Cast[];
}

const MovieDetails = ({ fullInfoMovie, cast }: Props) => {
	return (
		<View style={{ ...styles.globalMargin, gap: 20, marginBottom: 20 }}>
			{/* Details */}
			<View style={{ flexDirection: 'row' }}>
				<Icon name='star-outline' style={styles.icon} />
				<Text>{fullInfoMovie.vote_average}</Text>

				<Text style={{ marginLeft: 5 }}>{fullInfoMovie.genres.map((g) => g.name).join(', ')}</Text>
			</View>

			{/* History  */}
			<View>
				<Text style={{ ...styles.text, fontWeight: 'bold' }}>History</Text>
				<Text style={{ ...styles.text }}>{fullInfoMovie.overview}</Text>
			</View>

			{/* Budget  */}
			<View>
				<Text style={{ ...styles.text, fontWeight: 'bold' }}>Budget</Text>
				<Text style={{ ...styles.text }}>{currencyFormatter.format(fullInfoMovie.budget, { code: 'USD' })}</Text>
			</View>

			{/* Casting */}
			<View>
				<Text style={{ ...styles.text, fontWeight: 'bold' }}>Actors</Text>
				<FlatList
					data={cast}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <CastItem actor={item} />}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={{ marginTop: 10 }}
				/>
			</View>
		</View>
	);
};

export default MovieDetails;
