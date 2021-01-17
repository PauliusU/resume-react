import "./index.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContentBox from "./components/ContentBox";
import Divider from "./components/Divider";
import EducationContentBox from "./components/EducationContentBox";
import Link from "../Link";
import List from "../List";
import Pill from "./components/Pill";
import WorkExperience from "./components/WorkExperience";
import translations from "../../translations";

function Main({ lang }) {
  const {
    links,
    aboutMe,
    education,
    personalSkills,
    technicalSkills,
    workExperience,
  } = translations[lang];

  return (
    <main className="main">
      <ContentBox title={links.title} className="links">
        <List listItems={[]}>
          <Link linkLocation="https://www.linkedin.com/in/paulius-uosis/">
            <FaLinkedin />
            LINKEDIN/paulius-uosis
          </Link>
          <Link linkLocation="https://github.com/PauliusU/">
            <FaGithubSquare />
            GITHUB/PauliusU
          </Link>
        </List>
      </ContentBox>

      <ContentBox title={aboutMe.title} className="about">
        {aboutMe.entries.map((entry, index) => (
          <p key={index}>{entry}</p>
        ))}
      </ContentBox>

      <ContentBox title={education.title} className="education">
        {education.entries.map((entry, index) => {
          if (entry.type === "divider") {
            return <Divider key={index} isFancy={false} isShort={true} />;
          }
          return (
            <EducationContentBox
              key={index}
              institution={entry.institution}
              duration={entry.duration}
              studyProgram={entry.studyProgram}
            />
          );
        })}
      </ContentBox>

      <ContentBox title={personalSkills.title} className="personal-skills">
        {personalSkills.entries.map((entry, index) => (
          <Pill key={index} color={entry.color}>
            {entry.title}
          </Pill>
        ))}
      </ContentBox>

      <ContentBox title={technicalSkills.title} className="technical-skills">
        <Pill color="green">HTML</Pill>
        <Pill color="green">CSS/SCSS</Pill>
        <Pill color="yellow">Javascript</Pill>
        <Pill color="yellow">React.js</Pill>
      </ContentBox>

      <ContentBox title={workExperience.title} className="work-experience">
        <div className="work-experience__container">
          {workExperience.entries.map((entry, index) => (
            <WorkExperience
              key={index}
              position={entry.position}
              employer={entry.employer}
              duration={entry.duration}
              description={entry.description}
            />
          ))}
        </div>
      </ContentBox>

      <Divider isFancy={false} />
    </main>
  );
}

export default Main;
