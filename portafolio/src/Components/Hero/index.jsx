import React, { useEffect } from 'react'
import './HeroElements.css';
import Aos from "aos";
import "aos/dist/aos.css"
import imagen from '../images/Danilo.jpg'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Hero = () => {


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const [value, setValue] = React.useState('recents');


    return (
        <div class="section-hero" data-aos="fade-rigth" id='hero'>
            <div class="Contenedor-hero" >
                <header class="header">
                    <div clas="col">
                        <div class="content">
                            <h1 class="heading" > About me<span> DEVELOPER DANILO</span>  </h1>

                        </div>

                    </div>
                    <div>
                        <img src={imagen} class="sgv-hero" alt="" />
                    </div>
                    
                </header>

            </div>
        
        </div>

    )
}

export default Hero