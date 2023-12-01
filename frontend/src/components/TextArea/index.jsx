import * as C from './styles';

export const TextArea = ( {result}) => {
  return (
    <C.Container>
        <C.TextArea 
            name="result" 
            cols={35} 
            rows={10} 
            placeholder="Resultado"
            value={result} 
            readOnly />
    </C.Container> 
  );
};