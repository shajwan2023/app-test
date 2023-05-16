<script lang="ts">
	import Card from './Card.svelte';
	import movies from '../store/movieStore';
	// console.log($movies); 
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="max-w-screen-lg mx-auto py-20 px-5 lg:px-0">
	<div class="grid md:grid-cols-4 gap-5 ">
	{#each $movies as movie}
		 <Card movie={movie} />
	{/each}
	 
</div>
</div>

