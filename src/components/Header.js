import React from 'react';
import tuckLogo from '../images/tuckLogo.png'


const Header = () => {
  console.log(tuckLogo)
    return <header className="header">
        <div className="header_flex ">
          <img src={tuckLogo} alt="logo" />
        </div>
        <div className="headerBar"></div>
    </header>
}

export default Header;