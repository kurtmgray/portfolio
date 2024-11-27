import React from 'react';
import Skills from './Skills';
import { aboutMe, baseBullets } from '../config';

export default function About() {
  return (
    <div className="about-me" id="about-me">
      <h2 className="about-me__title">About Me</h2>
      <p className="about-me__content">{aboutMe}</p>
      <ul className="about-me__bullets">
        {baseBullets.map((bullet, index) => (
          <li key={index} className="about-me__bullets__item">
            {bullet}
          </li>
        ))}
      </ul>
      <Skills />
    </div>
  );
}
