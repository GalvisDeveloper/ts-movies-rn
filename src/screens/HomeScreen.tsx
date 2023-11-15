import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, View, Button } from 'react-native';
import ImageColors from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import CardMovie from '../components/CardMovie';
import GradientBackground from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';
import { getImageColors } from '../helpers/getColors';
import useCardSelector from '../hooks/selectors/useCardSelector';
import useMovies from '../hooks/useMovies';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';

const { width: screenX } = Dimensions.get('window');

const HomeScreen = () => {
	const navigation = useNavigation<StackNavigationProp<any, any>>();

	const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

	const { colors, updateColor } = useCardSelector();

	console.log(colors);

	const getCardColors = async (index: number) => {
		const movie = nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
		const colors = await ImageColors.getColors(uri, {
			key: uri,
		});

		// console.log(colors);

		const [primary, secondary] = await getImageColors(uri);

		console.log({ primary, secondary });
	};

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color='red' size={100} />
			</View>
		);
	}

	return (
		<GradientBackground>
			<ScrollView>
				<View style={styles.globalMargin}>
					<Text style={styles.title}>HomeScreen</Text>

					{/* Main Carousel  */}
					{nowPlaying.length > 0 && (
						<View style={styles.carouselCt}>
							<Carousel
								data={nowPlaying}
								renderItem={({ item }: { item: Movie }) => <CardMovie movie={item} />}
								sliderWidth={screenX}
								itemWidth={300}
								inactiveSlideOpacity={0.9}
								onSnapToItem={(index) => getCardColors(index)}
							/>
						</View>
					)}

					{/* Popular Movies */}
					<HorizontalSlider title='Popular Movies' movies={popular} />

					{/* Top rated */}
					<HorizontalSlider title='Top Rated' movies={topRated} />

					{/* Upcoming */}
					<HorizontalSlider title='Upcoming' movies={upcoming} />

					{/* <Button onPress={() => updateColor(data)} title='tesst' /> */}
				</View>
			</ScrollView>
		</GradientBackground>
	);
};

export default HomeScreen;
