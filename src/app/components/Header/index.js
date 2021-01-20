import "./index.css";
import Select from "../Select";
import translations from "../../translations";

function Header({ lang, setLanguage, children }) {
  const { header } = translations[lang];

  return (
    <header className="header">
      <div className="navigation">
        <Select
          value={lang}
          setLanguage={setLanguage}
          options={[
            { value: "en", children: "English" },
            { value: "lt", children: "Lietuvių" },
          ]}
        />
      </div>
      <div className="header__name-container">
        <h1>{children}</h1>
        <span className="header__name-title">{header}</span>
      </div>
    </header>
  );
}

export default Header;
