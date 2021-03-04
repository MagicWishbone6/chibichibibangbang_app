import Home from './components/Home'
import CharacterAlbum from './components/CharacterAlbum'
import Header from './components/muik-components/Header/Header'
import Footer from './components/muik-components/Footer/Footer'

function App() {
  return (
    <>
      <Header 
      color='primary'
      brand='Chibi Chibi Bang Bang'
      />
      <Home />
      <CharacterAlbum />
      <Footer />
    </>
  );
}

export default App;
