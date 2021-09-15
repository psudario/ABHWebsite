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
            {props.text ?
                props.text.map(paragraph => {
                    return <MissionText>{paragraph}</MissionText>  
                })
            : null}
        </MissionWrapper>
    )
}

export default Mission;
