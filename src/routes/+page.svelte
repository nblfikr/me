<script>
	import Parallax from './Parallax.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
</svelte:head>

<section>
	<!-- https://codepen.io/sarazond/pen/LYGbwj -->
	<Parallax />
</section>

