import styled from 'styled-components';

const primaryColor = "pink";
const secondaryColor = "brown";


export const InfoSectionWrapper = styled.div`

    height: 60vh;
    background-color: ${props => {
        return props.primaryTheme? primaryColor : secondaryColor;
    }};
    color: ${props => {
        return props.primaryTheme? secondaryColor : primaryColor;
    }};

    display: grid;
    grid-template-columns: 50vw 50vw;
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
    background-size: cover;
    background-repeat: no-repeat;

    height: 50vh;
    width: 50vh;
    background-color: white;
    border-radius: 50%;

`;



export const InfoSectionTextWrapper = styled.div`
    grid-area: col2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const InfoSectionTitle = styled.h1`
    margin: 25px 0px;
`;
export const InfoSectionSubtext = styled.h3`
    width: 30vw;
`;
export const InfoSectionBullets = styled.ul`
`;
export const InfoSectionBullet = styled.li`
    color: inherit;
    margin: 10px 0;
`;

