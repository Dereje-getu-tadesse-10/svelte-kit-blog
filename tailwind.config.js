/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				hover_color: 'var(--color-hover)'
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
