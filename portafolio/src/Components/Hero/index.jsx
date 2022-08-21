import React, { useEffect } from 'react'
import './HeroElements.css';
import Aos from "aos";
import "aos/dist/aos.css"
import imagen from '../images/Danilo.jpg'
const Hero = () => {



    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div class="section" data-aos="fade-rigth" id="inicio">
            <div class="Contenedor" >
                <header class="header" data-aos="fade-rigth">
                    <div clas="col">
                        <div class="content">
                            <h1 class="heading" > About me<span> DEVELOPER DANILO</span>  </h1>
                            <p clas="info">IM   STUDENT OF SYSTEM INGENIR IN THE UIS                       </p>
                        </div>

                    </div>
                    <div>
                        <img src={imagen} class="svg" alt="" />
                    </div>
                </header>
            </div>
        </div>

    )
}

export default Hero