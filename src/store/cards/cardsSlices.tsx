import { createSlice } from '@reduxjs/toolkit';

let initialState = {
	colors: ['#123abc'],
	loading: false,
};

export const cardSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		setColors(state, { payload }) {
			state.colors = payload;
		},
		resetCardSlice(state) {
			Object.assign(state, initialState);
		},
	},
});

export const { setColors, resetCardSlice } = cardSlice.actions;
