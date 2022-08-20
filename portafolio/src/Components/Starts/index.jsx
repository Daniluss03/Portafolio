import './StartsElements.css';
import React, { useState, useRef, useEffect } from 'react';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import Aos from "aos";
import "aos/dist/aos.css"


import { Rating } from '@mui/material';

const Starts = ({ slides }) => {
    const [value, setValue] = React.useState(2);

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
            <h1>TOOLS</h1>
            <div class="Contenedor-starts" data-aos="fade-right"  >

                <div class="Column-left" data-aos="fade-right"  >
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
                    <div class="container">
                        <div class="imgBx">
                            <h1 class="h1-cards">REACT</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>
                        <div class="imgBx">
                            <h1 class="h1-cards">AWS</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>
                        <div class="imgBx">
                            <h1 class="h1-cards">JAVACRIPT</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>
                        <div class="imgBx">
                            <h1 class="h1-cards">CSS</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>


                        <div class="imgBx">
                            <h1 class="h1-cards">SQL</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>

                        <div class="imgBx">
                            <h1 class="h1-cards">HTML</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>
                        <div class="imgBx">
                            <h1 class="h1-cards">GITHUB</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>
                        <div class="imgBx">
                            <h1 class="h1-cards">GITPOD</h1>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                            <label >★</label>
                        </div>






                    </div>



                </div>
            </div>
        </div>


    )
}

export default Starts