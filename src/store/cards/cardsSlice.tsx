import { createSlice } from '@reduxjs/toolkit';

let initialState = {
	colors: {
		primary: 'transparent',
		secondary: 'transparent',
	},
	prevColors: {
		primary: 'transparent',
		secondary: 'transparent',
	},
};

export const cardSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		setColors(state, { payload }) {
			state.colors = {
				...state.colors,
				...payload,
			};
		},
		setPrevColors(state, { payload }) {
			state.prevColors = {
				...state.prevColors,
				...payload,
			};
		},
		resetCardSlice(state) {
			Object.assign(state, initialState);
		},
	},
});

export const { setColors, setPrevColors, resetCardSlice } = cardSlice.actions;
