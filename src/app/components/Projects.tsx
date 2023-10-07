import React from 'react';
import Image from 'next/image';
import { projects } from '../config';
import { Project } from '../../../types';
import Link from 'next/link';
import GithubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      {projects.map((project: Project) => (
        <div className="project" key={project.id}>
          <div className="project__container">
            <div className="project__container--title">
              <h3>{project.name}</h3>
            </div>
            <div className="project__container--image">
              <Image
                src={project.projectImg ? project.projectImg : ''}
                alt={project.name}
                width={350}
                height={300}
              />
            </div>
            <div className="project__container--description">
              <p>{project.description}</p>
            </div>
            <div className="project__container--bullets">
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="project__container--tech">
              <p>
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
            </div>
            <div className="project__container--links">
              <Link href={project.githubLink ? project.githubLink : ''}>
                <button className="project__container--links--github">
                  <GithubIcon /> {project.id === 1 ? 'Frontend' : 'Github'}
                </button>
              </Link>
              {project.githubLink2 && (
                <Link href={project.githubLink2}>
                  <button className="project__container--links--github">
                    <GithubIcon /> {project.id === 1 ? 'API' : 'Github'}
                  </button>
                </Link>
              )}
              {project.deployedLink && (
                <Link href={project.deployedLink ? project.deployedLink : ''}>
                  <button className="project__container--links--live">
                    Live
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
