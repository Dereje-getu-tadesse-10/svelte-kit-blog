import type { PageLoadEvent } from './$types';
import type { Post } from '$lib/types';

export async function load({ fetch }: PageLoadEvent) {
	const response = await fetch('api/posts');
	const posts = (await response.json()) as Post[];
	return { posts };
}
