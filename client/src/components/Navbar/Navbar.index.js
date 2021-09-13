import React, { useState, useEffect } from 'react';
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

    // Manage State for new page
    const [page, setPage] = useState('home')

    // Link Styles
    const LinkStyles = {
        textDecoration: 'inherit',
        color:'inherit',

    }

    // Hamburger Menu Open and Close function



    return (
        <NavbarWrapper scrollOpacity={scrollTransparent} currPage={page}>
            <NavContentWrapper scrollOpacity={scrollTransparent}>
                <NavLeftWrapper>
                    <NavItem>
                        <RouterLink to='/' onClick={() => setPage('home')} style={LinkStyles}>Home</RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink to='/about' onClick={() => setPage('about')} style={LinkStyles}>About Us </RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink to='/ResidentLife' onClick={() => setPage('residentlife')} style={LinkStyles}>Resident Life </RouterLink>
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
