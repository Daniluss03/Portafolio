import React from 'react'
import './ProyectsElements.css'
import imagen  from '../images/davivienda.jpg';
import imagen2 from '../images/loteria-de-bogota.jpg' ;
import imagen3 from '../images/fundacionDeLaMujer.jpg'
const Proyects = () => {
    return (
        <div class="section-proyects"> 
        <div class="container">

            <div class="card">
                <div class="imgBx">
                <img  src={imagen}/>
                </div>
                <div class="content">
                    <h1>DAVIVIENDA</h1>
                    <p>royecto pagina web recaudo y pago  econ un enfoque en procesos  transaccionales </p>
                </div>
                
            </div>
            <div class="card">
                <div class="imgBx">
                <img  src={imagen2}  />
                </div>
                <div class="content">
                    <h1>LOTERIA DE BOGOTA</h1>
                    <p>Realizacion de una pagina que permitiera la venta de billetes y fracciones de loteria  fisica y virtual</p>

                </div>
                
            </div>
            <div class="card">
                <div class="imgBx">
                <img  src={imagen3}/>
                </div>
                <div class="content">
                    <h1>FUNDACION DE LA MUJER</h1>
                    <p>adhwqbdkqwbdjbdjkqDQKjbdbdjkvh heoghghreghkreg</p>

                </div>
                
            </div>

        </div>
        </div>
    )
}

export default Proyects