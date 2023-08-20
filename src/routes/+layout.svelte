<script>
	import '../app.css';
	import Footer from '$src/components/Footer.svelte';
	import Navbar from '$src/components/Navbar.svelte';
	import BackToTop from '$src/components/BackToTop.svelte';
	import BlurTransition from "$lib/transition.svelte"
	export let data
</script>

<svelte:head>
	<script
		async
		src="https://analytics.umami.is/script.js"
		data-website-id="your-website-id-umami"
	></script>
</svelte:head>
<!--px-4 mx-auto max-w-2xl sm:px-8 lg:max-w-5xl lg:px-1-->
<Navbar />
<BlurTransition key={data.url}>
<main class="px-4 mx-auto max-w-2xl sm:px-8 lg:max-w-5xl lg:px-1">
	<slot />
	<BackToTop />
</main>
</BlurTransition>
<Footer />
