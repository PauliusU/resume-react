import "./index.css";
import ContentBox from "./components/ContentBox";
import Divider from "./components/Divider";
import Link from "./components/Link";
import List from "./components/List";
import Pill from "./components/Pill";
import Select from "./components/Select";

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="navigation">
                    <Select
                        options={[
                            {value: "en", children: "English"},
                            {value: "lt", children: "Lietuvių"},
                        ]}
                    />
                </div>
                <div className="header__name-container">
                    <h1>Paulius Uosis</h1>
                    <span className="header__name-title">Programmer</span>
                </div>
            </header>
            <main className="main">
                <ContentBox title="Links" className="links">
                    <List listItems={[]}>
                        <Link
                            linkLocation="https://www.linkedin.com/in/paulius-uosis/"
                            image
                            imgSrc="https://cdn.onlinewebfonts.com/svg/img_24845.png"
                            imgAlt="linkedin-logo"
                        >
                            LINKEDIN/paulius-uosis
                        </Link>
                        <Link
                            linkLocation="https://github.com/PauliusU/"
                            image
                            imgSrc="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
                            imgAlt="github-logo"
                        >
                            GITHUB/PauliusU
                        </Link>
                    </List>
                </ContentBox>
                <ContentBox title="About me" className="about">
                    <p>
                        I am a full stack web developer, passionate about building websites and web applications. I
                        specialize in JavaScript and PHP and have experience working with React.js. I also love trying
                        out
                        new technologies. That's why most of my side projects are written in Python.
                    </p>
                    <p>
                        Before discovering my passion for web development, I was a legal specialist. My professional
                        experience has allowed me to develop an excellent analytical capacity and problem-solving
                        approach. I had the opportunity to work with many international clients and I enjoy
                        collaborating on projects which help me grow professionally and personally.
                    </p>
                </ContentBox>
                <ContentBox title="education" className="education">
                    <div>
                        <p>CodeAcademy</p>
                        <p>2020-2021</p>
                        <p>Full-Stack Web Development</p>
                    </div>
                    <Divider isFancy={false}/>
                    <div>
                        <p>Université de Bordeaux</p>
                        <p>2009-2013</p>
                        <p>Master of Laws - LLM, European Union law and governance</p>
                    </div>
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
                    <div className="experiences-container">
                        <div className="experiences-container__item">
                            <p>Associate</p>
                            <p>Law firm FORT Vilnius</p>
                            <p>2018-2020</p>
                            <p>Description</p>
                        </div>
                        <div className="experiences-container__item">
                            <p>Associate</p>
                            <p>Law firm Sakavičius, Gogolev & partners PROLAW</p>
                            <p>2013-2018</p>
                            <p>Description</p>
                        </div>
                        <div className="experiences-container__item">
                            <p>Legal assistant</p>
                            <p>Law firm Sorainen</p>
                            <p>2012</p>
                            <p>Description</p>
                        </div>
                    </div>
                </ContentBox>
                <Divider isFancy={false}/>
            </main>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-container__item">
                        <span className="header__name-title">Address</span>
                        <p>Vilnius</p>
                    </div>
                    <div className="footer-container__item">
                        <span className="header__name-title">contact</span>
                        <Link linkLocation="tel:+37063634072">+370 636 34 072</Link>
                        <Link linkLocation="mailto:pauliusuosis@gmail.com">pauliusuosis@gmail.com</Link>
                    </div>
                    <div className="footer-container__item">
                        <span className="header__name-title">social</span>
                        <Link linkLocation="https://www.linkedin.com/in/paulius-uosis/">LinkedId/paulius-uosis</Link>
                        <Link linkLocation="https://github.com/pauliusu">Github/pauliusu</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
