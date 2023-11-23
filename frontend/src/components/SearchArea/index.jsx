import React from 'react';
import * as C from './styles';
import video from '../../assets/video.mp4';
import icone from '../../assets/icone.png';

export const SearchArea = () => {
  return (
    <C.Container>
      <div className="overlay"></div>
      <C.Video src={video} muted autoPlay loop type="video/mp4" />
      <C.Content>
        <h1>Pesquise seu destino</h1>
        <p>e saiba mais sobre ele</p>
        <label>
          <input className="input"
          type="text" 
          placeholder="Pesquise seu destino" />
        <C.Icon src={icone} alt="icone de pesquisa"/>
        </label>
      </C.Content>
    </C.Container>
  );
};
