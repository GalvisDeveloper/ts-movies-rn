import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
	actor: Cast;
}

const CastItem = ({ actor }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

	return (
		<View style={localStyles.container}>
			{actor.profile_path && <Image source={{ uri }} style={{ width: 50, height: 50, borderRadius: 10 }} />}

			<View>
				<Text style={{ ...styles.text, fontWeight: '600' }}>{actor.name}</Text>
				<Text style={styles.text}>{actor.character}</Text>
			</View>
		</View>
	);
};

export default CastItem;

const localStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 10,
		marginRight: 10,
		backgroundColor: '#dfdfdf',
		borderRadius: 10,
		padding: 5,
		shadowRadius: 10,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowColor: '#000',
	},
});
