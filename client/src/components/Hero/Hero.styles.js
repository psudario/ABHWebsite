import styled from 'styled-components';

export const HeroWrapper = styled.div`
    background-image: url(${props => {return props.backgroundImage}});
    
    height: 100vh;
    width: 100%;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* height: 100vh;
    background-color: grey; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeroTextWrapper = styled.div`
    /* background-image: url(${props => {return props.backgroundImage}});
    
    height: 100%;
    width: 100%;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const HeroMainText = styled.h1`
    margin-bottom: 25px;
`;

export const HeroCopyText = styled.h4`
    width: 50vw;
`;

export const HeroImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;
