import styled from 'styled-components';

export const HomeWrapper = styled.div`
        
`;

export const BackgroundImage = styled.div`
    height: 50vh;

    width: 100vw;
    max-width: 100%;
    background-image: url(${props => {return props.image}});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;

    box-shadow: inset 0 0 5px 0 black;
`;
