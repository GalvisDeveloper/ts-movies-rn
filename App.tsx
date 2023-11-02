import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
	return (
		<NavigationContainer>
			<StackNavigator />
			{/* <FadeScreen /> */}
		</NavigationContainer>
	);
};

export default App;
