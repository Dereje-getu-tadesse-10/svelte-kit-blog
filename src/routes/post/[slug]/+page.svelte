<script lang="ts">
	import { onMount } from 'svelte';
	let url = ``;
	onMount(() => (url = window.location.href));
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="article" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
</svelte:head>

<article class="mx-auto prose-img:my-14 mt-16 prose-img:h-full prose-img:w-full max-w-2xl prose-img:rounded-md prose-img:opacity-0 prose-img:shadow-2xl prose-img:transition-opacity prose prose-headings:text-primary prose-a:text-primary lg:mt-32">
	<svelte:component this={data.content} />
</article>
