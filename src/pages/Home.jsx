import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const [ t, i18n ] = useTranslation();

  return (
    <div className="home">
      <div className="container">
        <div>
          <h1>{t('test-text')} </h1>
          <h2>Hello, {t('name')}. How did you sleep, {t('name')}?</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
