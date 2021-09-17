import styled from 'styled-components';


export const BackgroundWrapper = styled.div`
    padding-top: 12vh;
    display: flex;
    background-color: #666F75;
    justify-content: center;
`;
export const PageWrapper = styled.div`
    max-width: 80vw;
    background-color: #fafafa;
    padding: 25px 50px;
    min-height: 100vh;
    box-shadow: 0 0 10px black;
`;
export const PageHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;
export const MainTitle = styled.h1`
    font-size: 3em;
    text-align: center;
`;
export const MainText = styled.p``;

export const SectionWrapper = styled.div`
    margin-bottom: 5em;

    display: grid;
    grid-template-columns: "60% 40%";
    grid-template-rows: "25% 25% 25% 25%";
    grid-template-areas:${props => {
        return(props.leftImg?
            `
            "title title"
            "text text"
            "image bullet"
            ` :
            `
            "title title"
            "text text"
            "bullet image"
            `
        );
    }};
    grid-gap: 1em;
    overflow: none;

    min-height: 25vh;
`;
export const TitleWrapper = styled.div`
    grid-area: title;
`;
export const SectionTitle = styled.h2`

`;
export const SectionImg = styled.div`
    height: 100%;
    min-width: 30vw;

    background-image: url(${props => {return props.image}});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    grid-area: image;
`;
export const SectionText = styled.p`
    grid-area: text;
    margin-bottom: 1em;
`;
export const SectionBullets = styled.ul`
    grid-area: bullet;
    list-style: none;
`;
export const SectionBullet = styled.li`
    margin-bottom: 10px;
`;
