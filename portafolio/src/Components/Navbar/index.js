import React from 'react';


import { Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon ,
    NavMenu,
    NavItem,
    NavLinks,
  

} from './NavbarElements';


const Navbar = ({toggle}) => {

    
    return (
        <>
            <Nav>
                <NavbarContainer>
                   
                    <NavLogo to="/">
                  
                    </NavLogo>
                  
                    <MobileIcon onClick={toggle}>
                
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Inicio'>Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Nosotros'>Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='servicios'>servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='proyectos'>Proyetos</NavLinks>
                        </NavItem>
                     
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;