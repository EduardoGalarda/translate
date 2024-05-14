# Translate

## Prerequisites:

- Node.js 14.8 or higher
- Basic knowledge of JavaScript and React
- Familiarity with a package manager like npm/yarn

## Steps:
- Install required packages:

```bash 
npm install react-i18next i18next i18next-browser-languagedetector
```

- Create a `locales` folder inside `src` for storing translation JSON files.

- Create an `i18n.js` file in the root directory.

- Import `i18n.js` in `main.jsx`:

```bash
import '../i18n.js';
```

- Import useTranslation from react-i18next:

```bash
import { useTranslation } from 'react-i18next';
```

- Access translation functions:

```bash
const { t } = useTranslation();
```

- Use translation functions to render translated content:

```bash
<h1>{t('page.home')}</h1>
```

## Example Usage:

```bash
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('page.home')}</h1>
      <p>{t('welcome.message', { name: 'John Doe' })}</p>
    </div>
  );
};

export default MyComponent;
```

---
---

# Language Selector

Create a component to display language selection options or buttons to allow users to choose their preferred language. 

```bash
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div>
      <select value={language} onChange={(event) => handleLanguageChange(event.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
```

This is a basic setup for using React i18next with Vite.

## Notes
- This template uses `react-i18next` as a library for internationalization.
- Make sure to populate the translation JSON files (`locales`) with your specific translation strings.
- You can further customize the i18n configuration and language selector component to meet your specific needs.


---
---
---
---
---
---
# Translate

## Pré-requisitos:

- Node.js 14.8 ou superior
- Conhecimento básico de JavaScript e React
- Familiaridade com um gerenciador de pacotes como npm/yarn

## Passos:
- Instale os pacotes necessários:

```bash 
npm install react-i18next i18next i18next-browser-languagedetector
```

- Crie uma pasta `locales` dentro de `src` para armazenar os arquivos JSON de tradução.

- Crie um arquivo `i18n.js` no diretório raiz.

- Importe `i18n.js` em `main.jsx`:

```bash
import '../i18n.js';
```

- Importe useTranslation do react-i18next:

```bash
import { useTranslation } from 'react-i18next';
```

- Acesse as funções de tradução:

```bash
const { t } = useTranslation();
```

- Use funções de tradução para renderizar o conteúdo traduzido:

```bash
<h1>{t('page.home')}</h1>
```

## Examplo de Uso:

```bash
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('page.home')}</h1>
      <p>{t('welcome.message', { name: 'John Doe' })}</p>
    </div>
  );
};

export default MyComponent;
```

---
---

# Seletor de Idioma

Crie um componente para exibir opções de seleção de idioma ou botões para permitir que os usuários escolham seu idioma preferido.

```bash
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div>
      <select value={language} onChange={(event) => handleLanguageChange(event.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
```

Esta é uma configuração básica para usar o React i18next com o Vite.

## Notas
- Este modelo usa `react-i18next` como biblioteca para internacionalização.
- Certifique-se de preencher os arquivos JSON de tradução (`locales`) com suas strings de tradução específicas.
- Você pode personalizar ainda mais a configuração de internacionalização e o componente seletor de idioma para atender às suas necessidades específicas.