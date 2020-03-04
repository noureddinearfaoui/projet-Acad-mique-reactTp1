import React from 'react';
import './App.css';
import Header from './header/header.js';
import Menu from './menu/Menu.js';
import Contenu from './body/Contenu';
function App() {
  return (
    <div class="container-fluid">
          <div class="row menu">
            
            <Header ></Header>
          </div>
          <div class="row gau">
              <div class="menu col col-lg-3">
                 <Menu ></Menu>
              </div>
            <div class="body">
             <Contenu></Contenu>
            </div>
          </div>
          
  
    </div>
  );
}

export default App;
