import * as C from './styles';

export const TextArea = ( {result}) => {
  return (
    <C.Container>
        <C.TextArea 
            name="result" 
            cols={55} 
            rows={30} 
            placeholder="Resultado"
            value={result} 
            readOnly />
    </C.Container> 
  );
};