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
            is hosted in{" "}
            <a href="https://github.com/AdrianaCividini">GitHub.</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
