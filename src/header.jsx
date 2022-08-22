import React from 'react';
import maxinlogo from './maxinlogo.jpg';
import cart from './cart.png';
import user from './user.png';
import './App.css';
import Search from './search.jsx';
import Menuitems from './menuitems';
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from './navBar.jsx';
import Cart from './cart.jsx';

function Headers() {
  return (
    <div>
      <div className="logocart">
        <img className="logo" src={maxinlogo} alt="logo" />
        <div>
         <Menuitems />
          <div className="nav">
            <Search />
            <NavBar />
          </div>
        </div>
        <div className="cartdiv">
         <Cart />
        </div>
        
        </div>
    </div>
  );


}
export default Headers;