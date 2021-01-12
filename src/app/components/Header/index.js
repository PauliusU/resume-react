import "./index.css";
import Select from "../Select";

function Header({ profession, children }) {
  return (
    <header className="header">
      <div className="navigation">
        <Select
          options={[
            { value: "en", children: "English" },
            { value: "lt", children: "Lietuvių" },
          ]}
        />
      </div>
      <div className="header__name-container">
        <h1>{children}</h1>
        <span className="header__name-title">{profession}</span>
      </div>
    </header>
  );
}

export default Header;
