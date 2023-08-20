<script lang="ts">
	import { config } from '$lib/index';
	import PostSummaryCard from '$src/components/PageSummaryCard.svelte';
	import PostCard from '$src/components/PostCard.svelte';
	const { postPageTitle, postsPageDesc, titleSite } = config;
	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>{titleSite}</title>
	<meta name="description" content={postsPageDesc} />
	<meta property="og:title" content={titleSite} />
	<meta property="og:description" content={postsPageDesc} />
	<meta property="og:url" content={import.meta.env.VITE_APP_PUBLIC_URL} />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content={titleSite} />
	<meta name="twitter:description" content={postsPageDesc} />
</svelte:head>

<PostSummaryCard title={postPageTitle} description={postsPageDesc} />
<PostCard {posts} />
