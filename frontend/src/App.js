import React from 'react';
import * as C from './App.styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ParentComponent } from './pages/page';

const App = () => {
  return (
    <>
      <C.GlobalStyle />
      <Header />
      <ParentComponent />
      <Footer />
    </>
  );
}

export default App;