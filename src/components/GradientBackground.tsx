import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../theme/appTheme';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={[colors.primary, colors.tertiary, colors.softBlue]}
				style={{ ...StyleSheet.absoluteFillObject }}
				start={{ x: 0.1, y: 0.1 }}
				end={{ x: 0.5, y: 0.5 }}
			/>
			{children}
		</View>
	);
};

export default GradientBackground;
