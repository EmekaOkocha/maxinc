import React from 'react';
import pin from './pin.png';
import reddit from './reddit.png';
import you from './you.png';
import './App.css';

function Footer() {
  return (
    <div className="footer">

      <div>
        <table><th>COMPANY</th>
          <tr>
            <td>Mission Statement</td>
          </tr>
          <tr>
            <td>Vision Statement</td>
          </tr>
          <tr>
            <td>Who we are</td>
          </tr>
        </table>
      </div>
      <div>
        <table>
          <th><td>SUPPORT</td></th>
          <tr>
            <td>Contact us</td>
          </tr>
          <tr>
            <td>Help Center</td>
          </tr>
          <tr>
            <td>Become a distributor</td>
          </tr>
        </table>
      </div>
      <div className="socialsdiv">
        <div className="socials">

          <ul className="socials">
            <li> <img className="sm" src={reddit} alt="reddit" /></li>
            <li><img className="sm" src={you} alt="reddit" /></li>
            <li><img className="sm" src={pin} alt="reddit" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer;