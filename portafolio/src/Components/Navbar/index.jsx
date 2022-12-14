import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'


import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                 
                </a>
           
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="Home" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="proyects" spy={true} smooth={true} offset={50} duration={500} >Proyects</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar