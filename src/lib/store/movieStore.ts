import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';
import type { Movie } from '$lib/models/movie';

export const movies = writable<Movie[]>([]);

export async function performSearch(query) {
  console.log(query)
   movies.set([])
  const { data, error } = await supabase
    .from('movie')
    .select()
    .ilike('name', `%${query}%`);
  
  if (error) {
    console.error(error);
    return null;
  }
   movies.set(data as Movie[]);
  return data;
}


export const movieFunction = async () => {
	const { data } = await supabase.from('movie').select('*');
	movies.set(data as Movie[]);
	return data as Movie[];
};



export const insertData = async ({ movieObject }: { movieObject: Movie }) => {
  try {
    const { data, error } = await supabase.from('movie').insert(movieObject);
    movies.update((currentMovies) => {
      if (data) {
        return [...(currentMovies || []), ...data];
      }
      return currentMovies || [];
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

