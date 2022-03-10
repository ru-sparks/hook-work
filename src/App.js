import logo from './logo.svg';
import './App.css';
import FlavorFormClassic from './FlavorFormClassic';
import FlavorFormHooks from './FlavorFormHooks';
import FlavorFormHooks2 from './FlavorFormHooks2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Classic</p>
      <FlavorFormClassic></FlavorFormClassic>
      <p>Hook</p>
      <FlavorFormHooks></FlavorFormHooks>
      <p>Custom Hook</p>
      <FlavorFormHooks2></FlavorFormHooks2>
      </header>
    </div>
  );
}

export default App;
