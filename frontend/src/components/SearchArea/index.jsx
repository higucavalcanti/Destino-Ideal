import * as C from './styles';
import video from '../../assets/video.mp4';

export const SearchArea = () => {
    return (
      <C.Container>
        <div className="overlay"></div>
        <C.Video src={video} muted autoPlay loop type="video/mp4" />
            <h1>Pesquise seu destino</h1>
            <p>e saiba mais sobre ele</p>
      </C.Container>
    )
  }