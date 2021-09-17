import React from 'react'

// Styled Components
import {
    InfoSectionWrapper,
    InfoSectionImgWrapper,
    InfoSectionImg,
    InfoSectionTextWrapper,
    InfoSectionTitleWrapper,
    InfoSectionTitle,
    InfoSectionSubtext,
    InfoSectionBullets,
    InfoSectionBullet,
} from './InfoSection.styles.js';



const InfoSection = (props) => {

    return (
        <InfoSectionWrapper primaryTheme={props.primaryTheme} leftText={props.leftText}>
            <InfoSectionImgWrapper>
                <InfoSectionImg svg={props.svg} image={props.image}/>
            </InfoSectionImgWrapper>
            <InfoSectionTitleWrapper>
                <InfoSectionTitle>
                    {props.title}
                </InfoSectionTitle>
            </InfoSectionTitleWrapper>
            <InfoSectionTextWrapper>
                {props.bullets? 
                    <InfoSectionBullets>
                        {props.bullets.map(bullet => {
                            return (<InfoSectionBullet>{bullet}</InfoSectionBullet>)
                        })}
                    </InfoSectionBullets>
                    : 
                    <InfoSectionSubtext>
                        {props.text}
                    </InfoSectionSubtext>
                }
            </InfoSectionTextWrapper>
        </InfoSectionWrapper>
    )
}

export default InfoSection
