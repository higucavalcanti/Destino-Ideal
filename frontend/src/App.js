import React, { useState } from 'react';
import * as C from './App.styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TextArea } from './components/TextArea';
import { ResultArea } from './components/ResultArea';
import { SearchArea } from './components/SearchArea';
import {MapPage} from './api/maps.tsx';

const App = () => {
  const [responseText, setResponseText] = useState('');

  const handleResponseChange = (newResponseText) => {
    setResponseText(newResponseText);
  };
  return (
    <>
      <C.GlobalStyle />
      <Header />
      <SearchArea onResponseChange={handleResponseChange} />
      <ResultArea />
      <C.Container>
        <TextArea result={responseText} />
        <MapPage/>
      </C.Container>
      <Footer />
    </>
  );
}

export default App;