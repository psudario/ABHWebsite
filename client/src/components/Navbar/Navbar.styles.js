import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    position: fixed;
    left: 0;
    padding-left: 10px;
    right: 0;
    padding-right: 10px;
    height: 12vh;
    background-color: rgba(167, 171, 170, ${
        props => {
            return props.scrollOpacity ? 0 : 1;
        }
    });

    align-items: center;
    transition: all 300ms ease;
    /* color: #4C4E4F; */
    color: #3a3a3a;
    z-index: 200;

    box-shadow: ${props => {
        return props.scrollOpacity ? '0 0' : '0 0 10px' ;
    }} black;


`;
export const NavContentWrapper = styled.div`
    display: ${props => {
        return props.scrollOpacity ? 'none' : 'flex';
    }};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: inherit;

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
    background-color: inherit;

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
    cursor: pointer;
    background-color: inherit;
    color: inherit;
    text-decoration: none;
    transition: all 300ms ease;
    
    
    &:hover{
        color: rgba(219, 220, 225, 1);
        text-decoration: underline;
        text-decoration-thickness: 5px;
        transition: all 300ms ease;
    }
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
    margin: 2px 0px;
`;
