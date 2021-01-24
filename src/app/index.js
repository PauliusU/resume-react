import { useState } from "react";

import "./index.css";
import { Footer, Header, Main, ErrorBoundary } from "./components";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <ErrorBoundary lang={language}>
        <Header lang={language} setLanguage={setLanguage}>
          Paulius Uosis
        </Header>
      </ErrorBoundary>
      <Main lang={language} />
      <Footer lang={language} />
    </div>
  );
}

export default App;
