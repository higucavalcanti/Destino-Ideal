import * as C from './styles';
import logo  from '../../assets/logo.png'

export const Header = () => {
  return (
    <C.Container>
      <C.Logo src={logo} alt="DI logo" />
      <p>Destino Ideal</p>
    </C.Container>
  )
}