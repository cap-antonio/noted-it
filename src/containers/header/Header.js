import React from 'react'
import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Noted it?</a>
            <ul className="navbar-nav mr-auto p-2">
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
            </ul>
                <button className=" btn btn-primary my-2 my-sm-0" type="submit">EN</button>
                <button className=" btn btn-primary my-2 my-sm-0" type="submit">RU</button>
        </nav>
    )
}

export default Header