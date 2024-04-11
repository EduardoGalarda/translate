// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import ptTranslation from './locales/pt.json';

// Adiciona traduções
const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma padrão
    fallbackLng: 'en', // Caso não encontre a tradução para o idioma atual
    interpolation: {
      escapeValue: false, // Evita que os valores sejam escapados, permitindo usar HTML nas traduções
    },
  });

export default i18n;
