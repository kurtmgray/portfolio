import { StaticImageData } from "next/image";

export type GitHubResponse = {
    avatar_url: string | null,
    bio: string | null
}

export type Project = {
    id: number,
    name: string,
    description:string,
    bullets: string[],
    techStack: string[],
    deployedLink: string | null,
    githubLink: string | null,
    githubLink2: string | null,
    projectImg: StaticImageData | string | null
}

export type WorkExperience = {
    id: number,
    role: string,
    company: string,
    companyImg: {
        img: StaticImageData | string | null,
        width: number,
        height: number
    } | null
    description:string,
    time: string,
    techStack: string[],
    bullets: string[],
}

 type Message = {
    text: string;
    sender: string;
  };