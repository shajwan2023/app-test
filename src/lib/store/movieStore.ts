import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';
import type { Movie } from '$lib/models/movie';

export const movies = writable<Movie[]>([]);

export const movieFunction = async () => {
	const { data } = await supabase.from('movie').select('*');
	movies.set(data as Movie[]);
	return data as Movie[];
};



export const insertData = async ({ movieObject }) => {
	try {
		const { data, error } = await supabase.from('movie').insert(movieObject);
		movies.update((currentMovies) => {
			if (data) {
				
				return [...currentMovies, ...data!];
			} // Update the movies store
		});

		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

