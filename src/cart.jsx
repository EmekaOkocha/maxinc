import React from 'react';
import './App.css';
import cart from './cart.png';
import user from './user.png';

function Cart(){

  return(
    <div className="cartdiv">
        <img className="cart" src={user} alt="logo" />
        <img className="cart" src={cart} alt="logo" />
      
    </div>
  )
}
export default Cart