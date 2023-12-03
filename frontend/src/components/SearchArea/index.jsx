import React, { useCallback, useState } from 'react';
import * as C from './styles';
import video from '../../assets/video.mp4';
import icone from '../../assets/icone.png';
import maritalkResponse from '../../api/maritalk';

export const SearchArea = ({ onResponseChange }) => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const fetchResponse = useCallback(async () => {
    try {
      setIsLoading(true);
      const messages = [
        { "role": "user", "content": `Desejo viajar para ${searchText},
         me conte sobre o local. Além disso, liste todos os seus feriados,
         tanto nacionais como locais usando a formatação "Feriados Nacionais: 1. [...]"` },
      ];

      const requestData = await maritalkResponse(messages);
      setIsLoading(false);
      setSearchText('');
      onResponseChange(requestData.answer); // Pass the response to the parent component
    } catch (error) {
      console.error('Error fetching response:', error);
    } 
  }, [searchText, onResponseChange]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchResponse();
    }
  };


  return (
    <C.Container>
      <div className="overlay"></div>
      <C.Video src={video} muted autoPlay loop type="video/mp4" />
      <C.Content>
        <h1>Pesquise seu destino</h1>
        <p>e saiba mais sobre ele</p>
        <div className="input flex">
          <input
            type="text"
            placeholder="Pesquise seu destino (ex: Rio de Janeiro, França, etc)"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {isLoading ? (
            <C.LoadingIndicator />
          ) : (
            <C.Icon src={icone} alt="icone de pesquisa" onClick={fetchResponse} />
          )}
        </div>
      </C.Content>
    </C.Container>
  );
};