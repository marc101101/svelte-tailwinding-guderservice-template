import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: path.resolve(__dirname, './seo') + '/[!.]*', // 1️⃣
					dest: './' // 2️⃣
				}
			]
		})
	],
});
