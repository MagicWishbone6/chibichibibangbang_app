import Home from './components/Home'
import CharacterList from './components/CharacterList'
import Header from './components/muik-components/Header/Header'

function App() {
  return (
    <>
      <Header 
      color='primary'
      brand='Chibi Chibi Bang Bang'
      />
      <Home />
      <CharacterList />
    </>
  );
}

export default App;
