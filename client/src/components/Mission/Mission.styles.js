import styled from 'styled-components';

export const MissionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => {return props.backgroundColor}};
    color: ${props => {return props.textColor}};

    width: 100vw;
    min-height: 50vh;
    
`;

export const MissionTitle = styled.h1`
    margin-top: 25px;
    padding-bottom: 20px;
`;
export const MissionText = styled.h3`
    max-width: 60vw;
    text-align: center;
    padding-bottom: 2vh;
`;