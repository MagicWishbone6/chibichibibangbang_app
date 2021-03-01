<<<<<<< HEAD
import Home from './components/Home'
import CharacterAlbum from './components/CharacterAlbum'
import Header from './components/muik-components/Header/Header'

function App() {
  return (
    <>
      <Header 
      color='primary'
      brand='Chibi Chibi Bang Bang'
      />
      <Home />
      <CharacterAlbum />
    </>
=======
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
    </div>
>>>>>>> initial commit
  );
}

export default App;
