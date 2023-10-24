import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

const useMovies = () => {
	const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		nowPlayingMovies();
	}, []);

	const nowPlayingMovies = async () => {
		const { data } = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        
        setNowPlaying(data.results);
        setIsLoading(false);
	};

	return {
		//states
		nowPlaying,
        isLoading,

		//functions

	};
};

export default useMovies;
