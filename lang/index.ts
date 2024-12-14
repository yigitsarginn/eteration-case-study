import { getLocales } from 'expo-localization';
import { I18n, TranslateOptions } from 'i18n-js';
import { en } from './locales/en';

const locales = getLocales();
export const locale = locales[0].languageCode || 'en';

export const i18n = new I18n({ en });
i18n.defaultLocale = 'en';
i18n.locale = locale;
i18n.enableFallback = true;

export const t = (
  scope: DottedLanguageObjectStringPaths,
  options?: TranslateOptions,
) => i18n.t(scope, options);
