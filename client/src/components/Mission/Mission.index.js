import React from 'react';

import {
    MissionWrapper,
    MissionTitle,
    MissionText
} from './Mission.styles.js';

const Mission = (props) => {
    return (
        <MissionWrapper
            backgroundColor={props.backgroundColor}
            textColor={props.textColor}
        >
            <MissionTitle>{props.title}</MissionTitle>
            <MissionText>{props.text}</MissionText>
        </MissionWrapper>
    )
}

export default Mission;
