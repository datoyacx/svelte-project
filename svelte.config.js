import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		files: {
			assets: 'static',
			routes: 'src/routes',
			template: 'src/app.html'
		},
		floc: false,
		hydrate: true,
		router: true,
		target: '#svelte',
		ssr: false,
		trailingSlash: 'never'
	}
};

export default config;