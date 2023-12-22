// since there's no dynamic data here, we can prerender

import { browser } from '$app/environment';

// it so that it gets served as a static asset in production
export const prerender = true;
export function load() {
  const theme = browser ? localStorage.getItem('theme') : 'light';
  return {
    theme,
  };
}
