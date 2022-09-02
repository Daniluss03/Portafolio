import React from 'react'
import  './InfoSection.css'
const InfoSection = ({personal}) => {
  return (
  
<div class="section-info">
<div className='Contenedor-info'>

<h1>INFORMATION</h1>
{personal.map((persona) => {
                        return (

                            <div>
                                <div class="HeroSlide" >
                             
                                   
                                      <div class="column-right-information">

                                      { persona.Name}<br/>
                                      { persona.age}<br/>
                                    {persona.about}<br/>
                                    {persona.image}
                                    <br/>
                                    {persona.Studies}<br/>
                                      </div>
                                </div>
                            </div>

                        );
                    })}


</div>

</div>
  )
}

export default InfoSection