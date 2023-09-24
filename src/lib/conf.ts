import { dev } from '$app/environment';

export const titleSite = 'Delight';
export const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
export const homePageTitle = 'Home page';
export const postPageTitle = `Posts page`
export const postsPageDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

export const resPageTitle = `Resources page`
export const resPageDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
export const pageLinks = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "Posts",
		link: "/posts"
	},
	{
		name: "Resources",
		link: "/resources"
	}
]

export const socials = [
	{ name: 'Tiktok', link: '', icon: 'icons/tiktok.svg' },
	{ name: 'Instagram', link: '', icon: 'icons/instagram.svg' },
	{ name: 'Youtube', link: '', icon: 'icons/youtube.svg' }
];

const { VITE_APP_DEV_URL, VITE_APP_PUBLIC_URL } = import.meta.env;
export const url = dev ? VITE_APP_DEV_URL : VITE_APP_PUBLIC_URL;
