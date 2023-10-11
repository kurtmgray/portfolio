import blogHome from '../../static/media/blog-home.png'
import pantryHome from '../../static/media/pantry-home.png'
import metBasic from '../../static/media/met-basic.png'
import twitterApi from '../../static/media/twitter-api.png'

import { Project } from '../../types'

export const aboutMe = "A skilled software developer focused on solving problems with clean, maintainable code with development driven by SOLID principles. My passion for building mechanisms to creatively address real-world problems extends from my considerable experience as a teacher, curriculum developer, composer, visual designer, and team leader in the education space. As a software developer I have taken those skills into full-stack development, integrating powerful and relevant technologies in the Javascript and Java ecosystems. I graduated from the FastTrack Full-Stack Developer program, completed The Odin Project web developer curriculum, and hold bachelors and masters degrees from leading universities."

export const frontendSkills = [
    "Javascript", "TypeScript", "React", "Next", "Angular", "HTML", "CSS"
]

export const backendSkills = [
    "Node", "Express", "Java", "Spring Boot", "No-SQL", "SQL", "JWT", "OAuth2"
]

export const skillAreas = [
    "Front End", "Full Stack", "Back End", "REST API Development", "Database Management"   
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
        id: 3,
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
        id: 4,
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