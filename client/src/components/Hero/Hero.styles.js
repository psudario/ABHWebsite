import styled, {keyframes} from 'styled-components';

// Keyframe Animations
const FadeInAnimation = keyframes`
    0%{
        opacity: 0%;
    }
    100%{
        opacity: 100%;
    }
`;
const ScrollFadeAnimation = keyframes`
    0%{
        opacity: 0%;
    }
    90%{
        opacity: 0%;
    }
    100%{
        opacity: 100%;
    }
`;
const Bounce = keyframes`
    0%{
        transform: translateY(0);
    }

    50%{
        transform: translateY(-25px);
    }

    100%{
        transform: translateY(0)
    }
`;



export const HeroWrapper = styled.div`
    background-image: url(${props => {return props.backgroundImage}});
    
    height: 100vh;
    width: 100%;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    background-attachment: fixed;

    /* height: 100vh;
    background-color: grey; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 10px black;
    
`;
export const HeroTextWrapper = styled.div`
    

    
    animation: ${FadeInAnimation} 2.5s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 50px 100px;
    border-radius: 25px;
    margin-bottom: 50px;
    
    background-color: rgba(219, 220, 225, 0.7);
    /* rgb(219, 220, 225) */
    box-shadow: 0 0 10px 1px black;
    
`; 
export const HeroMainText = styled.h1`
    margin-bottom: 25px;
`;
export const HeroCopyText = styled.h4`
    width: 50vw;
`;
export const HeroFadeWrapper = styled.div`
    animation: ${ScrollFadeAnimation} 15s ease ;
`;
export const HeroScrollWrapper = styled.div`
    height: 12vh;
    width: 12vh;

    animation: ${Bounce} 1s ease 15s;
    animation-iteration-count: 10;
    margin-bottom: 10px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;

    background-color: rgba(219, 220, 225, 0.85);
    border-radius: 100%;

    box-shadow: 0 0 10px 1px black;

`;
export const HeroScrollText = styled.h2`
    text-align: center;
`;
export const HeroScrollImg = styled.img`
    height: 1vh;
    width: 1vh;
`;