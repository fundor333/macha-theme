/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["content/**/*.md", "layouts/**/*.html"],
	theme: {
		fontFamily: {
			blackbarongothic: ["Black-Baron-Gothic", "sans-serif"],
			catalogue: ["Catalogue", "serif"],
			dovestype: ["DovesType-Regular", "serif"],
			lexend: ["Lexend", "sans-serif"],
		},
		extend: {
		},
	},
	plugins: [

		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
	],
};
