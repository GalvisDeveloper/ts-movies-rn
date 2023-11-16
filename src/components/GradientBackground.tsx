import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useCardSelector from '../hooks/selectors/useCardSelector';
import { useEffect } from 'react';
import useFade from '../hooks/useFade';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
	const { colors, prevColors, updatePrevColor } = useCardSelector();

	const { opacity, fadeIn, fadeOut } = useFade({ initialOpacity: 0.5, timing: 250 });

	useEffect(() => {
		fadeIn(() => {
			updatePrevColor(colors);
			fadeOut();
		});
	}, [colors]);

	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={[prevColors.primary, prevColors.secondary, 'white']}
				style={{ ...StyleSheet.absoluteFillObject }}
				start={{ x: 0.1, y: 0.1 }}
				end={{ x: 0.5, y: 0.5 }}
			/>

			<Animated.View
				style={{
					...StyleSheet.absoluteFillObject,
					opacity,
				}}
			>
				<LinearGradient
					colors={[colors.primary, colors.secondary, 'white']}
					style={{ ...StyleSheet.absoluteFillObject }}
					start={{ x: 0.1, y: 0.1 }}
					end={{ x: 0.5, y: 0.5 }}
				/>
			</Animated.View>
			{children}
		</View>
	);
};

export default GradientBackground;
