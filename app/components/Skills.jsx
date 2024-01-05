import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="wrapper">
      <h2 className="info-title">Skills</h2>
      <h2 className="info-title">Education</h2>
      <div className="wrapper-info">
        <ul className="skills">
          <div>
            <li className="skills-item">HTML5</li>
            <li className="skills-item">CSS3</li>
            <li className="skills-item">JavaScript</li>
            <li className="skills-item">React</li>
            <li className="skills-item">Next.js</li>
          </div>
          <div>
            <li className="skills-item">Bootstrap</li>
            <li className="skills-item">Tailwind</li>
            <li className="skills-item">Sass</li>
            <li className="skills-item">Git</li>
            <li className="skills-item">GitHub</li>
          </div>
        </ul>
      </div>
      <div className="wrapper-info">
        <p className="education">
          9th grade student at school 169. <br /> <br />
          The courses will end in mid-February 2024, then there will be a total
          of 8 months of professional training in Frontend. <br />
          <br />2 years of English, end of B2 and start of C1 with fully
          completed IELTS courses <br />
          <br />
          Native speaker of Uzbek and Russian languages.
        </p>
      </div>
    </div>
  );
};

export default Skills;
