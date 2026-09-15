/**
 * Base-path helpers.
 *
 * `base` is "/" today, so these are effectively no-ops — but the site has
 * already lived under a "/my-portfolio/" base once, and several call sites
 * grew their own private copy of this logic in the meantime. One copy here.
 */

/** Prefix a site-root-relative route with BASE_URL. `withBase("blog")` -> "/blog". */
export const withBase = (route = "") =>
  `${import.meta.env.BASE_URL}${route.replace(/^\/+/, "")}`;

/** Same, but leaves absolute and protocol-relative URLs untouched. */
export const resolveAsset = (src?: string) => {
  if (!src) return undefined;
  if (/^(?:https?:)?\/\//.test(src)) return src;
  return withBase(src);
};

export const sandboxIndexHref = () => withBase("sandbox");
export const sandboxHref = (slug: string) => withBase(`sandbox/${slug}`);
