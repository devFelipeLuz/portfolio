import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'primary' | 'secundary'
}

const Paragrafo = ({ children, tipo = 'primary' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
