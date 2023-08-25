import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const blog = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.date),
			link: `/blog/${post.slug}/`,
		})),
	});
}