import styled from 'styled-components';

export const InfoSectionWrapper = styled.div`
    height: 60vh;
    background-color: brown;

    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-areas: 
        "col1 col2"
        "col1 col2";

`;

export const InfoSectionImgWrapper = styled.div`
    grid-area: col1;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InfoSectionTextWrapper = styled.div`
    grid-area: col2;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const InfoSectionTitle = styled.h1`
    margin: 25px 0px;
`;
export const InfoSectionSubtext = styled.h3`
    max-width: 30vw;
`;

export const InfoSectionImg = styled.div`
    background-image: url(${props => {return props.src}});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;


    height: 50vh;
    width: 50vh;
    background-color: white;
    border-radius: 50%;
`;

