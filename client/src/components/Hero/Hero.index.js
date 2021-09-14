import React from 'react'

// Styled Components
import {
    HeroWrapper,
    HeroTextWrapper,
    HeroMainText,
    HeroCopyText,
    
    HeroScrollWrapper,
    HeroScrollText,
    HeroScrollImg,
    HeroFadeWrapper
} from './Hero.styles.js';

// Static Files
import ScrollArrow from '../../static_files/png/ScrollArrow.png';


const Hero = (props) => {
    return (
        <HeroWrapper backgroundImage={props.image}>
            <HeroTextWrapper>
                <HeroMainText>{props.title}</HeroMainText>
                <HeroCopyText>{props.text}</HeroCopyText>
            </HeroTextWrapper>
                <HeroFadeWrapper>
                    <HeroScrollWrapper>
                            <HeroScrollText>Keep Scrolling</HeroScrollText>
                            <HeroScrollImg src={ScrollArrow}/>
                    </HeroScrollWrapper>
                </HeroFadeWrapper>

        </HeroWrapper>
    )
}

export default Hero
