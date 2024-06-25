import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar= () => {
    return (
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#causes">Causes</a></li>
                    <Link to="./AboutUs">About</Link>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    );
};

export default Navbar;
