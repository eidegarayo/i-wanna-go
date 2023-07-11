export const fallbackLng = 'en';
export const languages = [fallbackLng, 'es'];

export function getOptions(lng = fallbackLng) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
