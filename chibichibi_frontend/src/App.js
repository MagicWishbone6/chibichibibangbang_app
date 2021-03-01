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
  );
}

export default App;
