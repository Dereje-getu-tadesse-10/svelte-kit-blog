import type { Post } from '$src/lib/types';
import type { PageLoadEvent } from './$types';
// Import error handling from '@sveltejs/kit'.
import { error } from '@sveltejs/kit';

export async function load({ params }: PageLoadEvent) {
	try {
		// Attempt to import the post.
		const post = await import(`../../../posts/${params.slug}.md`);

		// Return post content and metadata.
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		// If there's an error, throw a 404 with a message.
		throw error(404, {
			code: 404,
			message: `Could not find ${params.slug}`
		});
	}
}
