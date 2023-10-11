import React from 'react';
import Image from 'next/image';
import { projects } from '../config';
import { Project } from '../../../types';
import Link from 'next/link';
import GithubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

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
            <div className="project__container--content">
              <div className="project__container--image">
                <Image
                  src={project.projectImg ? project.projectImg : ''}
                  alt={project.name}
                  width={350}
                  height={300}
                />
              </div>
              <div className="project__container--info">
                <div className="project__container--description">
                  <h4>{project.description}</h4>
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
                    Environment:{' '}
                    {project.techStack.map((tech, i) => (
                      <span key={tech} className="tech-stack__item">
                        {tech}{' '}
                        {i < project.techStack.length - 1 && (
                          <span className="separator">|</span>
                        )}{' '}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="project__container--links">
              {project.githubLink && (
                <Link
                  target="_blank"
                  href={project.githubLink ? project.githubLink : ''}
                >
                  <button>
                    <GithubIcon /> {project.id === 1 ? ' Frontend' : ' Github'}
                  </button>
                </Link>
              )}
              {project.githubLink2 && (
                <Link target="_blank" href={project.githubLink2}>
                  <button>
                    <GithubIcon /> {project.id === 1 ? ' API' : ' Github'}
                  </button>
                </Link>
              )}
              {project.deployedLink && (
                <Link
                  target="_blank"
                  href={project.deployedLink ? project.deployedLink : ''}
                >
                  <button>
                    <LaunchIcon /> Live
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
