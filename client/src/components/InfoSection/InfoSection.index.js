import React from 'react'

// Styled Components
import {
    InfoSectionWrapper,
    InfoSectionImgWrapper,
    InfoSectionImg,
    InfoSectionTextWrapper,
    InfoSectionTitle,
    InfoSectionSubtext
} from './InfoSection.styles.js';

import TestPicture from '../../static_files/jpg/HousePictures/913Victoria_FrontYard.jpg';


const InfoSection = (props) => {
    return (
        <InfoSectionWrapper>
            <InfoSectionImgWrapper>
                <InfoSectionImg src={props.img}/>
            </InfoSectionImgWrapper>
            <InfoSectionTextWrapper>
                <InfoSectionTitle>
                    {props.title}
                </InfoSectionTitle>
                <InfoSectionSubtext>
                    {props.text}
                </InfoSectionSubtext>
            </InfoSectionTextWrapper> 
        </InfoSectionWrapper>
    )
}

export default InfoSection
