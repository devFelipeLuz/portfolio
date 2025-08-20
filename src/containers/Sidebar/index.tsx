import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Felipe Luz</Titulo>
      <Paragrafo tipo="secundary" fontSize={16}>
        devFelipeLuz
      </Paragrafo>
      <Descricao tipo="primary" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
