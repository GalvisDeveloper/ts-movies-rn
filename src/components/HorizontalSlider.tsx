import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native';
import CardMovie from './CardMovie';

interface Props {
	title?: string;
	movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
	
	return (
		<View style={{ height: title ? 260 : 230 }}>
			{title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>}

			<FlatList
				data={movies}
				renderItem={({ item }: any) => <CardMovie movie={item} height={200} width={140} />}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default HorizontalSlider;
