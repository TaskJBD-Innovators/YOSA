import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar= () => {
    return (
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                   <li><a><Link to="/about">About</Link></a></li> 
                    <li><a><Link to="/faq">FAQ</Link></a></li>
                </ul>
            </nav>
    );
};

export default Navbar;
