import styled from 'styled-components';

const primaryColor = "#3a3a3a";
const secondaryColor = "#a4ac9c";


export const InfoSectionWrapper = styled.div`

    height: 60vh;
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
        `"col2 col1"`
        : 
        `"col1 col2"`; 
    }};

`;



export const InfoSectionImgWrapper = styled.div`
    grid-area: col1;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const InfoSectionImg = styled.div`
    background-image: url(${props => {return props.image}});
    background-position: center;
    background-size: ${props => {return props.svg? 'contain' : 'cover'}};
    background-repeat: no-repeat;
    height: 50vh;
    width: 50vh;
    border-radius: ${props => {return props.svg? 0 : '50%'}};
    box-shadow: ${props => {return props.svg? '' : `0 0 5px 1px black`}};

`;



export const InfoSectionTextWrapper = styled.div`
    grid-area: col2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`;
export const InfoSectionTitle = styled.h1`
    margin: 25px;
`;
export const InfoSectionSubtext = styled.h3`
    max-width: 30vw;
    padding: 10px;
    text-align: center;
`;
export const InfoSectionBullets = styled.ul``;
export const InfoSectionBullet = styled.li`
    display: list-item;
    margin-bottom: 50px;
    color: inherit;
    list-style: square;
    margin: 10px 0;
`;

