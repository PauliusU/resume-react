import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header profession="programmer">Paulius Uosis</Header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
