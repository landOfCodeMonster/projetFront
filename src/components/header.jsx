import React from 'react';

import logo from "../images/logo.png";

const Header = () => {
    return (
        <div>
            <nav>
                <img className="logoapp" src={logo} alt="Logo le bon burger" />
            </nav>
        </div>
    );
};

export default Header;