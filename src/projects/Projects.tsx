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
    <div className="row">
    <div className="col info-section">
        <h1 className='title'>Projects</h1>
        <Project title="CANY Tour Guide" imgSrc={canyimage} url={CanyUrl} open={Cany} />
        <Project title="EasyWay" imgSrc={easyway} url={EasywayUrl} open={Easyway} />
        <Project title="Daily You" imgSrc={daily} url={DailyyouUrl} open={Dailyyou} />
        <Project title="Hope" imgSrc={hope} url={HopeUrl} open={Hope} />
        <Project title="Student Hub" imgSrc={studenthub} url={StudenthubUrl} open={Studenthub} />
        <Project title="Space Invader" imgSrc={spaceinvader} url={SpaceinvaderUrl} open={Spaceinvader} />
        <Project title="Friendly Car Dealership" imgSrc={cardealer} url={CardealerUrl} open={Cardealer} />
        <Project title="NYC Taxi Trip" imgSrc={nyctaxi} url={NycTaxiUrl} open={NycTaxitrip} />
        <Project title="Audio Analysis" imgSrc={audioanalysis} url={AudioanalysisUrl} open={Audioanalysis} />

      </div>
    </div>
  );
};

export default Projects;