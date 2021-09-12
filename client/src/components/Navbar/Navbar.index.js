import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom';
import { Link as RouterLink } from 'react-router-dom';

// Styled Components
import {
    NavbarWrapper,
    NavContentWrapper,
    NavLeftWrapper,
    NavItem,
    NavLogoWrapper,
    NavRightWrapper,
    Burger,
    BurgerLine,
    NavLogo
} from './Navbar.styles.js';

// Static Files
import Logo from '../../static_files/png/ABHLogo.png';

// 



const Navbar = ({props}) => {

    // Navbar Change on Scroll
    const [scrollTransparent, setScrollTransparent] = useState(true)
    window.onscroll = () =>{
        if(scrollTransparent){
            if(window.scrollY >= 100) setScrollTransparent(false);
        }
        else{
            if(window.scrollY < 100) setScrollTransparent(true);
        }
    }

    useEffect(()=>{
        console.log(scrollTransparent);
    },[scrollTransparent])

    // Link Styles
    const LinkStyles = {
        textDecoration: 'none',
        color:'white',
    }
    
    // Hamburger Menu Open and Close function



    return (
        <NavbarWrapper scrollTransparent={scrollTransparent}>
            <NavContentWrapper>
                <NavLeftWrapper>
                    <NavItem>
                        <RouterLink to='/' style={LinkStyles}>Home</RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink to='/about' style={LinkStyles}>About Us </RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink to='/ResidentLife' style={LinkStyles}>Resident Life </RouterLink>
                    </NavItem>
                </NavLeftWrapper>
                <NavLogoWrapper>
                    <NavLogo src={Logo}/>
                </NavLogoWrapper>
                <NavRightWrapper>
                    <NavItem>Contact</NavItem>
                    <NavItem>Hours</NavItem>
                    <NavItem>#</NavItem>
                </NavRightWrapper>
            
            </NavContentWrapper>

            <Burger>
                <BurgerLine></BurgerLine>
                <BurgerLine></BurgerLine>
                <BurgerLine></BurgerLine>
            </Burger>

        </NavbarWrapper>
    )
}

export default Navbar
