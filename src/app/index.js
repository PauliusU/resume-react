import { useState } from "react";

import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <Header lang={language} setLanguage={setLanguage}>
        Paulius Uosis
      </Header>
      <Main lang={language} />
      <Footer lang={language} />
    </div>
  );
}

export default App;
