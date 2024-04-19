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
      </div>
    </div>
  );
}

export default App;
