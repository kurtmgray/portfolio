import React from 'react';
import { skillAreas, frontendSkills, backendSkills } from '../config';

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">My Skills</h2>
        <div className="skills__area">
          {skillAreas.map((area: String, index) => (
            <div key={index} className="skills__area--container">
              <div className="skills__area--list">
                <div key={index} className="skills__area--item">
                  {area}
                </div>
              </div>
            </div>
          ))}
          <div className="skills__area">
            <h3 className="skills__frontend">Front End</h3>
            {frontendSkills.map((area: String, index) => (
              <div key={index} className="skills__area--container">
                <div className="skills__area--list">
                  <div key={index} className="skills__area--item">
                    {area}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__area">
            <h3 className="skills__backend">Back End</h3>
            {backendSkills.map((area, index) => (
              <div key={index} className="skills__area--container">
                <div className="skills__area--list">
                  <div key={index} className="skills__area--item">
                    {area}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
