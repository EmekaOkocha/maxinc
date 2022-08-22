import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Menuitems() {

  return (
    <div className="menu">
      <ul className="ss">
        <Link className="link" to='/'><li> Home </li></Link>
         <Link className="link" to='/about'><li>About Us</li></Link>
         <Link className="link" to='/gallery'><li>Gallery</li></Link>
        <Link className="link" to='/contact'><li>Contact</li></Link>
      </ul>
    </div>
  );
}
export default Menuitems;