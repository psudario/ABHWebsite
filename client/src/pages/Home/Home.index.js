import React from 'react'

// Custom Components
import Hero from '../../components/Hero/Hero.index.js';
import InfoSection from '../../components/InfoSection/InfoSection.index.js';

// Styled Components
import {
    HomeWrapper,
    BackgroundImage
} from './Home.styles.js';

// Data
import {
    HeroData,
    HomeInfo1,
    HomeInfo2,
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
            <InfoSection
                image={HomeInfo1.image}
                title={HomeInfo1.title}
                text={HomeInfo1.text}
            />
            <BackgroundImage
                image={HomeBackgroundImages.kitchen}
            />
            <InfoSection 
                primaryTheme
                leftText
                image={HomeInfo2.image}
                title={HomeInfo2.title}
                bullets={HomeInfo2.bullets}
            />
            <BackgroundImage
                image={HomeBackgroundImages.livingRoom}
            />
        </HomeWrapper>
    )
}

export default Home
