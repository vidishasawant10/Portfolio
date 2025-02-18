import React from "react";
import "./Skills.css";

const skills = [
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C#", icon: "devicon-csharp-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Android", icon: "devicon-android-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Vite", icon: "devicon-vitejs-plain colored" },
  { name: "Angular", icon: "devicon-angularjs-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "Material UI", icon: "devicon-materialui-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "jQuery", icon: "devicon-jquery-plain colored" },
  { name: "React Native", icon: "devicon-react-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Spring Boot", icon: "devicon-spring-original colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Microsoft SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
  { name: "Oracle Database", icon: "devicon-oracle-original colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "Jenkins", icon: "devicon-jenkins-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "Jira", icon: "devicon-jira-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "Selenium", icon: "devicon-selenium-original colored" },
  { name: "Google Cloud Platform (GCP)", icon: "devicon-googlecloud-plain colored" },
  { name: "Amazon Web Services (AWS)", icon: "devicon-amazonwebservices-plain colored" },
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Tools & Technologies</h2>
      <p className="skills-subtitle">
        The main area of expertise is full-stack development.
      </p>
      <p className="skills-description">
        Proficient in developing scalable web applications using modern front-end and back-end technologies.
        Experienced in cloud computing, database management, DevOps, and UI/UX design.
      </p>
      <p className="skills-link">
        Visit my <a href="https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a" target="_blank" rel="noopener noreferrer">LinkedIn</a> for more details.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <i className={`skill-icon ${skill.icon}`}></i>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
