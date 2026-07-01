import type { ISbLinkURLObject } from '@storyblok/astro';

export function resolveStoryblokLink(link: ISbLinkURLObject | undefined): string {
  if (!link) return '#';
  if (link.linktype === 'story') {
    const slug = link.cached_url ?? '';
    return `${import.meta.env.BASE_URL}/${slug}`.replace(/\/+/g, '/');
  }
  if (link.linktype === 'email') return `mailto:${link.email}`;
  return link.url || '#';
}
