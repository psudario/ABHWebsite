import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    height: 12vh;
    background-color: ${props => {return (props.scrollTransparent)? 'green' : 'grey'}};
    

    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;

    transition: all 300ms ease-in-out;

`;
export const NavContentWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 978px){
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
`;
export const NavLeftWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 33%;
    color: black;

    @media (max-width: 978px){
        
        position: absolute;
        right: 0px;
        height: 88vh;
        width: 80vw;
        top: 12vh;
        background: grey;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        padding: 25px;
        padding-bottom: 70vh;
        transform: translateX(0%); 
        box-shadow: -22px -2px black;
    }

`;
export const NavItem = styled.h2`
    color: white;
`;
export const NavRightWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 33%;
    @media (max-width: 978px){
        display: none;
    }
`;
export const NavLogoWrapper = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    padding: 5px;

    @media (max-width: 978px){
        order: -1;
    }
`;
export const NavLogo = styled.img`
    max-height: 10vh;
`;

export const Burger = styled.div`
    display: none;

    @media (max-width: 978px){
        display: block;
    }
`;
export const BurgerLine = styled.div`
    background-color: brown;
    width: 20px;
    height: 3px;
    margin: 2px;
`;
