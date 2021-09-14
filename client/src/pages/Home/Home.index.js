import React from 'react'

// Custom Components
import Hero from '../../components/Hero/Hero.index.js';
import InfoSection from '../../components/InfoSection/InfoSection.index.js';

// Styled Components
import {
    HomeWrapper
} from './Home.styles.js';

// Data
import { HomeInfo1 } from '../../Data.js';



const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <InfoSection
                img={HomeInfo1.image}
                title={HomeInfo1.title}
                // text={HomeInfo1.text}
                bullets={HomeInfo1.bullets}
            />
        </HomeWrapper>
    )
}

export default Home
