import React from 'react';
import { View, Text } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient colors={[colors.primary, colors.tertiary, colors.white]}>
                {children}
            </LinearGradient>
		</View>
	);
};

export default GradientBackground;
