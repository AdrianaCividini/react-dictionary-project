import logo from "./logo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />

          <main>
            <Dictionary />
          </main>
          <footer className="App-footer">
            <small>React Dictionary</small>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
