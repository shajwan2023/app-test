<script lang="ts">
	import { supabase } from '$lib/supabase';
	import type { Movie } from '$lib/models/movie';
	import Card from './Card.svelte';
	// import movies from '../store/movieStore';
	// console.log($movies);

	let loading = false;
	let dataMovies: Movie[] = [];

	const movieFunction = async () => {
		loading = true;
		const { data } = await supabase.from('movie').select('*');
		//   console.log(data)
		dataMovies = data as Movie[]; // Type assertion
		loading = false;
	};

	movieFunction();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-center text-2xl text-slate-950 font-bold pt-10">Movie World</h1>

<div class="max-w-screen-lg mx-auto py-20 px-5 lg:px-0">
	<div class="grid md:grid-cols-4 gap-5">
		{#if loading}
			loading.....
		{:else}
			{#each dataMovies as item}
				<Card movie={item} />
			{/each}
		{/if}
	</div>
</div>
