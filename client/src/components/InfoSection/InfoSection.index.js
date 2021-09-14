import React from 'react'

// Styled Components
import {
    InfoSectionWrapper,
    InfoSectionImgWrapper,
    InfoSectionImg,
    InfoSectionTextWrapper,
    InfoSectionTitle,
    InfoSectionSubtext,
    InfoSectionBullets,
    InfoSectionBullet,
} from './InfoSection.styles.js';



const InfoSection = (props) => {

    return (
        <InfoSectionWrapper primaryTheme={props.primaryTheme} leftText={props.leftText}>
            <InfoSectionImgWrapper>
                <InfoSectionImg src={props.img}/>
            </InfoSectionImgWrapper>
            <InfoSectionTextWrapper>
                <InfoSectionTitle>
                    {props.title}
                </InfoSectionTitle>
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
