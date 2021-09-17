import React, { useEffect } from 'react'

// styled components
import {
    BackgroundWrapper,
    PageWrapper,
    PageHeading,
    TitleWrapper,
    MainTitle,
    MainText,
    SectionWrapper,
    SectionTitle,
    SectionText,
    SectionImg,
    SectionBullets,
    SectionBullet,
} from './ResidentLife.styles.js';


// Data
import { ResidentLifeData } from '../../Data.js';

const ResidentLife = (props) => {

    useEffect(() => {
        props.setLocation('residentlife');
    });

    return (
        <BackgroundWrapper>
            <PageWrapper>
                <PageHeading>
                    <MainTitle>
                        {ResidentLifeData.heading.title}
                    </MainTitle>
                    <MainText>
                        {ResidentLifeData.heading.text}
                    </MainText>
                </PageHeading>
                {ResidentLifeData.sections.map((section, index) => {
                    return(
                        <SectionWrapper leftImg={Boolean(index%2)}>
                            <TitleWrapper>
                                <SectionTitle>
                                    {section.title}
                                </SectionTitle>
                            </TitleWrapper>
                            <SectionImg image={section.image}/>
                            <SectionText>
                                {section.text}
                            </SectionText>
                            <SectionBullets>
                                {section.bullets.map(bullet => {
                                    return(
                                        <SectionBullet>{bullet}</SectionBullet>
                                    );
                                })}
                            </SectionBullets>
                        </SectionWrapper>
                    );
                })}
            </PageWrapper>
        </BackgroundWrapper>
    )
}

export default ResidentLife
