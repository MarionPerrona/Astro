import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro Learner | Blog',
    description: "Mon voyage d'apprentissage d'Astro",
    site: 'https://aesthetic-boba-a6267d.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr-fr</language>`,
  });
}