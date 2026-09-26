/** Resolve site-local URLs for both repository Pages and custom-domain hosting. */
export const sitePath = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
