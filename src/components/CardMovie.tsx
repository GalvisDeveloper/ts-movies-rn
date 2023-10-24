import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
	movie: Movie;
	height?: number;
	width?: number;
}

const CardMovie = ({ movie, height = 420, width = 300 }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<View style={{ ...styles.container, width, height }}>
			<Image source={{ uri }} style={styles.image} />
		</View>
	);
};

export default CardMovie;

const styles = StyleSheet.create({
	image: {
		flex: 1,
		borderRadius: 20,
		margin: 6,
	},
	container: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,
	},
});
