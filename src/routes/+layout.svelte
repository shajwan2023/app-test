<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navbar from './Header.svelte';
	import './styles.css';
</script>

<div>
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
