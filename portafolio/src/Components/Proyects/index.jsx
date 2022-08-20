import React,{useEffect} from 'react'
import './ProyectsElements.css'
import imagen  from '../images/davivienda.jpg';
import imagen2 from '../images/loteria-de-bogota.jpg' ;
import imagen3 from '../images/fundacionDeLaMujer.jpg';
import imagen4 from '../images/sql.png' ;
import imagen5 from '../images/python.webp';

import Aos from "aos";
import "aos/dist/aos.css"
const Proyects = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);


    return (
        <div class="section-proyects" data-aos="fade-rigth"> 
        <div class="container">
            <h1>Proyectos</h1>

            <div class="card" data-aos="fade-rigth">
                <div class="imgBx">
                <img  src={imagen}/>
                </div>
                <div class="content">
                    <h1 class="h1-cards">DAVIVIENDA</h1>
                    <p>royecto pagina web recaudo y pago  econ un enfoque en procesos  transaccionales </p>
                </div>
                
            </div>
            <div class="card" >
                <div class="imgBx">
                <img  src={imagen2}/>
                </div>
                <div class="content">
                    <h1 class="h1-cards">LOTERIA DE BOGOTA</h1>
                    <p>Realizacion de una pagina que permitiera la venta de billetes y fracciones de loteria  fisica y virtual</p>

                </div>
                
            </div>
            <div class="card" data-aos="fade-rigth">
                <div class="imgBx">
                <img  src={imagen3}/>
                </div>
                <div class="content">
                    <h1 class="h1-cards">FUNDACION DE LA MUJER</h1>
                    <p>adhwqbdkqwbdjbdjkqDQKjbdbdjkvh heoghghreghkreg</p>

                </div>
                
            </div>
            <div class="card">
                <div class="imgBx">
                <img  src={imagen4}/>
                </div>
                <div class="content">
                    <h1 class="h1-cards">EMPRESA DE DISTRIBUCION</h1>
                    <p>adhwqbdkqwbdjbdjkqDQKjbdbdjkvh heoghghreghkreg</p>

                </div>
                
            </div>
            <div class="card" data-aos="fade-rigth">
                <div class="imgBx">
                <img  src={imagen5} />
                </div>
                <div class="content">
                    <h1 class="h1-cards">FICHERO</h1>
                    <p>adhwqbdkqwbdjbdjkqDQKjbdbdjkvh heoghghreghkreg</p>

                </div>
                
            </div>

        </div>
        </div>
    )
}

export default Proyects