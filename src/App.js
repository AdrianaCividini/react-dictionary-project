import logo from "./logo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="/">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </a>
          <footer className="App-footer">
            <small>React Dictionary</small>
          </footer>
          <main>
            <Dictionary defaultKeyword="beach" />
          </main>
        </header>
        <footer className="informations">
          <p>
            This Dictionary Project was coded by{" "}
            <a href="https://dricividini.netlify.app/">Adriana Cividini</a> and
            is open sourced on{" "}
            <a href="https://github.com/AdrianaCividi">GitHub </a>
            and hosted on{" "}
            <a href="https://app.netlify.com/sites/graceful-pothos-5d6f54/deploys/66227eb958679c15ce234165">
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
