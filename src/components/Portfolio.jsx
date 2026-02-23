import githubApiGif from '../image/githubapi.gif'
import financesPng from '../image/Finances.png'
import cobrinhaGif from '../image/cobrinha.gif'

const PROJECTS = [
  {
    id: 'github-api',
    image: githubApiGif,
    alt: 'Imagem do site Github API',
    title: 'Github API',
    description:
      'A aplicação permite buscar informações sobre usuários do GitHub, como perfil, repositórios e eventos recentes. O usuário pode pesquisar por um nome de usuário do GitHub e visualizar dados como nome, bio, seguidores, repositórios e atividades recentes.',
    codeUrl: 'https://github.com/Ryan-Wes/github-api',
    liveUrl: 'https://giovannib6.github.io/GitHub-API-Search/',
  },
  {
    id: 'my-finances',
    image: financesPng,
    alt: 'Imagem do site My Finances',
    title: 'My Finances',
    description:
      'O Controle Financeiro é uma aplicação simples e intuitiva para monitorar suas finanças pessoais.',
    codeUrl: 'https://github.com/GiovanniB6/My-Finances',
    liveUrl: 'https://giovannib6.github.io/My-Finances/',
  },
  {
    id: 'the-hunger-snake',
    image: cobrinhaGif,
    alt: 'Gif do site Jogo da Cobrinha',
    title: 'The Hunger Snake',
    description:
      'Uma página do jogo "The Hunger Snake", onde o jogador controla uma cobra para capturar comidas e marcar pontos. O maior score é salvo no localStorage. Feito com HTML, CSS e JavaScript.',
    codeUrl: 'https://github.com/GiovanniB6/TheSnake-JS',
    liveUrl: 'https://giovannib6.github.io/TheSnake-JS/',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Últimos <strong>Projetos</strong>
      </h2>

      <div className="portfolio-container">
        {PROJECTS.map((project) => (
          <div className="portfolio-box" key={project.id}>
            <img src={project.image} alt={project.alt} />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="icons">
                <a
                  className="btn-hover-effect-4782fghj"
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </a>
                <a
                  className="btn-hover-effect-4782fghj"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}