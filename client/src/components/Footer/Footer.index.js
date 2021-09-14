import React from 'react'

// Styled Components
import {
    FooterWrapper,
    SocialMedia,
    SocialIcon,
    CopyrightWrapper,
    Copyright
} from './Footer.styles.js';

const Footer = (props) => {
    return (
        <FooterWrapper>
            <SocialMedia>
                <SocialIcon src={null}/>
                <SocialIcon src={null}/>
                <SocialIcon src={null}/>
            </SocialMedia>
            <CopyrightWrapper>
                <Copyright>
                    {props.text}
                </Copyright>
            </CopyrightWrapper>
        </FooterWrapper>
    )
}

export default Footer
