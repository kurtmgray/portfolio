import React from 'react';
import { skillAreas, frontendSkills, backendSkills } from '../config';

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <h3 className="skills__title">My Skill Areas</h3>
        <div className="skills__area">
          <div className="skills__area--container">
            {skillAreas.map((area: String, index) => (
              <div key={index} className="skills__area-item">
                {area}
              </div>
            ))}
          </div>
          <div className="skills__list--frontend">
            <h4 className="skills__title">Front End</h4>
            {frontendSkills.map((area: String, index) => (
              <div key={index} className="skills__item-frontend">
                {area}
              </div>
            ))}
          </div>
          <div className="skills__list--backend">
            <h4 className="skills__title">Back End</h4>
            {backendSkills.map((area, index) => (
              <div key={index} className="skills__item-backend">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
