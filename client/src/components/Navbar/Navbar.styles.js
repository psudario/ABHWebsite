import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    
    display: flex;
    align-items: center;
    position: fixed;
    width: 100vw;
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    height: 12vh;
    min-height: 115px;
    background-color: rgba(167, 171, 170, ${
        props => {
            return (props.scrollOpacity && (props.currPage === "home")) ? 0 : 1;
        }
    });

    transition: all 300ms ease;
    color: #3a3a3a;

    box-shadow: ${props => {
        return (props.scrollOpacity  && (props.currPage === "home")) ? '0 0' : '0 0 10px' ;
    }} black;

    
    

`;

export const MobileLogoWrapper = styled.div`
    display: none;

    @media (max-width: 976px){
        display: ${props => {
            return (props.scrollOpacity  && (props.currPage === "home")) ? 'none' : 'block';
        }};
    }
`;

export const NavContentWrapper = styled.div`
    display: ${props => {
        return (props.scrollOpacity  && (props.currPage === "home")) ? 'none' : 'flex';
    }};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: inherit;
    z-index: 1000;

    transition: transform 300ms ease;

    @media (max-width: 976px){
        /* display: none; */
        width: 50%;
        min-width: 360px;
        position: absolute;
        top: 12vh;
        right: 0px;
        height: 88vh;
        padding-bottom: 40vh;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: rgba(167, 171, 170);
        /* box-shadow : inset 0 0 5px black, 0 0 1px black; */
        transform : ${props => {
            return (props.burgerClicked) ? 'translateX(0)' : 'translateX(100%)';
        }}
    }

`;
export const NavItemWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 33%;

    @media (max-width: 976px){
        flex-direction: column;
        
    }

`;

export const NavItem = styled.h2`
    cursor: pointer;
    background-color: inherit;
    color: inherit;
    text-decoration: none;
    transition: all 300ms ease;
    margin: 5px;
    
    
    &:hover{
        color: rgba(219, 220, 225, 1);
        text-decoration: underline;
        text-decoration-thickness: 5px;
        transition: all 300ms ease;
    }
`;
export const NavLogoWrapper = styled.div`
        display: flex;
    justify-content: center;
    padding: 5px;

    @media (max-width: 976px){
        display: none;
    }
`;
export const NavLogo = styled.img`
    max-height: 10vh;
`;


export const Burger = styled.div`
    display: none;

    @media (max-width: 976px){
        cursor: pointer;
        position: absolute;
        right: 2em;
        display: ${props => {
            return (
                props.scrollOpacity && (props.currPage === 'home')) ? 
                'none' : 'block'
            }};
    }
`;
export const BurgerLine = styled.div`
    background-color: #3a3a3a;
    width: 20px;
    height: 3px;
    margin: 2px 0px;
`;
