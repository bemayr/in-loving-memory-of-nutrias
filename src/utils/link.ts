interface StoryblokLink {
  linktype?: string;
  url?: string;
  cached_url?: string;
  email?: string;
}

export function resolveStoryblokLink(link: StoryblokLink | undefined): string {
  if (!link) return '#';

  if (link.linktype === 'email') {
    return `mailto:${link.email ?? ''}`;
  }

  if (link.linktype === 'story') {
    const slug = (link.cached_url ?? '').replace(/^\//, '');
    return `${import.meta.env.BASE_URL}/${slug}`.replace(/\/+/g, '/');
  }

  // url-type: external URLs pass through, internal paths get the base prepended
  const url = link.url || link.cached_url || '';
  if (url.startsWith('/') && !url.startsWith('//')) {
    return `${import.meta.env.BASE_URL}${url}`.replace(/\/+/g, '/');
  }

  return url || '#';
}
