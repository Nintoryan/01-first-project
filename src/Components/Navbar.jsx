import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="nav">
            <ul>
                <li className="item"><a href="#s">Profile</a></li>
                <li className="item"><a href="#s">Messages</a></li>
                <li className="item"><a href="#s">News</a></li>
                <li className="item"><a href="#s">Music</a></li>
                <li className="item"><a href="#s">Settings</a></li>
            </ul>
        </nav>
        );
}
export default Navbar;