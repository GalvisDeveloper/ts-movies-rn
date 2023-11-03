import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StackNavigator />
				{/* <FadeScreen /> */}
			</NavigationContainer>
		</Provider>
	);
};

export default App;
