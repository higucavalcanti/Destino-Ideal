import * as C from './styles';
import logo  from '../../assets/logo.png'


export const Header = () => {
  return (
    <C.Container>
      <C.Logo><a href="/"> <img src={logo} alt="" /></a></C.Logo>
      <h1>Destino Ideal</h1>
    </C.Container>
  )
}