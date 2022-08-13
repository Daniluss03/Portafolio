import React, { useState, useRef, useEffect } from 'react';
import './HeroElements.css';


import  '../Data/Information';

const InformationData={
    heading:"ACERCA DE MI ",
    paragraphOne:"SOY ESTUDIANTE DE 5 SEMESTRE LA UNIVERSIDAD INDUSTRIAL DE SANTANDER ",
    paragraphTwo:'JDKSGKB;K GSFHOEWVHFOE;WFQ;',
    reverse:false,
    delay:100

}


  

const Hero = ({ slides }) => {


    const [current, SetCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)


    useEffect(() => {
        const nextSlide = () => {
            SetCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 2000)
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        SetCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        SetCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }







  return (
    <div class="Contenedor-Hero">
     <div class="column-right">
     {slides.map((slide, index) => {
                    return (


                        <div  class="HeroSlide"  key={index}>
                            {index === current && (

                              <div class="HeroSlider"> 
                               <div class="column-right">
                                    <img class="HeroImage" src={slide.image} alt={slide.alt} />
                                    </div>
</div>
                            )}
                        </div>
                        
                    );
                })}
     </div>


     <div class="column-left">
     <h1>{InformationData.heading}</h1>
     <p>{InformationData.paragraphOne}</p>

     </div>
    </div>
  )
}

export default Hero