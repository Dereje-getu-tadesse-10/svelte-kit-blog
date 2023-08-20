<script lang="ts">
	import type { PageData } from './$types';
	import * as config from '$src/config';
	const {homePageTitle, description, titleSite} = config
	import PostCard from '$src/components/PostCard.svelte';
	import PostSummaryCard from "$src/components/PageSummaryCard.svelte";
	export let data: PageData;
	const posts = data.posts.slice(0, 4);
</script>

<svelte:head>
	<title>{titleSite}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={titleSite} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={import.meta.env.VITE_APP_PUBLIC_URL} />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content={titleSite} />
	<meta name="twitter:description" content={description} />
</svelte:head>


<PostSummaryCard title={homePageTitle} description={description} />
<PostCard {posts} />
