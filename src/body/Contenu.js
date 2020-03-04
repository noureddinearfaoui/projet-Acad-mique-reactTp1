import React from 'react';
import './Contenu.css';
import Item from './Item/Item';

function Contenu() {
  return (
    <div class="container ct">
          <div class="row col col-lg-12">
          <form class="fr " >
                  
                   <label for="email">Rechercher</label>
                   <input type="email" class="form-control sr" id="email"/>
                
         <button type="submit" class="btn btn-success b">Submit</button>
          </form>
              
         </div>
         <div class="row p2">
             <div  class="it col col-lg-3 ">
            <Item title="one" description="sdjdhjsdhjsdhjshdjs"></Item>
            </div >
            <div  class="it col col-lg-3 ">
            <Item title="two" description="sdjdhjsdhjsdhjshdjs"></Item>
            </div>
            <div  class="it col col-lg-3 ">
            <Item title="three" description="sdjdhjsdhjsdhjshdjs"></Item>
            </div>
         </div>
    </div>
  );
}

export default Contenu;