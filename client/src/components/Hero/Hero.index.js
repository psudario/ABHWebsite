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
import HeroBackgroundImage from '../../static_files/jpg/HousePictures/913Victoria_FrontYard.jpg'
import ScrollArrow from '../../static_files/png/ScrollArrow.png';


const Hero = () => {
    return (
        <HeroWrapper backgroundImage={HeroBackgroundImage}>
            <HeroTextWrapper backgroundImage={HeroBackgroundImage}>
                <HeroMainText>A Blessed Home</HeroMainText>
                <HeroCopyText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Sed nisi lacus sed viverra. Nisl condimentum id venenatis a condimentum vitae sapien. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Velit laoreet id donec ultrices. Egestas diam in arcu cursus euismod. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. In vitae turpis massa sed elementum tempus egestas. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Vitae suscipit tellus mauris a. Sit amet nisl suscipit adipiscing bibendum est.
                    Volutpat consequat mauris nunc congue nisi vitae suscipit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Nec ullamcorper sit amet risus nullam eget felis. Amet cursus sit amet dictum sit amet justo. Consequat semper viverra nam libero justo laoreet sit amet cursus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Venenatis tellus in metus vulputate eu scelerisque. Et malesuada fames ac turpis egestas maecenas pharetra. Elit eget gravida cum sociis natoque penatibus et magnis. A scelerisque purus semper eget. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
                </HeroCopyText>
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
