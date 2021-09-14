import React from 'react'

// Custom Components
import Hero from '../../components/Hero/Hero.index.js';
import InfoSection from '../../components/InfoSection/InfoSection.index.js';
import Mission from '../../components/Mission/Mission.index.js';

// Styled Components
import {
    HomeWrapper,
    BackgroundImage
} from './Home.styles.js';

// Data
import {
    HeroData,
    MissionData,
    HomeInfo1,
    HomeInfo2,
    Contact,
    HomeBackgroundImages
} from '../../Data.js';



const Home = () => {
    return (
        <HomeWrapper>
            <Hero
                image={HeroData.image}
                title={HeroData.title}
                text={HeroData.text}
            />
            <Mission
                title={MissionData.title}
                text={MissionData.text}
                backgroundColor={MissionData.backgroundColor}
                textColor={MissionData.textColor}
            />
            <BackgroundImage
                image={HomeBackgroundImages.kitchen}
            />
            <InfoSection
                image={HomeInfo1.image}
                title={HomeInfo1.title}
                text={HomeInfo1.text}
            />
            <BackgroundImage
                image={HomeBackgroundImages.livingRoom}
            />
            <InfoSection 
                leftText
                image={HomeInfo2.image}
                title={HomeInfo2.title}
                bullets={HomeInfo2.bullets}
            />
            <BackgroundImage
                image={HomeBackgroundImages.bedroom}
            />
            <InfoSection 
                svg
                image={Contact.image}
                title={Contact.title}
                bullets={Contact.bullets}
            />
        </HomeWrapper>
    )
}

export default Home
