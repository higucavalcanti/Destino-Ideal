import React, { useCallback, useState } from 'react';
import * as C from './styles';
import video from '../../assets/video.mp4';
import icone from '../../assets/icone.png';
import maritalkResponse from '../../api/maritalk';

export const SearchArea = ({ onResponseChange }) => {
  const [searchText, setSearchText] = useState('');

  const fetchResponse = useCallback(async () => {
    try {
      const messages = [
        { "role": "user", "content": "bom dia, esta é a mensagem do usuario" },
        { "role": "assistant", "content": "bom dia, esta é a resposta do assistente" },
        { "role": "user", "content": `Conte informações importantes para quem quer viajar para ${searchText}` },
      ];

      const requestData = await maritalkResponse(messages);
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
          <C.Icon src={icone} alt="icone de pesquisa" />
        </div>
      </C.Content>
    </C.Container>
  );
};
