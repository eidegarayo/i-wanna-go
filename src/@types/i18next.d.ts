/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';

import type english from '../i18n/locales/en.json';
import type spanish from '../i18n/locales/es.json';

interface I18nNamespaces {
  english: typeof english,
  spanish: typeof spanish,
}

declare module 'i18next' {
  interface CustomTypeOptions {
    // returnNull: false
    // defaultNS: 'translation'
    resources: I18nNamespaces
  }
}
