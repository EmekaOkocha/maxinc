import React from 'react';
import cover from './cover.jpeg';
import './App.css';

function CoverPhoto(){
  return(
    <div>
    <img className="cover" src={cover} alt="cover" />
    </div>
  )
}
export default CoverPhoto;