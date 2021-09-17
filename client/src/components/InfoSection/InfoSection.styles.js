import styled from 'styled-components';

const primaryColor = "#3a3a3a";
const secondaryColor = "#a4ac9c";


export const InfoSectionWrapper = styled.div`

    min-height: 60vh;
    background-color: ${props => {
        return props.primaryTheme? primaryColor : secondaryColor;
    }};
    color: ${props => {
        return props.primaryTheme? secondaryColor : primaryColor;
    }};

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: ${props => {
        return props.leftText ? 
        `
        "title image"
        "text image"
        `
        : 
        `
        "image title"
        "image text"
        `; 
    }};

    @media (max-width: 976px){
        grid-template-columns: 100%;
        grid-template-areas: 
            "image"
            "title"
            "text";
    }

`;



export const InfoSectionImgWrapper = styled.div`
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const InfoSectionImg = styled.div`
    background-image: url(${props => {return props.image}});
    background-position: center;
    background-size: ${props => {return props.svg? 'contain' : 'cover'}};
    background-repeat: no-repeat;
    height: 50vw;
    width: 50vw;
    max-height: 412px;
    max-width: 412px;
    margin: 10px;
    border-radius: ${props => {return props.svg? 0 : '50%'}};
    box-shadow: ${props => {return props.svg? '' : `inset 0 0 5px 1px black`}};

`;

export const InfoSectionTitleWrapper = styled.div`
    
    grid-area: title;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const InfoSectionTitle = styled.h1`
    margin: 25px;
`;

export const InfoSectionTextWrapper = styled.div`
    grid-area: text;
    display: flex;
    justify-content: center;
    align-items: top;
    margin-bottom: 30px;
`;
export const InfoSectionSubtext = styled.h3`
    max-width: 30vw;
    padding: 10px;
    text-align: center;

    @media (max-width: 976px){
        max-width: 100vw;
    }
    
`;
export const InfoSectionBullets = styled.ul`
    padding-left: 2em;
`;
export const InfoSectionBullet = styled.li`
    display: list-item;
    margin-bottom: 50px;
    color: inherit;
    list-style: square;
    margin: 10px 0;
    font-size: 1.3em;
`;

