import React from 'react'

// Styled Components

import {
    NavbarWrapper,
    NavContentWrapper,
    NavLeftWrapper,
    NavItem,
    NavLogoWrapper,
    NavRightWrapper,
    Burger,
    BurgerLine
} from './Navbar.styles.js';

// Static Files


const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavContentWrapper>
                <NavLeftWrapper>
                    <NavItem>Home</NavItem>
                    <NavItem>About Us</NavItem>
                    <NavItem>Resident Life</NavItem>
                </NavLeftWrapper>
                <NavLogoWrapper>
                    <NavItem>Logo</NavItem>
                    {/* <NavLogo src={} /> */}
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
