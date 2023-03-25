import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo_nameless.svg'
import siteName from '../images/wealth_health.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-elements">
                <div className="logo-container">
                    <img id="logo" src={logo} alt="logo Wealth Health"></img>
                    <img src={siteName} alt="logo Wealth Health"></img>
                </div>
                <h1>HRnet</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Create Employee</Link></li>                    
                        <li><Link to="/employee-list">Employee List</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;