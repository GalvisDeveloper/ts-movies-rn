import { useDispatch, useSelector } from 'react-redux';
import { setColors } from '../../store/cards/cardsSlice';

const useCardSelector = () => {

	const dispatch = useDispatch();

	const { colors } = useSelector((state: any) => state.cards);

	const updateColor = (color: string) => {
		dispatch(setColors(color));
	 }

	return {
		//states
		colors,

		//functions
		updateColor,
	};
};

export default useCardSelector;
