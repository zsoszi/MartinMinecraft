import React from 'react';
import Navbar from '../../Navbar/Navbar';
import name from "../../../../picture/name.png";
import './Header.css';

function Header() {
    return (
        <div className="headContainer">
            <div className="header">
            <img className="headName" src={name} alt="name"/>
              <Navbar/>
            </div>
        </div>
    )
}

export default Header