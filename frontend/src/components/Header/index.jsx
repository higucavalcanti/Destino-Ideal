import * as C from './styles';
import logo  from '../../assets/logo.png'

export const Header = () => {
  return (
    <C.Container>
      <C.Logo>
        <img src={logo} alt="DI logo" />
      </C.Logo>
      <p>Destino Ideal</p>
    </C.Container>
  )
}