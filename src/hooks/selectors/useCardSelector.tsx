import { useDispatch, useSelector } from 'react-redux';
import { setColors, setPrevColors } from '../../store/cards/cardsSlice';
import { getImageColors } from '../../helpers/getColors';
import { Movie } from '../../interfaces/movieInterface';

const useCardSelector = () => {
	const dispatch = useDispatch();

	const { colors, prevColors } = useSelector((state: any) => state.cards);

	const updateColor = (color: object) => {
		dispatch(setColors(color));
	};

	const updatePrevColor = (color: object) => {
		dispatch(setPrevColors(color));
	};

	const getCardColors = async (movies: Movie[], index: number) => {
		const movieItem = movies[index];
		const uri = `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`;

		const [primary, secondary] = await getImageColors(uri);

		updateColor({ primary, secondary });
	};

	return {
		//states
		colors,
		prevColors,

		//functions
		updateColor,
		updatePrevColor,

		getCardColors,
	};
};

export default useCardSelector;
