import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div id="mydiv"></div>

      <script type="text/babel">
        function Hello() {
          return <h1>Hello Worldss!</h1>;
        }

        ReactDOM.render(<Hello />, document.getElementById('mydiv'))
      </script>

    </div>
  );
}

export default App;
