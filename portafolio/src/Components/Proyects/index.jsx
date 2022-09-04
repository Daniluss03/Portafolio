import React, { useEffect, useState } from 'react'
import './ProyectsElements.css'
import imagen from '../images/davivienda.jpg';
import imagen2 from '../images/loteria-de-bogota.jpg';
import imagen3 from '../images/fundacionDeLaMujer.jpg';
import imagen4 from '../images/sql.png';
import imagen5 from '../images/python.webp';
import Modal from '../Modal';
import { InformationProyects } from '../Data/InformationProyects';
import Aos from "aos";
import "aos/dist/aos.css"
const Proyects = () => {
    const [EstadoModal, SetEstadoModal] = useState(false)
    const [EstadoModal2, SetEstadoModal2] = useState(false)
    const [EstadoModal3, SetEstadoModal3] = useState(false)
    const [EstadoModal4, SetEstadoModal4] = useState(false)
    const [EstadoModal5, SetEstadoModal5] = useState(false)


    const imagenesProyectos = require.context('../images',true) 
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <div className='section' id='proyects' data-aos="fade-rigth">
            <h5>My recents proyects</h5>
      
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