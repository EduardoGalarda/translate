# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Translate

 - npm install react-i18next i18next i18next-browser-languagedetector
 - criacao da pasta locales dentro de src, onde sao criados os arquivos json para as traducoes.
 - criacao do arquivo i18n.js na pasta raiz.
 - import '../i18n.js' em main.jsx
 - import { useTranslation } from 'react-i18next';
 - const { t } = useTranslation(); (dentro da funcao)
 - <h1>{t('page.home')}</h1> (modelo de uso)

 # Language Selector

 Componete para criar a selecao de opcoes ou botoes para selecionar o idioma desejado
