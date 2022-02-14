// Static Files
import Logo from './static_files/png/ABHLogo.png';
import HomeInfo1Img from './static_files/jpg/InfoSectionImages/StockPhoto3.jpg';
import HomeInfo2Img from './static_files/jpg/InfoSectionImages/StockPhoto1.jpg';
import HeroImg from './static_files/jpg/BackgroundImages/913Victoria_FrontYard.jpg';
import Kitchen from './static_files/jpg/BackgroundImages/KitchenPicture.jpg';
import LivingRoom from './static_files/jpg/BackgroundImages/LivingRoom.jpg';
import Bedroom from './static_files/jpg/BackgroundImages/Bedroom.jpg';
import Landscape from './static_files/svg/bavaria.svg';
import FamilySvg from './static_files/svg/family.svg';
import HouseSvg from './static_files/svg/houseSvg.svg';


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

    HomeInfo2: {
        image: HomeInfo1Img,
        title: 'Why Choose An Assisted Living Facility?',
        text: 'Assisted living facilities are a perfect place for seniors to receive care while still maintaining a sense of community. Receiving care in a home-like environment can be preferrable to seniors who are tired of clinical settings. With an assisted living facility, seniors are able to gain more privacy and independence.'
    },

};

export const AboutPageData = {
    people: [
        {
            name: 'Remedios "Remy" Sudario and Joel Sudario',
            image: Logo,
            position: 'CEO | Co-Owner',
            text: 'Joel and Remy are both nurses with over 25 years of hospital experience. Both Joel and Remy come from big families and have siblings in the medical field. Their family gave them motivation to start a residential assisted living that would be a home to all  their residents',
        },
        {
            name: 'Kim',
            image: Logo,
            position: 'Co-Owner',
            text:'Kim’s late father struggled with cancer and lived in an assisted care facility. Kim helped to establish A Blessed Home to help people like her father.',
        }
    ],
    textSections: [
        {
            title: 'About Us!',
            text: 'A Blessed Home is a family-oriented facility run by nurses specializing in adult and geriatric care. With a passion for patient care and a wealth of medical knowledge clients can be reassured that their family is in capable hands and caring hearts.'
        },
    ]
};

export const ResidentLifeData = {
    heading:{
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    sections: [
        {
            title: 'Services Provided',
            image: HouseSvg,
            text: 'We take pride in being able to provide you and your loved ones with what they need.',
            bullets: [
                '24/hr Resident Monitoring',
                'Nutrition Management',
                'Medication Administration',
                'Assistance with ADL’s',
                'Meals + Snacks',
                'Cleaning + Laundry',
                'Transportation',
                'Entertainment/Recreation',
            ]
        },
        {
            title: 'Location',
            image: Landscape,
            text: 'We are located in a small and quiet neighborhood close to everything you would need!',
            bullets: [
                'We are located in a small and quiet neighborhood',
                '2 minutes from OakBend Medical Center',
                '3 minutes from Fort Bend Dental',
                '8 minutes from 2 dialysis centers',
                '5 minutes from George Memorial Library',
                '5 minutes from Wessendorff Park and Clay Park',
                'Less than 10 minutes from Baptist, Catholic, and Methodist Churches',
                '15 minutes from First Colony Mall',
            ]
        },
        {
            title: 'Visitation Policies',
            image: FamilySvg,
            text: 'Come visit your family during our visiting hours. We can accomodate you and your family in our spacious facility.',
            bullets: [
                'Due to covid, we request that visitors schedule appointments via call, text, or email at least 24 hrs prior.',
                'Call or text for any questions.',
                'Visitation Hours: 10am-6pm',
                'Office Hours: 8am-5pm',
            ]

        },
        
        
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
            "Visiting Hours: (281) 920-9072/(832) 971-3344"
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


