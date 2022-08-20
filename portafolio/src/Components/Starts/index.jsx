import './StartsElements.css';
import React, { useState, useRef, useEffect } from 'react';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import Aos from "aos";
import "aos/dist/aos.css"


const Starts = ({ slides }) => {


    const [current, SetCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


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
        <div class="section-starts">
            <div class="Contenedor-starts">

                <div class="Column-left">
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
                </div>


                <div class="Column-rigthS">
         

                </div>



            </div>

        </div>
        

    )
}

export default Starts