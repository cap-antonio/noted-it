import React from 'react'
import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-brand">
                Noted it?
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">EN</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">RU</a>
                </li>
            </ul>

        </nav>
    )
}

export default Header