import React from 'react'
import './header.css'
import counterpart from 'counterpart';
import Translate from 'react-translate-component'
import en from './../../lang/en'
import ru from './../../lang/ru'

counterpart.registerTranslations('en', en)
counterpart.registerTranslations('ru', ru)

counterpart.setLocale('en')

const Header = () => {
    const onLangChange = (lang) => {
        counterpart.setLocale(lang)
    }
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Translate content = 'title' component = 'a' className = 'navbar-brand' href = '#'/>
            <ul className="navbar-nav mr-auto p-2" />
                <button className="btn btn-primary my-2 my-sm-0" 
                    type="submit"
                    onClick = {() => onLangChange('en')}>
                        EN
                </button>
                <button className="btn btn-primary my-2 my-sm-0" 
                    type="submit"
                    value = 'ru'
                    onClick = {() => onLangChange('ru')}>
                        RU
                </button>
        </nav>
    )
}

export default Header