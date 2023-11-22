import * as C from './App.styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchArea } from './components/SearchArea';

const App = () => {

  return (
    <C.Container>
      <Header/>
      <SearchArea/>
      <Footer/>
    </C.Container>
  );
}

export default App;