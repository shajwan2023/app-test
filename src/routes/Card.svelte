<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	// import { onMount } from 'svelte/types/ runtime/internal/lifecycle';
	export let movie: { id: number; name: string; title: string; desc: string; img: string };
	// console.log(movie)

	let imageUrl: string;
	// onMount(async () => {
	// const { data, error } = await supabase.storage.from('movieImage').getPublicUrl('');
	// if (error) {
	// 	console.error('Error fetching image:', error.message);
	// } else {
	// 	// imageUrl = data;
	// }
	// });

	function handleClick() {
		goto(`/movies/${movie.id}`);
	}
</script>

<div class="border">
	<img
		class="w-full h-40 object-cover"
		src={`https://lswdgtoykmtblypmfofq.supabase.co/storage/v1/object/public/movieImage/${movie.img}`}
		alt="image"
	/>
	<h1 class="text-medium mb-5 text-gray-700 px-2 text-center">{movie.name}</h1>
	<h1 class="text-medium px-2 text-gray-700">{movie.title}</h1>
	<p class="text-medium mb-5 px-2 text-gray-900 overflow-x-auto">{movie.desc}</p>
	<button
		on:click={handleClick}
		class="w-full bg-slate-900 py-2 text-slate-100 hover:bg-slate-700 hover:shadow-md duration-75"
		>View</button
	>
</div>
