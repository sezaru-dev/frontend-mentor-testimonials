/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			violet: 'hsl(263, 55%, 52%)',
			grayishBlue: 'hsl(217, 19%, 35%)',
			blackishBlue: 'hsl(219, 29%, 14%)',
			lightGray: 'hsl(0, 0%, 81%)',
			lightGrayBlue: 'hsl(210, 46%, 95%)',
		},
		fontFamily: {
			Barlow: ['Barlow Semi Condensed', 'sans-serif'],
		},
	},
	plugins: [],
};
