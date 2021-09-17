import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

// Styled Components
import {
    NavbarWrapper,
    NavContentWrapper,
    
    NavItem,
    NavItemWrapper,

    MobileLogoWrapper,
    NavLogoWrapper,
    NavLogo,

    Burger,
    BurgerLine
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
            <MobileLogoWrapper scrollOpacity={scrollTransparent} currPage={props.location}>
                <NavLogo src={Logo} />
            </MobileLogoWrapper>
            <NavContentWrapper
                scrollOpacity={scrollTransparent}
                currPage={props.location}
                burgerClicked={props.burgerClicked}
            >
                <NavItemWrapper>
                    <NavItem>
                        <RouterLink
                            to='/'
                            onClick={() => {
                                props.setBurgerClicked(false);
                                ScrollToTopFunc();
                            }}
                            style={LinkStyles}
                        >Home</RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink
                            to='/about'
                            onClick={() => {
                                props.setBurgerClicked(false);
                                ScrollToTopFunc();
                            }}
                            style={LinkStyles}
                        >About Us </RouterLink>
                    </NavItem>
                    <NavItem>
                        <RouterLink
                            to='/ResidentLife'
                            onClick={() => {
                                props.setBurgerClicked(false);
                                ScrollToTopFunc();
                            }}
                            style={LinkStyles}
                        >Resident Life </RouterLink>
                    </NavItem>
                </NavItemWrapper>
                <NavLogoWrapper>
                    <NavLogo src={Logo}/>
                </NavLogoWrapper>
                <NavItemWrapper>
                    <ScrollLink to="contact" smooth duration={1000}>
                        <NavItem
                            onClick={()=>props.setBurgerClicked(false)}
                        >Contact</NavItem>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth duration={1000}>
                        <NavItem
                            onClick={()=>props.setBurgerClicked(false)}
                        >Hours</NavItem>  
                    </ScrollLink>
                    <ScrollLink to="contact" smooth duration={1000}>
                        <NavItem
                            onClick={()=>props.setBurgerClicked(false)}
                        >#</NavItem>
                    </ScrollLink>
                </NavItemWrapper>
            </NavContentWrapper>
            <Burger 
                scrollOpacity={scrollTransparent}
                currPage={props.location}
                onClick={()=>props.setBurgerClicked(!props.burgerClicked)}
            >
                <BurgerLine />
                <BurgerLine />
                <BurgerLine />
            </Burger>
        </NavbarWrapper>
    )
}

export default Navbar
