import React, { useEffect } from 'react'

import {
    AboutPageWrapper,
    AboutContentWrapper,
    AboutHeadingWrapper,
    AboutTitle,
    AboutMessage,

    AboutSectionWrapper,
    AboutSectionName,
    AboutSectionImgWrapper,
    AboutSectionImg,
    AboutSectionPosition,
    AboutSectionText,

} from './About.styles.js';

// Data
import { AboutPageData } from '../../Data.js';


// Custom components
const AboutSection = (props) => {

    return(
        <AboutSectionWrapper>
            <AboutSectionName>
                {props.name}
            </AboutSectionName>
            <AboutSectionImgWrapper>
                <AboutSectionImg image={props.image}/>
            </AboutSectionImgWrapper>
            <AboutSectionPosition>
                {props.position}
            </AboutSectionPosition>
            <AboutSectionText>
                {props.text}
            </AboutSectionText>
        </AboutSectionWrapper>
    );
}


const About = (props) => {

    useEffect(()=>{
        props.setLocation('about');
    });

    return (
        <AboutPageWrapper>
            <AboutContentWrapper>
                {AboutPageData.people.map(person => {
                    return(
                        <AboutSection
                            name={person.name}
                            image={person.image}
                            position={person.position}
                            text={person.text}
                        />
                    );
                })}

                {AboutPageData.textSections.map((section) => {
                    return(
                        <AboutHeadingWrapper>
                            <AboutTitle>
                                {section.title}
                            </AboutTitle>
                            <AboutMessage>
                                {section.text}
                            </AboutMessage>
                        </AboutHeadingWrapper>
                    );
                })}

            </AboutContentWrapper>
        </AboutPageWrapper>
    )
}

export default About
