import React, { useState, useRef, useEffect } from 'react';
import './HeroElements.css';
import Aos from "aos";
import "aos/dist/aos.css"
import '../Information';






const Hero = ({ slides ,heading,paragraphOne,paragraphTwo}) => {


    const [current, SetCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);


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
        <div class="Contenedor-Hero" data-aos="fade-right">
            {slides.map((slide, index) => {
                return (

                    <div>
                        <div class="HeroSlide" key={index}>
                            {index === current && (
                                <div class="column-right">
                                    <img class="HeroImage" src={slide.image} alt={slide.alt} />
                                </div>
                            )}
                        </div>
                    </div>

                );
            })}



            <div class="column-left">
                
               
                <h1 class="Hero-h1">{heading}</h1>
              
                <h2 class="hero-h2">{paragraphOne}</h2>
              
                
            </div>
        </div>
    )
}

export default Hero