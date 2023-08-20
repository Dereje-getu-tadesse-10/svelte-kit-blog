<script lang="ts">
	import dayjs from 'dayjs';
	import 'dayjs/locale/fr';
	import { ChevronRight } from 'lucide-svelte';
	import type { Post } from '$lib/types';

	dayjs.locale('fr');

	export let posts: Post[];
</script>

<div class="mt-28 flex flex-col gap-16 sm:px-8">
	{#each posts as post}
		<article class="relative group">
			<span
				class="absolute -inset-x-4 -inset-y-6 -z-50 cursor-pointer rounded-md opacity-0 transition bg-hover_color -z-1 group-hover:scale-100 group-hover:opacity-50 sm:-inset-x-6"
			></span>
			<a href="/post/{post.slug}" class="block">
				<time data-time={post.date} class="text-sm text-zinc-400"
					>{dayjs(post.date).format('d MMMM YYYY')}</time
				>
				<h2
					class="my-3 text-base font-semibold tracking-tight text-zinc-800 transition-colors group-hover:text-primary"
				>
					{post.title}
				</h2>
				<p class="mt-3 text-sm text-zinc-600">
					{post.description}
				</p>
				<span class="mt-3 flex items-center gap-1 text-sm text-primary">
					Read
					<ChevronRight size="14" />
				</span>
			</a>
		</article>
	{/each}
</div>
