import styled from 'styled-components';

export const AboutPageWrapper = styled.div`
    min-height: 100vh;
    padding-top: 12vh;
    display: flex;
    justify-content: center;
    /* background-color: #28343D; */
    background-color: #666F75;
`;

export const AboutContentWrapper = styled.div`
    width: 60vw;
    background-color: #fafafa;
    box-shadow: 0 0 2px black, inset 0 0 2px black;
    padding-bottom: 100px;

    @media (max-width: 768px){
        width: 100vw;
        max-width: 100%;
    }
`;

export const AboutHeadingWrapper = styled.div`
    padding-top: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AboutTitle = styled.h1`
    margin-bottom: 5vh;
`;

export const AboutMessage = styled.p`
    width: 50%;
    text-align: center;
`;

export const AboutSectionWrapper = styled.div`
    margin: 50px;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
    "name image"
    "title image"
    "text image";

    grid-gap: 1em;

    @media (max-width: 768px){
        grid-template-areas: 
            "name image"
            "title image"
            "text text";
    }
`;
export const AboutSectionName = styled.h1`
    grid-area: name;
`;

export const AboutSectionImgWrapper = styled.div`
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AboutSectionImg = styled.div`
    background-color: white;
    background-image: url(${props => {return props.image}});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0 0 5px black, inset 0 0 5px black;


    height: 25vw;
    width: 25vw;
    border-radius: 50%;

    @media (max-width: 768px){
        height: 25vw;
        width: 25vw;
    }
    

`;
export const AboutSectionPosition = styled.p`
    grid-area: title;
`;
export const AboutSectionText = styled.p`
    grid-area: text;
`;
