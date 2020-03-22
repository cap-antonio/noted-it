import React from 'react'
import './header.css'
import counterpart from 'counterpart';
import Translate from 'react-translate-component'
import en from './../../lang/en'
import ru from './../../lang/ru'
import { NavLink } from 'react-router-dom';

counterpart.registerTranslations('en', en)
counterpart.registerTranslations('ru', ru)

counterpart.setLocale('en')

const Header = () => {
    const onLangChange = (lang) => {
        counterpart.setLocale(lang)
    }
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Translate content='title' component={NavLink} className='navbar-brand' to='/home' />
            <ul className="navbar-nav mr-auto p-2">
                <li className ="nav-item">
                    <Translate content='aboutPage' component={NavLink} className='nav-link' to='/about' />
                </li>
            </ul>
            <button className="btn btn-primary my-2 my-sm-0"
                type="submit"
                onClick={() => onLangChange('en')}>
                EN
                </button>
            <button className="btn btn-primary my-2 my-sm-0"
                type="submit"
                onClick={() => onLangChange('ru')}>
                RU
                </button>
        </nav>
    )
}

export default Header