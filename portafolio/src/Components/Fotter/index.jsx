import jsPDF from 'jspdf';
import React from 'react'
import { Container, Wrapper, Column, Link } from './FotterElements';
import {ButtonGallery} from '../Button/button'

import imagen2 from '../images/aws.png';
const Footer = () => {

    function spdfGenerator(){
        let doc = new jsPDF('p','pt');
        doc.addImage(imagen2, 'JPEG', 10, 30, 150, 76);

        doc.save('a4.pdf');
      }
   
    return (
        <Container>
            <Wrapper>
              <h1>jhondanilo3@gmail.com</h1>
               <h1>https://github.com/Daniluss03</h1>  
                <div>
                  <button onClick={()=>spdfGenerator()}>GENERAR MY CV</button>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Footer;