import React from 'react';
import { GitHubResponse } from '../../../types';
import Skills from './Skills';
import { aboutMe } from '../config';

type AboutProps = {
  data: GitHubResponse;
};

export default function About({ data }: AboutProps) {
  return (
    <div className="about-me" id="about-me">
      <h2 className="about-me__title">About Me</h2>
      <p className="about-me__content">{aboutMe}</p>
      <Skills />
    </div>
  );
}
