import './StartsElements.css';

import foto1 from '../images/aws.png';
import foto2 from '../images/javascript.png'
import foto3 from '../images/css.png';
import foto4 from '../images/html.png'
import foto5 from '../images/python.webp';
import foto6 from '../images/react.png'
import foto7 from '../images/sql.png'
import foto8 from '../images/github.jpg'

import Aos from "aos";
import "aos/dist/aos.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


import React from 'react'

const Starts = () => {
  return (
<div className='section-starts'>
<div className='column'>
    <div className='contenido-starts'>
   <img src={foto1}/>
        <img src={foto2}/>
        <img src={foto3}/>
        <img src={foto4}/>
        <img src={foto5}/>
        <img src={foto6}/>
        <img src={foto7}/>
        <img src={foto8}/>
        <h1>TOOLS</h1>
   </div>

 
    </div>
   
    </div>
  )
}

export default Starts