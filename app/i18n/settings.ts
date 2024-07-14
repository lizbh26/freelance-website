export const fallbackLng = 'en'
export const languages = [fallbackLng, 'es']
export const defaultNamespace = 'translation'
export const lastLanguageCookieName = 'i18next'

export function getOptions (lng = fallbackLng, namespace = defaultNamespace) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns: namespace
  }
}