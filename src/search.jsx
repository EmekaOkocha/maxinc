import React from 'react';
import './App.css';


function Search() {
  return (
    <div className="searchdiv">
      <input className="searchbox" type="text" placeholder="search products">
      </input>
      <button className="search-btn">search</button>
    </div>
  );
}
export default Search;