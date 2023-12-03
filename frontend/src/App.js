import React, { useState } from 'react';
import * as C from './App.styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TextArea } from './components/TextArea';
import { ResultArea } from './components/ResultArea';
import { SearchArea } from './components/SearchArea';

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
      <TextArea result={responseText} />
      <Footer />
    </>
  );
}

export default App;