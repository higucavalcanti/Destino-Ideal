import React, { useState } from 'react';
import { SearchArea } from '../components/SearchArea'; 
import { ResultArea } from '../components/ResultArea'; 

export const ParentComponent = () => {
  const [responseText, setResponseText] = useState('');

  const handleResponseChange = (newResponseText) => {
    setResponseText(newResponseText);
  };

  return (
    <div>
      <SearchArea onResponseChange={handleResponseChange} />
      <ResultArea result={responseText} />
    </div>
  );
};