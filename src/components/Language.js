import React from 'react';
import { useTranslation } from 'react-i18next';



export const Language = () => {
    const [t, i18n] = useTranslation(),
    changeLang = (lang) => () => i18n.changeLanguage(lang);
    return (
        <div className='headerLanguage'>

            <div className='headerLanguage-text headerLanguage-block'>
                <span>{t('selectLang')} </span>
            </div>

            <div className='headerLanguage-buttons headerLanguage-block'>
                <button onClick={changeLang('ru')}>
                    ru
                </button>
                <button onClick={changeLang('ro')}>
                    ro
                </button>
                <button onClick={changeLang('en')}>
                    en
                </button>
            </div>

        </div>
    )
}
