<script lang="ts">
	import { config } from '$lib/index';
	import PageLink from '$src/components/PageLink.svelte';
	import Copyright from '$src/components/Copyright.svelte';
	import CurrentPlaying from '$src/components/CurrentPlaying.svelte';
</script>

<footer class="mt-32">
	<section
		class="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 px-4 pt-11 pb-20 sm:px-8 md:justify-between lg:max-w-5xl"
	>
		<h1 class="font-bold text-zinc-800 text-1xl">
			{config.titleSite.toLowerCase()}
		</h1>
		<PageLink />
		<CurrentPlaying />
		<Copyright />
	</section>
</footer>

