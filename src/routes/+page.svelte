<script lang="ts">
	import Card from './Card.svelte';
	import { movieFunction } from '$lib/store/movieStore';
	import type { Movie } from '$lib/models/movie';
	import { movies, performSearch } from '$lib/store/movieStore';

	let query = '';
	let searchResults = [];

	async function search() {
		// console.log('dfsdf', query);
		searchResults = await performSearch(query);
		console.log(searchResults);
	}

	const loadData = async () => {
		await movieFunction();
	};

	loadData();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-center text-2xl text-slate-950 font-bold pt-10">Movie World</h1>

<!-- search function -->

<div class="max-w-xl mx-auto pt-5">
	<input
		type="text"
		bind:value={query}
		placeholder="Search..."
		on:input={search}
		class="border w-full py-4 rounded px-2 active:border-slate-700 focus:outline-none focus:ring focus:ring-slate-300"
	/>
</div>

<div class="max-w-screen-lg mx-auto py-20 px-5 lg:px-0">
	<div class="grid md:grid-cols-4 gap-5">
		{#each $movies as item}
			<Card movie={item} />
		{/each}
	</div>
</div>
