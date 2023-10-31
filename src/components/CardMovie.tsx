import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
	movie: Movie;
	height?: number;
	width?: number;
}

const CardMovie = ({ movie, height = 420, width = 300 }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	const navigation = useNavigation<StackNavigationProp<any, any>>();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Detail', movie)}
			activeOpacity={0.8}
			style={{
				width,
				height,
				...styles.container,
			}}
		>
			<Image source={{ uri }} style={styles.image} />
		</TouchableOpacity>
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
