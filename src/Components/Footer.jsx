import React from "react";
import "../styles/Footer.css";
import insta_logo from '../images/insta_logo.png';
import Whatsapp_logo from '../images/Whatsapp_logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} JEANS POINT. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/items">Items</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://www.instagram.com/jeans_point_?igsh=Y2tveW1zZ3c4ZTVv " target="_blank" rel="noreferrer"><img className='insta' src={insta_logo} /></a>
                    <a href="https://wa.me/917015197637" target="_blank" rel="noreferrer"><img className='insta' src={Whatsapp_logo} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;