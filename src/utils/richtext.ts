import {
  renderRichText as sbRenderRichText,
  type SbRichTextProps,
  type SbRichTextRenderContext,
} from '@storyblok/astro';

function linkRenderer(props: SbRichTextProps<'link'>): string {
  const href = props.attrs?.href ?? '#';
  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const finalHref = isInternal
    ? `${import.meta.env.BASE_URL}${href}`.replace(/\/+/g, '/')
    : href;

  const parts = [`href="${finalHref}"`];
  if (props.attrs?.target) parts.push(`target="${props.attrs.target}"`);

  return `<a ${parts.join(' ')}>${props.children}</a>`;
}

const context: SbRichTextRenderContext = {
  renderers: { link: linkRenderer },
};

export function renderRichText(content: unknown): string {
  if (!content) return '';
  return sbRenderRichText(content as any, context);
}
