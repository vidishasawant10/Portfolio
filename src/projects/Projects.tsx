import React from 'react'
import './Projects.css'
import canyimage from './CANYTour.png'
import daily from './DailyYou.png'
import easyway from './EasyWay.png'
import spaceinvader from './SpaceInvader.png'
import hope from './Hope.png'
import studenthub from './StudentHub.png'
import nyctaxi from './nyctaxi.png'
import audioanalysis from './audioanalysis.png'
import cardealer from './cardealer.png'

type ProjectProps = {
  title: string;
  imgSrc: string;
  url: string;
  open: () => void;
};

const Project: React.FC<ProjectProps> = ({ title, imgSrc, url, open }) => {
  const [hover, setHover] = React.useState(false);

  return (

    <div className="project" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={open}>
      <img src={imgSrc}/>
      <div className="title">{title}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className={hover ? "hover-link" : "hidden"}>
      </a>
    </div>
  );
};

const Projects = () => {
  const CanyUrl = "https://github.com/vidishasawant10/CANY-Tour-Guide";
  const EasywayUrl = "https://github.com/vidishasawant10/EasyWay";
  const HopeUrl = "https://github.com/vidishasawant10/Hope";
  const DailyyouUrl = "https://github.com/vidishasawant10/Daily-You";
  const SpaceinvaderUrl = "https://github.com/vidishasawant10/spaceInvader";
  const StudenthubUrl = "https://github.com/vidishasawant10/StudentHub";
  const CardealerUrl = "https://github.com/vidishasawant10/Friendly-Car-Dealership";
  const NycTaxiUrl = "https://github.com/vidishasawant10/NYCTaxiTrip";
  const AudioanalysisUrl = "https://github.com/vidishasawant10/AudioAnalysis";

  const Cany = () => window.open(CanyUrl, "_blank");
  const Easyway = () => window.open(EasywayUrl, "_blank");
  const Hope = () => window.open(HopeUrl, "_blank");
  const Studenthub = () => window.open(StudenthubUrl, "_blank");
  const Dailyyou = () => window.open(DailyyouUrl, "_blank");
  const Spaceinvader = () => window.open(SpaceinvaderUrl, "_blank");
  const Cardealer = () => window.open(CardealerUrl, "_blank");
  const NycTaxitrip = () => window.open(NycTaxiUrl, "_blank");
  const Audioanalysis = () => window.open(AudioanalysisUrl, "_blank");


  return (
    <div className="row justify-content-center" id='projects'>
   {/* <div className="col">  */}
       <h1 className='title'>Projects</h1> 
        {/* <Project title="CANY Tour Guide" imgSrc={canyimage} url={CanyUrl} open={Cany} />
        <Project title="EasyWay" imgSrc={easyway} url={EasywayUrl} open={Easyway} />
        <Project title="Hope" imgSrc={hope} url={HopeUrl} open={Hope} />
        <Project title="Student Hub" imgSrc={studenthub} url={StudenthubUrl} open={Studenthub} />
        <Project title="Space Invader" imgSrc={spaceinvader} url={SpaceinvaderUrl} open={Spaceinvader} />
        <Project title="Friendly Car Dealership" imgSrc={cardealer} url={CardealerUrl} open={Cardealer} />
        <Project title="NYC Taxi Trip" imgSrc={nyctaxi} url={NycTaxiUrl} open={NycTaxitrip} />
        <Project title="Audio Analysis" imgSrc={audioanalysis} url={AudioanalysisUrl} open={Audioanalysis} />
        <Project title="Daily You" imgSrc={daily} url={DailyyouUrl} open={Dailyyou} /> */}



<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="CANY Tour Guide" imgSrc={canyimage} url={CanyUrl} open={Cany} />
  </div>
  <div className="content">
    <p className="heading">CANY Tour Guide</p>
    <p>
      Languages Used:
    </p>
    <p>
      HTML, CSS, JavaScript, React, SCSS
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="EasyWay" imgSrc={easyway} url={EasywayUrl} open={Easyway} />
  </div>
  <div className="content">
    <p className="heading">EasyWay</p>
    <p>
      Platform / Languages Used:
    </p>
    <p>
      Agile Development, Angular, React, SCSS, Machine Learning, Jira, Cucumber, Cypress, Jira, Test Automation
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="Hope" imgSrc={hope} url={HopeUrl} open={Hope} />
  </div>
  <div className="content">
    <p className="heading">Hope</p>
    <p>
     Platform / Languages Used:
    </p>
    <p>
      Figma, UI / UX Designing, Jobs to be done + Personas, Research Questions
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="Student Hub" imgSrc={studenthub} url={StudenthubUrl} open={Studenthub} />
  </div>
  <div className="content">
    <p className="heading">Student Hub</p>
    <p>
      Platforms / Languages Used:
    </p>
    <p>
    Figma, Jobs to be Done, Personas, Research Questions, Bootstrap, Marvel 
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="Space Invader" imgSrc={spaceinvader} url={SpaceinvaderUrl} open={Spaceinvader} />
  </div>
  <div className="content">
  <p className="heading">Space Invader</p>
    <p>
      Platforms / Languages Used:
    </p>
    <p>
    Pygame, Python, PyCharm Community
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="Friendly Car Dealership" imgSrc={cardealer} url={CardealerUrl} open={Cardealer} />
  </div>
  <div className="content">
  <p className="heading">Friendly Car Dealership</p>
    <p>
      Platforms / Languages Used:
    </p>
    <p>
      SQL, Oracle Database  
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="NYC Taxi Trip" imgSrc={nyctaxi} url={NycTaxiUrl} open={NycTaxitrip} />
  </div>
  <div className="content">
  <p className="heading">NYC Taxi Trip</p>
    <p>
      Platforms / Languages Used:
    </p>
    <p>
      Python, Google Collab Notebook, Pandas, Matplotlib, NumPy
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="Audio Analysis" imgSrc={audioanalysis} url={AudioanalysisUrl} open={Audioanalysis} />
  </div>
  <div className="content">
  <p className="heading">Audio Analysis</p>
    <p>
      Platforms / Languages Used:
    </p>
    <p>
      Machine Learning, Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, Keras
    </p>
  </div>
  
</div>
</div>

<div className="card-container">
  <div className="card">
  <div className="img-content">
  <Project title="Daily You" imgSrc={daily} url={DailyyouUrl} open={Dailyyou} />
  </div>
  <div className="content">
    <p className="heading">Daily You</p>
    <p>
      Platforms / Languages Used:
    </p>
    <p>
      React Native, CSS
      </p>
  </div>
  
</div>
</div>
<p className='more'>See my Certifications and more about me on Linkedln and explore many projects on my GitHub profile.</p>
</div>
// </div>
  );
};

export default Projects;