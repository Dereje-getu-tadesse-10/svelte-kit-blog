<script lang="ts">
	export let videoLink: string;
	let iframeLoaded = false;
	function handleLoad() {
		iframeLoaded = true;
	}
</script>

{#if !iframeLoaded}
	<div class="my-14 h-80 w-full animate-pulse rounded-md bg-gray-200"></div>
{/if}

<iframe
	class={!iframeLoaded ? 'hidden' : ''}
	width="100%"
	height="315"
	src={videoLink}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
	on:load={handleLoad}
></iframe>
