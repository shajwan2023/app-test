<script lang="ts">
	import Card from './Card.svelte';
	import { movieFunction } from '$lib/store/movieStore';
	import type { Movie } from '$lib/models/movie';

	let dataMovies: Movie[] = [];

	const loadData = async () => {
		dataMovies = await movieFunction();
		console.log(dataMovies);
	};

	loadData();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-center text-2xl text-slate-950 font-bold pt-10">Movie World</h1>

<div class="max-w-screen-lg mx-auto py-20 px-5 lg:px-0">
	<div class="grid md:grid-cols-4 gap-5">
		{#each dataMovies as item}
			<Card movie={item} />
		{/each}
	</div>
</div>
