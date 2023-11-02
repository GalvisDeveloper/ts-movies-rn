import { useRef } from 'react';
import { Animated } from 'react-native';

interface Props {
	initialOpacity?: number;
}

const useFade = ({ initialOpacity = 0.3 }: Props) => {
	const opacity = useRef(new Animated.Value(initialOpacity)).current;

	const fadeIn = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		Animated.timing(opacity, {
			toValue: initialOpacity,
			duration: 1000,
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
