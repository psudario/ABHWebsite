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
                <InfoSectionImg image={props.image}/>
            </InfoSectionImgWrapper>
            <InfoSectionTextWrapper>
                <InfoSectionTitle>
                    {props.title}
                </InfoSectionTitle>
                {props.bullets? 
                    <ul>
                        <li>The Queen's Gambit will go down</li>
                        <InfoSectionBullet className="Walter">Walter Steele was kidnapped</InfoSectionBullet>
                        {props.bullets.map(bullet => {
                            return (<InfoSectionBullet>{bullet}</InfoSectionBullet>)
                        })}
                    </ul>
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
