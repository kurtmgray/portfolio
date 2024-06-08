import React from 'react';
import { experiences } from '../config';
import { WorkExperience } from '../../../types';
import Image from 'next/image';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="projects" id="projects">
      <h2 className="project__title">Work Experience</h2>
      {experiences.map((job: WorkExperience) => (
        <div className="project" key={job.id}>
          <div className="project__container">
            <div className="project__container--title">
              <h3>{job.role}</h3>
            </div>
            <div className="project__container--content">
              <div className="project__container--image">
                <Image
                  src={job.companyImg ? job.companyImg : ''}
                  alt={job.company}
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h3>{job.company}</h3>
              </div>
              <div className="project__container--info">
                <div className="project__container--description">
                  <p>
                    {job.description}: {job.time}
                  </p>
                </div>
                <div className="project__container--bullets">
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                {job.techStack.length > 0 && (
                  <div className="project__container--tech">
                    <p>
                      Environment:{' '}
                      {job.techStack.map((tech, i) => (
                        <span key={tech} className="tech-stack__item">
                          {tech}{' '}
                          {i < job.techStack.length - 1 && (
                            <span className="separator">|</span>
                          )}{' '}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="project__container--links">
              {job.githubLink && (
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
              )} */}
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
