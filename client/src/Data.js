// Static Files
import Logo from './static_files/png/ABHLogo.png';
import HomeInfo1Img from './static_files/jpg/InfoSectionImages/StockPhoto3.jpg';
import HomeInfo2Img from './static_files/jpg/InfoSectionImages/StockPhoto1.jpg';
import HeroImg from './static_files/jpg/BackgroundImages/913Victoria_FrontYard.jpg';
import Kitchen from './static_files/jpg/BackgroundImages/KitchenPicture.jpg';
import LivingRoom from './static_files/jpg/BackgroundImages/LivingRoom.jpg';
import Bedroom from './static_files/jpg/BackgroundImages/Bedroom.jpg';

// Colors
const primaryColor = "#3a3a3a";
const secondaryColor = "#a4ac9c";



export const HomePageData = {
    BackgroundImages: {
        kitchen: Kitchen,
        livingRoom: LivingRoom,
        bedroom: Bedroom,
    },
    HeroData: {
        image:  HeroImg,
        title:  "A Blessed Home", 
        text: null,
    },
    MissionData: {
        title: "Our Message To You",
        text: [
            'Welcome to our blessed home! We are a small facility, managed by nurses with over 25 years of acute hospital care experience.',
            'We have taken every possible measure to ensure the comfort of our residents. From the location of the house, to the widening of our doorways, we are confident in our ability to increase our residents’ quality of life',
            'We also have spacious living areas and large front and backyards where our residents are sure to enjoy indoor and outdoor activities.',
            'Come and see us soon!'
        ],
        textColor: primaryColor,
        backgroundColor: secondaryColor
    },
    HomeInfo1: {
        image: HomeInfo1Img,
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',    
    },
    HomeInfo2: {
        image: HomeInfo2Img,
        title: 'Amenities',
        bullets: [
            '24/hr Resident Monitoring',
            'Nutrition Management',
            'Medication Administration',
            'Assistance with ADL',
            'Meals + Snacks',
            'Cleaning + Laundry',
            'Transportation',
            'Entertainment/Recreation'
        ]
    },

};

export const AboutPageData = {
    people: [
        {
            name: 'Remedios "Remy" Sudario',
            image: Logo,
            position: 'CEO | Co-Owner',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Kim',
            image: Logo,
            position: 'Co-Owner',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        }
    ],
    textSections: [
        {
            title: 'About Us!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ]
};

export const ResidentLifeData = {
    sections: [
        {
            title: null,
            text: null,
            bullets: null
        }
        
    ]
};

export const FooterData = {
    contact: {
        image: Logo,
        title: "Contact Information",
        bullets: [
            "Address: 913 Victoria Dr, Richmond, TX, 77469",
            "Phone: (713)382-1666",
            "Email: ablessedhome8@gmail.com",
            "Office Hours: Mon-Fri 8AM-6PM | Sat-Sun 12PM-4PM",
            "Visiting Hours: tentative"
        ]  
    },
    copyright: {
        text: "©2021 A BLESSED HOME, LLC. All rights reserved.",
        socials: [
            ['logo', 'link'],
            ['logo', 'link'],
            ['logo', 'link'],
        ]
    }
};


