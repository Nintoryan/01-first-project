import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return(
        <header className={h.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>
        </header>
        );
}
export default Header;