/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				"form-item": "auto 1fr",
				"keyboard": "repeat(auto-fit, minmax(75px, 1fr))"
			}
		},
	},
	plugins: [],
}