import { useDispatch, useSelector } from 'react-redux';
import { setColors, setPrevColors } from '../../store/cards/cardsSlice';

const useCardSelector = () => {
	const dispatch = useDispatch();

	const { colors } = useSelector((state: any) => state.cards);

	const updateColor = (color: object) => {
		dispatch(setColors(color));
	};

	const updatePrevColor = (color: object) => {
		dispatch(setPrevColors(color));
	};

	return {
		//states
		colors,

		//functions
		updateColor,
		updatePrevColor,
	};
};

export default useCardSelector;
