import React, { useState } from 'react';
import * as C from './styles';
import video from '../../assets/video.mp4';
import icone from '../../assets/icone.png';

export const SearchArea = () => {
  const [searchText, setSearchText] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Pesquisar:', searchText);

      setSearchText('');
    }
  };

  return (
    <C.Container>
      <div className="overlay"></div>
      <C.Video src={video} muted autoPlay="autoplay" loop type="video/mp4" />
      <C.Content>
        <h1>Pesquise seu destino</h1>
        <p>e saiba mais sobre ele</p>
        <div className="input flex">
          <input
            type="text"
            placeholder="Pesquise seu destino"
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
