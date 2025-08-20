import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, eius ipsam?
      Error ipsam ab neque perspiciatis doloribus provident vitae vel dolore.
      Reiciendis eveniet delectus commodi, optio nobis possimus qui maxime?
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=devFelipeLuz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devFelipeLuz&show&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
