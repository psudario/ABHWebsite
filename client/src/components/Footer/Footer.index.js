import React from 'react'

// Styled Components
import {
    FooterWrapper,
    SocialMedia,
    SocialIcon,
    CopyrightWrapper,
    Copyright
} from './Footer.styles.js';

// Custom Components
import InfoSection from '../InfoSection/InfoSection.index.js';

// Data
import { FooterData } from '../../Data.js';



const Footer = () => {
    return (
        <FooterWrapper>
                <div id="contact">
                <InfoSection 
                    svg
                    image={FooterData.contact.image}
                    title={FooterData.contact.title}
                    bullets={FooterData.contact.bullets}
                />
                </div>
            <SocialMedia>
                <SocialIcon src={null}/>
                <SocialIcon src={null}/>
                <SocialIcon src={null}/>
            </SocialMedia>
            <CopyrightWrapper>
                <Copyright>
                    {FooterData.copyright.text}
                </Copyright>
            </CopyrightWrapper>
        </FooterWrapper>
    )
}

export default Footer
