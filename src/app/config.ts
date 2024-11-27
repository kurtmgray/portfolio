import blogHome from '../../static/media/blog-home.png'
import pantryHome from '../../static/media/pantry-home.png'
import metBasic from '../../static/media/met-basic.png'
import twitterApi from '../../static/media/twitter-api.png'
import spotify from '../../static/media/whos-who.png'
import cook from '../../static/media/cook-fs-pm.png'
import fxg from '../../static/media/fxg.svg'
import mrpk from '../../static/media/mrpk.png'

import { Project, WorkExperience } from '../../types'

export const gitApiUrl = 'https://api.github.com/users/kurtmgray';

export const resumePdf = "https://drive.google.com/file/d/1xM7cs7uifo2gQUKyG-_4242eOpH6T9kP/view?usp=sharing"

export const aboutMe = "Technology professional and highly adaptable leader with experience in all aspects of the Software Development Life " +
    "Cycle, focused on business outcomes and clear communication."

export const baseBullets = [
    "3+ years of front-end development experience, building applications using JavaScript, React, HTML, and CSS, with a strong focus on user experience",
    "2+ years of back-end development experience, developing scalable and performant backend APIs and designing efficient data persistence layers with Java, Spring, Node, SQL and relational databases",
    "Strong organizational and communication skills, enabling efficient multitasking and prioritization in cross-functional environments",
    "Proficient in implementing CI/CD pipelines and deploying cloud-based applications, optimizing development work-flows and ensuring scalable, reliable systems",
    "Ownership mindset, proactively identifying and resolving challenges while fostering a collaborative environment"
]

export const frontendSkills = [
    "Javascript", "TypeScript", "React", "Next", "Angular", "HTML", "CSS"
]

export const backendSkills = [
    "Node", "Express", "Java", "Spring Boot", "No-SQL", "SQL", "JWT", "OAuth2"
]

export const skillAreas = [
    "Front End", "Full Stack", "Back End", "CI/CD", "API Development"
]

export const projects: Project[] = [
    {
        id: 1,
        name: "Brain Thoughts",
        description: "A Personal MERN stack multi-user blogging platform",
        bullets: [
            "Created a versatile multi-user platform for easy content management and admin privileges for efficient content control, enhancing the UX while promoting engagement",
            "Engineered the backend schema and deployed a RESTful API with Node.js, Express, and MongoDB to ensure efficient data management and seamless user experiences",
            "Enabled seamless user authentication by implementing JWT and Google OAuth2 via Passport, allowing for user account creation and secure Google login",
            "Implemented diverse features, including rich text editing, image uploads, user interactions, content management, and an intuitive admin interface"
        ],
        techStack: ["JavaScript", "React", "React Query", "Node.js", "Express.js", "MongoDB"
        ],
        deployedLink: "https://blog.kurtgray.dev",
        githubLink: "https://github.com/kurtmgray/blog-react",
        githubLink2: "https://github.com/kurtmgray/blog-api",
        projectImg: blogHome
    },
    {
        id: 2,
        name: "Cook Sys Project Board",
        description: "A Full Stack Project Management App",
        bullets: [
            "Enhanced user experience through leading a team through the creation and design of a dynamic project management dashboard",
            "Ensured cohesive data flow by integrating a robust data model with Angular Services singleton",
            "Achieved seamless backend integration by clarifying, refining, synchronizing API endpoints with the backend team",
            "DDelivered timely and tested feature releases by operating in sprint cycles alongside a diverse team using Git"
        ],
        techStack: ["TypeScript", "Angular", "Java", "Spring Boot", "PostgreSQL",],
        deployedLink: null,
        githubLink: "https://github.com/kurtmgray/project-board",
        githubLink2: null,
        projectImg: cook
    },
    
    {
        id: 3,
        name: "Social Media API",
        description: "A RESTful API for a social media platform",
        bullets: [
            "Implemented a RESTful Web Service with 30 endpoints for full CRUD functionality for Tweets, Users, Tags, Mentions, and Followers using Java and the Spring framework",
            "Utilized Spring Boot and JPA to implement endpoints that handle HTTP requests, backend logic, and converts data between API requests and its database models",
            "Optimized, tested, and troubleshot database operations in Postman, minimizing server overhead, enhancing the application’s efficiency and responsiveness",
            "Collaborated in an agile team setting powered by Git,  ensuring a robust and scalable product delivery on schedule"
        ],
        techStack: ["Java", "Spring Boot", "JPA", "PostgreSQL", "pgAdmin", "Git", "IntelliJ", "Maven"],
        deployedLink: null,
        githubLink: "https://github.com/kurtmgray/twitter-api",
        githubLink2: null,
        projectImg: twitterApi
    },
    {
        id: 4,
        name: "Pantry",
        description: "A full-stack recipe and pantry management app (in development)",
        bullets: [
            "Leveraged the OpenAI API for personalized recipe recommendations using user ingredients and preferences, enhancing personal relevance and engagement",
            "Architected the app for optimal CRUD operations, liking, and commenting on recipes, boosting user interaction, retention, and potential revenue growth",
            "Implemented robust authentication measures, including JWT and Google OAuth2, providing secure user authorization and enabling account creation or Google login",
        ],
        techStack: ["TypeScript", "React", "Next.js", "Prisma", "Postgres"],
        deployedLink: null,
        githubLink: "https://github.com/kurtmgray/pantry",
        githubLink2: null,
        projectImg: pantryHome
    },
    {
        id: 5,
        name: "Who’s Who?",
        description: "A musical guessing game utilizing the Spotify API",
        bullets: [
            "Created an intuitive, user-friendly game where players test their music knowledge through dynamically created questions and answers",
            "Increased user engagement by integrating user input to create a custom gaming experience, adapting questions based on players’ preferences",
            "Ensured efficient use of resources and minimized costs by optimizing Spotify Web API calls to reduce unnecessary requests",
            "Leveraged Angular best practices to ensure a smooth and scalable game platform through collaboration in a cross-functional team"
],
        techStack: ["TypeScript", "Angular", "HTML", "CSS", "Spotify Web API"],
        deployedLink: null,
        githubLink: 'https://github.com/kurtmgray/whos-who.git',
        githubLink2: null,
        projectImg: spotify
    },
    {
        id: 6,
        name: "Beat Boss",
        description: "A programmable metronome app for musical practice applications",
        bullets: [
            "A metronome for standard and programmable time-keeping functions, using Web Audio API and Tone.js", 
            "Implements React Hooks to meet the complex needs of interacting with real-time audio", 
            "Features include sound libraries, per-subdivision and master gain controls, visual component synced with audio",
            "Programmable mode features user–customizable segments of tempo, time signature, iteration count, sounds, and gain levels",
            "Modeled after the widely used “Dr. Beat” electronic metronome, with improved programming capabilities and UI",
        ],
        techStack: ["React", "Web Audio API", "Tone.js"],
        deployedLink: null,
        githubLink: "https://github.com/kurtmgray/metronome-react",
        githubLink2: null,
        projectImg: metBasic
    },
]

export const experiences: WorkExperience[] = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "FedEx Ground International",
        description: "Surface International Border Process and System Team",
        time: "November 2023 - present",
        techStack: ["Java", "Spring Boot", "Angular", "TypeScript", "Jenkins", "Oracle", "IBMi"],
        bullets: [
            "Delivered high-quality work in various settings, including full-team collaboration, pair programming, and independent projects, within an Agile team environment",
            "Led a team of 6 developers to successfully meet project deadlines and team objectives while navigatinga 20% increase in workload across multiple sprints",
            "Led end-to-end testing for a cross-ART initiative, delivering actionable feedback on data flow within the Surface Clearance system, resulting in a significant reduction in processing errors",
            "Authored and refined Jenkins pipelines for automated deployment to PCF, improving deployment efficiency and reliability across production and development environments",
            "Collaborated with architects and business experts to address and resolve architectural issues",
            "Created developer tools to enhance workflow efficiency across multiple teams"
        ],
        companyImg: {
            img: fxg,
            width: 200,
            height: 90
        }
    },
    {
        id: 2,
        role: "Freelance Web Developer",
        company: "Self Employed",
        description: "Full-Stack and CRM Development",
        time: "January 2022 - present",
        techStack: ["Javascript", "TypeScript", "Node", "Express", "MongoDB", "WordPress"],
        bullets: [
            "Designed and implemented RESTful APIs, managed data schemas, and developed user-friendly interfaces to ensure seamless functionality across full-stack applications",
            "Integrated secure auth protocols, including JWT and Google OAuth2, to facilitate user account creation and login",
            "Optimized state management for complex interactions using React hooks, React Query, and Redux and enhanced user engagement by integrating personalized APIs",
            "Built and currently maintain a local business WordPress site, managing updates to align with client needs"
        ],
        companyImg: null
    },
    {
        id: 3,
        role: "Instrumental Music Director",
        company: "Moorpark Unified School District",
        description: "Comprehensive Secondary Schoools Music Programs",
        time: "July 2005 - November 2023",
        techStack: [],
        bullets: [
            "Improved student achievement and retention through implementation of original curriculum and instructional materials",
            "Increased district funding for students and staff development for music and arts programs while advising on District Arts Council",
            "Enhanced educational outcomes by guiding and assessing specialist teaching staff, leading to improved instruction quality and student achievement",
            "Optimized a $50,000 annual budget to achieve measurable student outcomes and community impact"
        ],
        companyImg: {
            img: mrpk,
            width: 150,
            height: 150
        }
    }
]