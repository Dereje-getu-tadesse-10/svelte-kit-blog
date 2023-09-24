import { json } from '@sveltejs/kit';
import { currentlyPlayingSong } from '$lib/spotify';
import type { RequestEvent } from '@sveltejs/kit';
import type { SpotifySong } from '$src/lib/types';

export async function GET({ setHeaders }: RequestEvent) {
	const response = await currentlyPlayingSong();

	// If the response status is 204 (No Content) or greater than 400 (error) return an object indicating that the song is not playing.
	if (response.status === 204 || response.status > 400) {
		return json({ isPlaying: false }, { status: 200 });
	}

	const song = await response.json();

	// If the item object is null, return an object indicating that the song is not playing.
	if (song.item === null) {
		return json({ isPlaying: false }, { status: 200 });
	}

	const data: SpotifySong = {
		title: song.item.name,
		artist: song.item.artists.map((_artist: any) => _artist.name).join(', '),
		song_url: song.item.external_urls.spotify,
		isPlaying: song.is_playing
	};

	// Set the "cache-control" header to indicate that the response can be cached for 60 seconds.
	setHeaders({
		'cache-control': 'max-age=60'
	});

	return json(data, { status: 200 });
}