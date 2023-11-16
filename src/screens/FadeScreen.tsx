import React from 'react';
import { Animated, Button, Text, View } from 'react-native';
import useFade from '../hooks/useFade';
import { colors } from '../theme/appTheme';

const FadeScreen = () => {
	const { opacity, fadeIn, fadeOut } = useFade({ initialOpacity: 0.7 });

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', flex: 1 }}>
			<Animated.View
				style={{
					width: 150,
					height: 150,
					backgroundColor: colors.primary,
					borderWidth: 10,
					borderColor: 'white',
					opacity,
				}}
			>
				<Text>FadeScreen</Text>
			</Animated.View>

			<Button onPress={() => fadeIn()} title='Animate' />
			<Button onPress={fadeOut} title='Unanimate' />
		</View>
	);
};

export default FadeScreen;
