<script lang="ts">
	import { supabase } from '$lib/supabase';

	let userData = { email: '', password: '' };

	async function getUser() {
		const { data, error } = await supabase.auth.signInWithPassword(userData);
	}
</script>

<div class="py-20 flex flex-col max-w-lg mx-auto space-y-5">
	<input
		type="text"
		placeholder="username"
		class="rounded border px-2 py-4"
		bind:value={userData.email}
	/>
	<input
		type="text"
		placeholder="password"
		class="rounded border px-2 py-4"
		bind:value={userData.password}
	/>
	<button type="submit" class="p-2 rounded bg-slate-900 text-white" on:click={getUser}>Login</button
	>
</div>
