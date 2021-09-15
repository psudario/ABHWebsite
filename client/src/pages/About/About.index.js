import React from 'react'

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
import { AboutSections } from '../../Data.js';
import picture from '../../static_files/jpg/InfoSectionImages/TeaCup.jpg';


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


const About = () => {

    return (
        <AboutPageWrapper>
            <AboutContentWrapper>
                {AboutSections.people.map(person => {
                    return(
                        <AboutSection
                            name={person.name}
                            image={person.image}
                            position={person.position}
                            text={person.text}
                        />
                    );
                })}

                <AboutHeadingWrapper>
                    <AboutTitle>
                        About Us!
                    </AboutTitle>
                    <AboutMessage>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </AboutMessage>
                </AboutHeadingWrapper>
            </AboutContentWrapper>
        </AboutPageWrapper>
    )
}

export default About
