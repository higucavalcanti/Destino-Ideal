import * as C from './App.styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {

  return (
    <C.Container>
      <Header/>
        PROJETO!
      <Footer/>
    </C.Container>
  );
}

export default App;