import React from 'react';
import * as C from './App.styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchArea } from './components/SearchArea';

const App = () => {
  return (
    <>
      <C.GlobalStyle />
      <Header />
      <SearchArea />
      {/*ResultArea */}
      <Footer />
    </>
  );
}

export default App;