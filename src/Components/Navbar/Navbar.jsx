import React from 'react';
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <ul>
                <div className={`${navbar.item} ${navbar.active}`}>
                    <NavLink to="/profile" activeClassName={navbar.active}>Profile</NavLink>
                </div>
                <div className={navbar.item}>
                    <NavLink to="/dialogs" activeClassName={navbar.active}>Dialogs</NavLink>
                </div>
                <div className={navbar.item}>
                    <NavLink to="/news" activeClassName={navbar.active}>News</NavLink>
                </div>
                <div className={navbar.item}>
                    <NavLink to="/music" activeClassName={navbar.active}>Music</NavLink>
                </div>
                <div className={navbar.item}>
                    <NavLink to="/settings" activeClassName={navbar.active}>Settings</NavLink>
                </div>
            </ul>
        </nav>
    );
}
export default Navbar;