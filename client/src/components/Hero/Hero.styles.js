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
        opacity: 100%;
        transform: translateY(0);
    }

    12%{
        transform: translateY(-25px);
    }

    25%{
        transform: translateY(0)
    }

    37%{
        transform: translateY(0);
    }

    50%{
        transform: translateY(-25px);
    }

    62%{
        transform: translateY(0)
    }

    75%{
        transform: translateY(0);
    }

    87%{
        transform: translateY(-25px);
        opacity: 100%;
    }

    100%{
        opacity: 0;
        transform: translateY(0);
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


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 10px black;
    
`;
export const HeroTextWrapper = styled.div`
    

    
    animation: ${FadeInAnimation} 2s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 50px 100px;
    border-radius: 1em;
    margin-bottom: 50px;
    
`; 
export const HeroMainText = styled.h1`
    margin: 25px;
    color: #3a3a3a;
    font-size: 6em;
    font-weight: bold;
    text-shadow: 5px 5px 10px #a4ac9c, -5px -5px 10px #a4ac9c;
`;
export const HeroCopyText = styled.h4`
    max-width: 50vw;
    color: #ffffff;
    font-size: 2em;
    text-shadow: 0 0 250px #ffffff;
`;
export const HeroFadeWrapper = styled.div`
    animation: ${ScrollFadeAnimation} 2s ease, ${Bounce} 2s ease 2s;
    opacity: 0;

    bottom: 0;
    margin-bottom: 10px;
    position: absolute;
    z-index:1;

`;
export const HeroScrollWrapper = styled.div`
    height: 12vh;
    width: 12vh;

    
    animation-iteration-count: 10;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    

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