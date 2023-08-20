import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
	const response = await fetch('/data.json');
	const data = await response.json();
	return {
		props: data
	};
}
