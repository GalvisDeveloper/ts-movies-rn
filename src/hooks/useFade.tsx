import { useRef } from 'react';
import { Animated } from 'react-native';

interface Props {
	initialOpacity?: number;
	timing?: number;
	maxOpacity?: number;
}

const useFade = ({ initialOpacity = 0.3, timing = 1000, maxOpacity = 1 }: Props) => {
	const opacity = useRef(new Animated.Value(initialOpacity)).current;

	const fadeIn = (callback?: Function) => {
		Animated.timing(opacity, {
			toValue: maxOpacity,
			duration: timing,
			useNativeDriver: true,
		}).start(() => callback ? callback() : null);
	};

	const fadeOut = () => {
		Animated.timing(opacity, {
			toValue: initialOpacity,
			duration: timing,
			useNativeDriver: true,
		}).start();
	};

	return {
		opacity,
		fadeIn,
		fadeOut,
	};
};

export default useFade;
