import styled from 'styled-components';

export const HomeWrapper = styled.div`
        
`;

export const BackgroundImage = styled.div`
    height: 50vh;

    background-image: url(${props => {return props.image}});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    box-shadow: inset 0 0 5px 0 black;
`;
