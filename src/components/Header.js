import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>
                    <ul>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}><li>Accueil</li></NavLink>
                        <NavLink to="/coup-de-coeur" className={(nav) => (nav.isActive ? "nav-active" : "")}><li>Coup de coeur</li></NavLink>
                    </ul>
                </nav>
                <h1>Movies</h1>
            </div>
        );
    }
}

export default Header;
