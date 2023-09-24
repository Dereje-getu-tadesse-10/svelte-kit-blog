export const getAccessToken = async () => {
	// Get the refresh token from the environment variables.
	const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

	// Make a POST request to the Spotify API to get an access token.
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${import.meta.env.VITE_SPOTIFY_BASIC}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		// Include the grant type and refresh token in the request body.
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token
		})
	});

	return response.json();
};

export const currentlyPlayingSong = async () => {
	const { access_token } = await getAccessToken();

	// Make a GET request to the Spotify API to get the currently playing song.
	return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});
};
