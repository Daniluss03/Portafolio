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
               <h2>Github: fdflsndfsf</h2>  
                <div>
                  <ButtonGallery onClick={()=>spdfGenerator()}>GENERAR MY CV</ButtonGallery>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Footer;