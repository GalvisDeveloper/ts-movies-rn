import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { FullInfoMovie } from '../interfaces/movieInterface';
import { CreditsDBResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
	cast: any[];
	isLoading: boolean;
	fullInfoMovie?: FullInfoMovie;
}

const useMoviesDetails = (movieId: number) => {
	const [state, setState] = useState<MovieDetails>({
		cast: [],
		isLoading: true,
		fullInfoMovie: undefined,
	});

	const { cast, isLoading, fullInfoMovie } = state;

	useEffect(() => {
		getMovieDetails();
	}, []);

	const getMovieDetails = async () => {
		const movieDetailPromise = movieDB.get<FullInfoMovie>(`/${movieId}`);

		const castPromise = movieDB.get<CreditsDBResponse>(`/${movieId}/credits`);

		const [movieDetailsResponse, castResponse] = await Promise.all([movieDetailPromise, castPromise]);

		setState({
			isLoading: false,
			fullInfoMovie: movieDetailsResponse.data,
			cast: castResponse.data.cast,
		});
	};

	return {
		cast,
		isLoading,
		fullInfoMovie,
	};
};

export default useMoviesDetails;
