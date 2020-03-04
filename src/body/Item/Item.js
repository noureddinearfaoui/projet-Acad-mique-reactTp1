import React from 'react';
import './Item.css';
import logo from './l.jpg';

function Item(props) {
  return (
    <div class="card ctt" >
         <img class="card-img-top" src={logo} alt="Cardcap"/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
    </div>
  );
}

export default Item;