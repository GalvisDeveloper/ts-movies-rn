import axios from 'axios';

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: '7a6b599e3a26fa9d3c6587278edb1870',
		language: 'en-ES',
	},
});

export default movieDB;
