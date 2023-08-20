// Import JSON handling from '@sveltejs/kit' and the Post type definition.
import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

// Asynchronously fetch all posts.
async function getPosts() {
	let posts: Post[] = [];

	// Get all markdown files from the posts directory.
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	// Iterate over each markdown file.
	for (const path in paths) {
		const file = paths[path];
		// Extract the slug from the file path.
		const slug = path.split('/').at(-1)?.replace('.md', '');

		// Check if the file has metadata and a valid slug.
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			// Only add published posts.
			post.published && posts.push(post);
		}
	}

	// Sort posts by date in descending order.
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

// Endpoint to get all posts.
export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
