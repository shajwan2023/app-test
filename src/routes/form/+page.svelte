<script lang="ts">
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import type { Movie } from '$lib/models/movie';
	import { supabase } from '$lib/supabase';

	let movieObject: Movie = {
		name: '',
		title: '',
		desc: '',
		img: ''
	};

	let loading = false;
	let dataProduct: Movie[] = [];

	const insertData = async () => {
		const { data, error } = await supabase.from('movie').insert(movieObject);
		console.log(data);
		// alert('SUCCESS');
		toast.push('Success!', {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	};

	//adding toast
	const options = {};
</script>

<div class="max-w-3xl py-10 mx-auto font-bold">
	<div class="border py-10 rounded">
		<h1 class="text-center text-2xl uppercase">form</h1>
		<form class="" action="" on:submit|preventDefault={insertData}>
			<div class="flex flex-col gap-5 p-5">
				<div>
					<input
						type="text"
						bind:value={movieObject.name}
						placeholder="Enter movie name"
						class="border rounded p-2 w-full font-normal"
					/>
				</div>
				<div>
					<input
						type="text"
						bind:value={movieObject.title}
						placeholder="Enter movie title"
						class="border rounded p-2 w-full font-normal"
					/>
				</div>
				<div>
					<textarea
						bind:value={movieObject.desc}
						placeholder="Enter movie description"
						class="border rounded p-2 w-full font-normal"
					/>
				</div>
				<div>
					<input
						type="text"
						bind:value={movieObject.img}
						placeholder="Enter URL image"
						class="border rounded p-2 w-full font-normal"
					/>
				</div>
				<button
					type="submit"
					class="mt-5 block uppercase mx-auto shadow bg-slate-800 hover:bg-slate-700 focus:shadow-outline focus:slate-none text-white text-xs py-3 px-10 rounded"
					>Add Movie</button
				>
				<SvelteToast {options} />
			</div>
		</form>
	</div>
</div>
