import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <div className="m">
      <ul className="me">
        <Link className="lin" to='/hairpdt.jsx'><li>Hair Growth Product</li></Link>
         <Link className="lin" to='/stretchmark.jsx'><li>Stretchmark cream </li></Link>
         <Link className="lin" to='/skincare.jsx'><li>Skin Care</li></Link>
        <Link className="lin" to='/catalogue.jsx'><li>All Product</li></Link>
        <Link className="lin" to='/faq.jsx'><li>FAQ</li></Link>
      </ul>
    </div>
  )
}
export default NavBar;