export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	published: boolean;
};

export type SpotifySong = {
	title: string;
	artist: string;
	song_url: string;
	isPlaying: boolean;
};

export type Category = {
	title: string;
	data: {
		title: string;
		link: string;
		description: string;
	}[];
};

export type Data = {
	[key: string]: Category;
};
