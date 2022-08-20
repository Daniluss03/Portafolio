import React from 'react'
import './ProyectsElements.css'
import imagen  from '../images/davivienda.jpg';
import imagen2 from '../images/loteria-de-bogota.jpg' ;
const Proyects = () => {
    return (
        <div class="section-proyects"> 
        <div class="container">

            <div class="card">
                <div class="imgBx">
                <img  src={imagen}/>
                </div>
                <div class="content">
                    <h2>Card one</h2>
                    <p>adhwqbdkqwbdjbdjkqDQKjbdbdjkvh heoghghreghkreg</p>

                </div>
                
            </div>
            <div class="card">
                <div class="imgBx">
                <img  src={imagen2}  />
                </div>
                <div class="content">
                    <h2>Card one</h2>
                    <p>adhwqbdkqwbdjbdjkqDQKjbdbdjkvh heoghghreghkreg</p>

                </div>
                
            </div>
            <div class="card">
                <div class="imgBx">
                <img  src={imagen}/>
                </div>
                <div class="content">
                    <h2>Card one</h2>
                    <p>adhwqbdkqwbdjbdjkqDQKjbdbdjkvh heoghghreghkreg</p>

                </div>
                
            </div>

        </div>
        </div>
    )
}

export default Proyects