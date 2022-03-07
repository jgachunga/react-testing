import React from "react";
import './styles.scss';
import logo from '../../assets/graphics/background-light-logo@3x.png';
 
const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoImg" src={logo} alt="logo"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;