import React, { useEffect, useState } from 'react'
import './ProyectsElements.css'

import { InformationProyects } from '../Data/InformationProyects';
import Aos from "aos";
import "aos/dist/aos.css"
const Proyects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <div  className="section" id='proyects' data-aos="fade-rigth">
            <h5>PROYECTS</h5>
      
            <div className='container'>
                {
                    InformationProyects.map(({ id, image, title, github, demo }) => {
                        return (

                            <article key={id} className='container-items'>
                               <h3>{title}</h3>
                                    <img src={image} className='container-imgBx' alt={title} />
                                  
                                <div className='container-cta'>
                                 
                                <a className=''>{github}</a>
                                    <a>{demo}</a>
                               
                                </div>
                            </article>
                        )
                    })


                }
              
            </div>

 
        </div>
        
    )
}

export default Proyects