<script lang="ts">
import { derived, get } from 'svelte/store';
import  movies  from '../../../store/movieStore';  
 import { page } from '$app/stores';
  console.log($page.params.movieId)



const id = $page.params.movieId; 
export const movieById = (id:number) => derived(movies, ($movies) => {
  return $movies.find((movie) => movie.id === +id);
});

 

const movie = movieById(id); 
console.log($movie);  

</script>


<div>
    <p>{$movie?.id}</p>
    <p>{$movie?.name}</p>
</div>
 