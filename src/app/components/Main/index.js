import "./index.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContentBox from "../ContentBox";
import Divider from "../Divider";
import EducationContentBox from "../EducationContentBox";
import Link from "../Link";
import List from "../List";
import Pill from "../Pill";
import WorkExperience from "../WorkExperience";

function Main() {
  return (
    <main className="main">
      <ContentBox title="Links" className="links">
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
      <ContentBox title="About me" className="about">
        <p>
          I am a full-stack web developer, passionate about building websites
          and web applications. I specialize in JavaScript and PHP and have
          experience working with React.js. I also love trying out new
          technologies. That's why most of my side projects are written in
          Python.
        </p>
        <p>
          Before discovering my passion for web development, I was a legal
          specialist. My professional experience has allowed me to develop an
          excellent analytical capacity and problem-solving approach. I had the
          opportunity to work with many international clients and I enjoy
          collaborating on projects which help me grow professionally and
          personally.
        </p>
      </ContentBox>
      <ContentBox title="education" className="education">
        <EducationContentBox
          institution="CodeAcademy"
          duration="2020-2021"
          studyProgram="Full-Stack Web Development"
        />
        <Divider isFancy={false} />
        <EducationContentBox
          institution="Université de Bordeaux"
          duration="2009-2013"
          studyProgram="Master of Laws - LLM, European Union law and governance"
        />
      </ContentBox>
      <ContentBox title="personal skills" className="personal-skills">
        <Pill color="green">Teamwork</Pill>
        <Pill color="yellow">Communication</Pill>
        <Pill color="reddish">Organization</Pill>
        <Pill>Leadership</Pill>
      </ContentBox>
      <ContentBox title="technical skills" className="technical-skills">
        <Pill color="green">HTML</Pill>
        <Pill color="green">CSS/SCSS</Pill>
        <Pill color="yellow">Javascript</Pill>
        <Pill color="yellow">React.js</Pill>
      </ContentBox>
      <ContentBox title="work experience" className="work-experience">
        <div className="work-experience__container">
          <WorkExperience
            position="Associate"
            employer="Law firm FORT Vilnius"
            duration="2018-2020"
            description="{Here goes description}"
          />
          <WorkExperience
            position="Associate"
            employer="Law firm Sakavičius, Gogolev & partners PROLAW"
            duration="2013-2018"
            description="{Here goes description}"
          />
          <WorkExperience
            position="Legal assistant"
            employer="Law firm Sorainen"
            duration="2012"
            description="{Here goes description}"
          />
        </div>
      </ContentBox>
      <Divider isFancy={false} />
    </main>
  );
}

export default Main;
