import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';

interface MoviesState {
	nowPlaying: Movie[];
	popular: Movie[];
	topRated: Movie[];
	upcoming: Movie[];
}

const useMovies = () => {
	const [movies, setMovies] = useState<MoviesState>({
		nowPlaying: [],
		popular: [],
		topRated: [],
		upcoming: [],
	});

	const { nowPlaying, popular, topRated, upcoming } = movies;

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		nowPlayingMovies();
	}, []);

	const nowPlayingMovies = async () => {
		const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
		const popularPromise = movieDB.get<MovieDBResponse>('/popular');
		const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
		const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

		const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

		setMovies({
			...movies,
			nowPlaying: response[0].data.results,
			popular: response[1].data.results,
			topRated: response[2].data.results,
			upcoming: response[3].data.results,
		});

		setIsLoading(false);
	};

	return {
		//states
		nowPlaying,
		popular,
		topRated,
		upcoming,

		isLoading,

		//functions
	};
};

export default useMovies;
