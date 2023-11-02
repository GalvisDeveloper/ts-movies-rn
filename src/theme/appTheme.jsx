import { StyleSheet } from 'react-native';

export const colors = {
	primary: '#5856D6',
	secondary: '#FF9427',
	tertiary: '#1c95c5',
	white: '#FFFFFF',
	black: '#000000',
	gray: '#9B9B9B',
	yellow: '#E1F00F',
	blue: '#2C70C9',
};

export const styles = StyleSheet.create({
	globalMargin: {
		marginTop: 20,
	},
	background: {
		flex: 1,
	},
	text: {
		color: 'black',
		fontSize: 20,
	},
	title: {
		color: 'black',
		fontSize: 30,
		marginBottom: 10,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	bigBtn: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bigBtnText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	avatar: {
		marginTop: 10,
		alignSelf: 'center',
		borderRadius: 100,
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center',
		width: 150,
		height: 150,
		backgroundColor: 'blue',
	},
	menuCt: {
		marginVertical: 30,
		alignItems: 'center',
		gap: 10,
	},
	menuText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	bigIcon: {
		fontSize: 90,
		color: colors.blue,
	},
	icon: {
		fontSize: 20,
		color: colors.blue,
	},
	carouselCt: {
		height: 440,
	},
});
