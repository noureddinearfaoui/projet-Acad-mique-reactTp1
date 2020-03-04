import React from 'react';
import './header.css';
import logo from './js-logo.png';

function Header() {
  return (
    <div class="container hd">
          <div class="row">
              
             
              <img src={logo} class="img-rounded" alt="Cinque Terre"></img>
          </div>
    </div>
  );
}

export default Header;