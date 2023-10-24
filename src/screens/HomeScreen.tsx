import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import CardMovie from '../components/CardMovie';
import useMovies from '../hooks/useMovies';
import { styles } from '../theme/appTheme';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: screenX } = Dimensions.get('window');

const HomeScreen = () => {
	const navigation = useNavigation<StackNavigationProp<any, any>>();

	const { nowPlaying, isLoading } = useMovies();

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color='red' size={100} />
			</View>
		);
	}

	return (
		<ScrollView>
			<View style={styles.globalMargin}>
				<Text style={styles.title}>HomeScreen</Text>

				{/* Main Carousel  */}
				{nowPlaying.length > 0 && (
					<View style={styles.carouselCt}>
						<Carousel
							data={nowPlaying}
							renderItem={({ item }: any) => <CardMovie movie={item} />}
							sliderWidth={screenX}
							itemWidth={300}
							inactiveSlideOpacity={0.9}
						/>
					</View>
				)}

				{/* Popular Movies */}
				<HorizontalSlider title='Popular movies' movies={nowPlaying} />
				<HorizontalSlider title='In theaters' movies={nowPlaying} />
				<HorizontalSlider title='Favorites' movies={nowPlaying} />

				<Button title='Go to Detail' onPress={() => navigation.navigate('Detail')} />
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
