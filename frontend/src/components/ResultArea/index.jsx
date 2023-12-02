import React, { useState } from 'react';
import * as C from './styles';

export const ResultArea = () => {
  const [searchPoint, setSearchPoint] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
    }
  };

  return (
    <C.Container>
      <C.ResultContainer>Resultado</C.ResultContainer>
      <C.ResultInput>
        <div className="input flex">
          <input
              type="text"
              placeholder="Pesquise um ponto (Restaurante, hoteis e etc...)"
              value={searchPoint}
              onKeyDown={handleKeyDown}
          />
        </div>
      </C.ResultInput>
    </C.Container>
  );
};