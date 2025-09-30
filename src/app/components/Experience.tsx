import React from 'react';
import { experiences } from '../config';
import { WorkExperience } from '../../../types';
import Image from 'next/image';

export default function Experience() {
  return (
    <div className="experiences" id="experiences">
      <h2 className="experience__title">Work Experience</h2>
      {experiences.map((job: WorkExperience) => (
        <div className="experience" key={job.id}>
          <div className="experience__container">
            <div className="experience__container--title">
              <h3>{job.role}</h3>
            </div>
            <div className="experience__container--content">
              {job.companyImg && (
                <div className="experience__container--image">
                  <Image
                    src={job.companyImg.img ? job.companyImg.img : ''}
                    alt={job.company}
                    width={job.companyImg.width}
                    height={job.companyImg.height}
                  />
                </div>
              )}
              <div>
                <h3>{job.company}</h3>
              </div>
              <div className="experience__container--info">
                <div className="experience__container--description">
                  <p>
                    {job.description}: <span className="time">{job.time}</span>
                  </p>
                </div>
                <div className="experience__container--bullets">
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                {job.techStack.length > 0 && (
                  <div className="experience__container--tech">
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
            {/* <div className="experience__container--links">
              {job.githubLink && (
                <Link
                  target="_blank"
                  href={experience.githubLink ? experience.githubLink : ''}
                >
                  <button>
                    <GithubIcon /> {experience.id === 1 ? ' Frontend' : ' Github'}
                  </button>
                </Link>
              )}
              {experience.githubLink2 && (
                <Link target="_blank" href={experience.githubLink2}>
                  <button>
                    <GithubIcon /> {experience.id === 1 ? ' API' : ' Github'}
                  </button>
                </Link>
              )}
              {experience.deployedLink && (
                <Link
                  target="_blank"
                  href={experience.deployedLink ? experience.deployedLink : ''}
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
