import React from 'react';
import * as C from './styles';

export const ResultArea = ({ result }) => {
  return (
    <C.Container>
      <C.ResultContainer>
        <label>
          Resultado
          <textarea name="result" cols={35} rows={30} placeholder="Resultado"
           value={result} readOnly />
        </label>
      </C.ResultContainer>
    </C.Container>
  );
};