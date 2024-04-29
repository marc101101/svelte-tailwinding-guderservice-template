/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
		extend: {
			colors: {
				primary: '#275676',
				secondary: '#BC4F49',
				background: '#f3f5f6',
				header: '#f6f9fc'
			}
		}
	},
  plugins: [],
}

