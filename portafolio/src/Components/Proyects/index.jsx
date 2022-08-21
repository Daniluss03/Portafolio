import React, { useEffect, useState } from 'react'
import './ProyectsElements.css'
import imagen from '../images/davivienda.jpg';
import imagen2 from '../images/loteria-de-bogota.jpg';
import imagen3 from '../images/fundacionDeLaMujer.jpg';
import imagen4 from '../images/sql.png';
import imagen5 from '../images/python.webp';
import Modal from '../Modal';

import Aos from "aos";
import "aos/dist/aos.css"
const Proyects = () => {
    const [EstadoModal, SetEstadoModal] = useState(false)
    const [EstadoModal2, SetEstadoModal2] = useState(false)
    const [EstadoModal3, SetEstadoModal3] = useState(false)
    const [EstadoModal4, SetEstadoModal4] = useState(false)
    const [EstadoModal5, SetEstadoModal5] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <div class="section-proyects" data-aos="fade-rigth">
            <div class="container">
                <h1>Proyectos</h1>

                <div class="card" data-aos="fade-rigth">
                    <div class="imgBx">
                        <h1 class="h1-cards">DAVIVIENDA</h1>
                        <img src={imagen} width="380px"/>
                    </div>
                    <div class="content">

                        <button class="btn first"onClick={() => SetEstadoModal(!EstadoModal)}>OPEN</button>
                    </div>

                </div>

                <div class="card" data-aos="fade-rigth">
                    <div class="imgBx">
                    <h1 class="h1-cards">LOTERIA DE BOGOTA</h1>
                    <img src={imagen2} width="380px"/>
                
                    </div>
                    <div class="content">
                    <button  class="btn first" onClick={() => SetEstadoModal2(!EstadoModal2)}>OPEN</button>
                    </div>
                </div>
                 
                <div class="card" data-aos="fade-rigth">
                    <div class="imgBx">
                    <h1 class="h1-cards">FUNDACION DE LA MUJER</h1>
                    <img src={imagen3} width="380px"/>
                    </div>
                    <div class="content">
                    <button class="btn first" onClick={() => SetEstadoModal3(!EstadoModal3)}>OPEN</button>
                    </div>
                </div>

                <div class="card" data-aos="fade-rigth">
                    <div class="imgBx">
                    <h1 class="h1-cards">EMPRESA DE DISTRIBUCIÓN</h1>
                    <img src={imagen4} width="380px"/>
                    </div>
                    <div class="content">
                    <button class="btn first" onClick={() => SetEstadoModal4(!EstadoModal4)}>OPEN</button>
                    </div>
                </div>
               

                <div class="card" data-aos="fade-rigth">
                    <div class="imgBx">
                    <h1 class="h1-cards">FICHERO</h1>
                    <img src={imagen5} width="380px"/>
                    </div>
                    <div class="content">
                    <button class="btn first"onClick={() => SetEstadoModal5(!EstadoModal5)}>OPEN</button>
                    </div>
                </div>

                {/*   //modal numero 1 */}
                <Modal estado={EstadoModal} cambiarEstado={SetEstadoModal} titulo="Ultra">
                    <h1>Davivienda</h1>
                    <p> Realizacion de una software  con un enfoque en procesos  transaccionales </p>
                   
                </Modal>

                 {/*   //modal numero 2 */}
                 <Modal  estado={EstadoModal2} cambiarEstado={SetEstadoModal2} titulo="Ultra">
                 <h1>Loteria de bogota</h1>
                    <p>Realizacion de una software que permitiera la venta de billetes y fracciones de loteria  fisica y virtual</p>
                  
                </Modal>


                 {/*   //modal numero 3 */}
                 <Modal  estado={EstadoModal3} cambiarEstado={SetEstadoModal3} titulo="Ultra">
                 <h1>Fundacion de la mujer</h1>
                 <p>  Realizacion de una base datos  relacional que permitiera la consulta de pin  pago  y desembolso de recaudos </p>
                   
                </Modal>

                 {/*   //modal numero 4 */}
                 <Modal  estado={EstadoModal4} cambiarEstado={SetEstadoModal4} titulo="Ultra">
                 <h1>Empresa de distribución</h1>
                 <p>     Realizacion de una base de datos relacional </p>
                </Modal>

                 {/*   //modal numero 5 */}
                 <Modal  estado={EstadoModal5} cambiarEstado={SetEstadoModal5} titulo="Ultra">
                 <h1>Fichero</h1>
                 <p>    Realizacion de un fichero </p>
                </Modal>
            </div>
        </div>
    )
}

export default Proyects