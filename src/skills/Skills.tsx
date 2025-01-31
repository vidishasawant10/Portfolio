import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", icon: "js.png" },
  { name: "React", icon: "react.png" },
  { name: "Vue", icon: "vue.png" },
  { name: "Node", icon: "node.png" },
  { name: "WordPress", icon: "wordpress.png" },
  { name: "PHP", icon: "php.png" },
  { name: "SASS", icon: "sass.png" },
  { name: "CSS3", icon: "css3.png" },
  { name: "Bootstrap", icon: "bootstrap.png" },
  { name: "HTML5", icon: "html5.png" },
  { name: "Git", icon: "git.png" },
  { name: "Super-powers", icon: "superpowers.png" },
  { name: "Visual Studio", icon: "visualstudio.png" },
  { name: "Figma", icon: "figma.png" },
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills & Experience</h2>
      <p className="skills-subtitle">
        The main area of expertise is front-end development (client-side of the web).
      </p>
      <p className="skills-description">
        HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. 
        I also have full-stack developer experience with one of the most popular open-source CMS on the web – WordPress.
      </p>
      <p className="skills-link">
        Visit my <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Linkedin</a> for more details.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={`/assets/icons/${skill.icon}`} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
