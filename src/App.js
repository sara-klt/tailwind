import logo from './logo.svg';
import './App.css';
import './styles/index.css'
import { Button } from './Components/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <Button>click</Button>
      </header>
    </div>

  );
}

export default App;
