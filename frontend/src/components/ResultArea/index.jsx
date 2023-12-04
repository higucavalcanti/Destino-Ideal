import React, { useState } from 'react';
import * as C from './styles';

export const ResultArea = ( {searchText} ) => {
  // const [searchPoint, setSearchPoint] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // setSearchPoint('');
    }
  };

  return (
    <C.Container>
      <C.ResultContainer>
        <p>Resultado</p>
      </C.ResultContainer>
      {/* <C.ResultInput>
        <div className="input flex">
          <input
              type="text"
              placeholder="Pesquise um ponto (Restaurantes, hoteis e etc...)"
              value={searchPoint}
              onChange={(e) => setSearchPoint(e.target.value)}
              onKeyDown={handleKeyDown}
          />
        </div>
      </C.ResultInput> */}
    </C.Container>
  );
};