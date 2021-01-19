import { useState } from "react";

import "./index.css";
import { Footer, Header, Main } from "./components";

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
