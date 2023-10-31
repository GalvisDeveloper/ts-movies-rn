import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import useMoviesDetails from '../hooks/useMoviesDetails';
import { colors, styles } from '../theme/appTheme';
import MovieDetails from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailScreen = ({ route }: Props) => {
	const movie = route.params;
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	const { cast, isLoading, fullInfoMovie } = useMoviesDetails(movie.id);

	const navigation = useNavigation<StackNavigationProp<any, any>>();

	return (
		<ScrollView>
			{/* Image Poster */}
			<View
				style={{
					...localStyles.container,
				}}
			>
				<View
					style={{
						...localStyles.imageBorder,
					}}
				>
					<Image source={{ uri }} style={localStyles.image} />
				</View>
			</View>

			{/* Title and subtitle  */}
			<View style={localStyles.marginCt}>
				<Text style={localStyles.title}>{movie.original_title}</Text>
				<Text style={localStyles.subTitle}>{movie.title}</Text>
			</View>

			{/* Details */}
			<View style={localStyles.marginCt}>
				{isLoading ? (
					<ActivityIndicator size={40} color='cyan' />
				) : (
					<MovieDetails fullInfoMovie={fullInfoMovie!} cast={cast} />
				)}
			</View>

			{/* Back button */}
			<View style={localStyles.backButton}>
				<TouchableOpacity onPress={() => navigation.pop()}>
					<Icon name='arrow-back' size={50} color={colors.primary} />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default DetailScreen;

const localStyles = StyleSheet.create({
	image: {
		flex: 1,
	},
	imageBorder: {
		borderBottomEndRadius: 20,
		borderBottomStartRadius: 20,
		overflow: 'hidden',
		flex: 1,
	},
	container: {
		height: screenHeight * 0.7,

		shadowColor: 'red',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,
		borderBottomEndRadius: 20,
		borderBottomStartRadius: 20,

		overflow: 'hidden',
	},
	marginCt: {
		margin: 10,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black',
	},
	subTitle: {
		fontSize: 16,
		color: 'black',
	},
	backButton: {
		position: 'absolute',
		zIndex: 999,
		margin: 5,
	},
});
