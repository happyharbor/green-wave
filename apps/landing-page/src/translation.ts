import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';
import translationEn from './locales/en/translation.json';
import translationEs from './locales/gr/translation.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: 'gr',
    fallbackLng: 'gr',

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      gr: {
        translations: translationEs,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
