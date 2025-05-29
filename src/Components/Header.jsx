import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import '../styles/HeaderStyle.css';
import Home_logo from '../images/home_logo.png';
import Contact_logo from '../images/contact_logo.png';
import Item_logo from '../images/item_logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-darkbrown">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
                    <ul className="mobile-navigation navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <img className='icon' src={Home_logo} alt="Home" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/items">
                                <img className='icon' src={Item_logo} alt="Items" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact">
                                <img className='icon' src={Contact_logo} alt="Contact" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
