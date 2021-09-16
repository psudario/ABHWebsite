import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

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



const Navbar = (props) => {

    // Navbar Change on Scroll
    const [scrollTransparent, setScrollTransparent] = useState(true)
    
    window.onscroll = () =>{
        if(scrollTransparent){
            if(window.scrollY >= 1) setScrollTransparent(false);
        }
        else{
            if(window.scrollY <= 0) setScrollTransparent(true);
        }
    }

    // Link Styles
    const LinkStyles = {
        textDecoration: 'inherit',
        color:'inherit',

    }

    // Scroll Function
    const ScrollToTopFunc = () => {
        window.scrollTo(0,0);
    }

    // Hamburger Menu Open and Close function



    return (
        <NavbarWrapper scrollOpacity={scrollTransparent} currPage={props.location}>
            <NavContentWrapper scrollOpacity={scrollTransparent} currPage={props.location}>
                <NavLeftWrapper>
                    <NavItem>
                        <RouterLink to='/' onClick={() => ScrollToTopFunc()} style={LinkStyles}>Home</RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink to='/about' onClick={() => ScrollToTopFunc()} style={LinkStyles}>About Us </RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink to='/ResidentLife' onClick={() => ScrollToTopFunc()} style={LinkStyles}>Resident Life </RouterLink>
                    </NavItem>
                </NavLeftWrapper>
                <NavLogoWrapper>
                    <NavLogo src={Logo}/>
                </NavLogoWrapper>
                <NavRightWrapper>
                    <ScrollLink to="contact" smooth duration={1000}>
                        <NavItem>Contact</NavItem>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth duration={1000}>
                        <NavItem>Hours</NavItem>  
                    </ScrollLink>
                    <ScrollLink to="contact" smooth duration={1000}>
                        <NavItem>#</NavItem>
                    </ScrollLink>
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
