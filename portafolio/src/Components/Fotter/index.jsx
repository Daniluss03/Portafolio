import jsPDF from 'jspdf';
import React from 'react'

import './Footer.css'
import imagen2 from '../images/aws.png';
const Footer = () => {

    function spdfGenerator(){
        let doc = new jsPDF('p','pt');
        doc.addImage(imagen2, 'JPEG', 10, 30, 150, 76);

        doc.save('a4.pdf');
      }
   
    return (
      <div className='footer'>
      <div className='container'>
          <ul>
              <li className='nav-item'>
                  <a href='Hero'>Home</a>
              </li>
              <li className='nav-item'>
                  <a href='#about'>About</a>
              </li>
              <li className='nav-item'>
                  <a href='#proyects'>Proyects</a>
              </li>
          </ul>
          <button onClick={()=>spdfGenerator()}>GENERAR MY CV</button>
      </div>
  </div>
    )
}

export default Footer;
