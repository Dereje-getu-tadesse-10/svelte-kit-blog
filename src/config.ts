import { dev } from '$app/environment';

export const titleSite = 'Website title';
export const description = 'Website description';
export const homePageTitle = 'Hello 👋';

export const postPageTitle = `Posts page title`;
export const postsPageDesc = 'Posts page description';

export const resPageTitle = `Resources`;
export const resPageDesc = 'Resources page description';
export const pageLinks = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'Posts',
		link: '/posts'
	},
	{
		name: 'Resources',
		link: '/resources'
	}
];

export const socials = [
	{ name: 'Tiktok', link: '', icon: 'icons/tiktok.svg' },
	{ name: 'Instagram', link: '', icon: 'icons/instagram.svg' },
	{ name: 'Youtube', link: '', icon: 'icons/youtube.svg' }
];

const { VITE_APP_DEV_URL, VITE_APP_PUBLIC_URL } = import.meta.env;
export const url = dev ? VITE_APP_DEV_URL : VITE_APP_PUBLIC_URL;
