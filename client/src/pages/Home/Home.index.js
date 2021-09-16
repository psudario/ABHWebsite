import React, { useEffect } from 'react'

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
import { HomePageData } from '../../Data.js';



const Home = (props) => {

    useEffect(() => {
        props.setLocation('home');
    });

    return (
        <HomeWrapper>
            <Hero
                image={HomePageData.HeroData.image}
                title={HomePageData.HeroData.title}
                text={HomePageData.HeroData.text}
            />
            <Mission
                title={HomePageData.MissionData.title}
                text={HomePageData.MissionData.text}
                backgroundColor={HomePageData.MissionData.backgroundColor}
                textColor={HomePageData.MissionData.textColor}
            />
            <BackgroundImage
                image={HomePageData.BackgroundImages.kitchen}
            />
            <InfoSection
                image={HomePageData.HomeInfo1.image}
                title={HomePageData.HomeInfo1.title}
                text={HomePageData.HomeInfo1.text}
                bullets={HomePageData.HomeInfo1.bullets}
            />
            <BackgroundImage
                image={HomePageData.BackgroundImages.livingRoom}
            />
            <InfoSection 
                leftText
                image={HomePageData.HomeInfo2.image}
                title={HomePageData.HomeInfo2.title}
                text={HomePageData.HomeInfo2.text}
                bullets={HomePageData.HomeInfo2.bullets}
            />
            <BackgroundImage
                image={HomePageData.BackgroundImages.bedroom}
            />
        </HomeWrapper>
    )
}

export default Home
