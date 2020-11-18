import React from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from './Language';
import Logo  from './Logo';


function Header () {
    const [ t, i18n ] = useTranslation();
    return(
    <header className="header">
      <div className='container'>
        <div className="header__main">
          <Logo />
          <Language/>
        </div>
      </div>
    </header>

    )
}

export default Header;