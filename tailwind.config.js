/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
		"./projects/daisy-ui/src/lib/**/*.{html,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui'),
	],
}
