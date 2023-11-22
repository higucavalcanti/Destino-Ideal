import * as C from './App.styles';
import { Header } from './components/Header';
import { SearchArea } from './components/SearchArea';

const App = () => {

  return (
    <C.Container>
      <Header/>
        PROJETO!
      <SearchArea/>
    </C.Container>
  );
}

export default App;