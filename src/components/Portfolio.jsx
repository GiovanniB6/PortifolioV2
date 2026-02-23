import githubApiGif from '../image/githubapi.gif'
import financesPng from '../image/Finances.png'
import cobrinhaGif from '../image/cobrinha.gif'

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Últimos <strong>Projetos</strong></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={githubApiGif} alt="Imagem do site Github API" />
          <div className="portfolio-layer">
            <h4>Github API</h4>
            <p>A aplicação permite buscar informações sobre usuários do GitHub, como perfil, repositórios e eventos recentes. O usuário pode pesquisar por um nome de usuário do GitHub e visualizar dados como nome, bio, seguidores, repositórios e atividades recentes.</p>
            <div className="icons">
              <a className="btn-hover-effect-4782fghj" href="https://github.com/Ryan-Wes/github-api" target="_blank">Código</a>
              <a className="btn-hover-effect-4782fghj" href="https://giovannib6.github.io/GitHub-API-Search/" target="_blank">Projeto</a>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={financesPng} alt="Imagem do site DevFriends" />
          <div className="portfolio-layer">
            <h4>My Finances</h4>
            <p>O Controle Financeiro é uma aplicação simples e intuitiva para monitorar suas finanças pessoais.</p>
            <div className="icons">
              <a className="btn-hover-effect-4782fghj" href="https://github.com/GiovanniB6/My-Finances" target="_blank">Código</a>
              <a className="btn-hover-effect-4782fghj" href="https://giovannib6.github.io/My-Finances/" target="_blank">Projeto</a>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={cobrinhaGif} alt="Gif do site Jogo da Cobrinha" />
          <div className="portfolio-layer">
            <h4>The Hunger Snake</h4>
            <p>Uma página do jogo "The Hunger Snake", onde o jogador controla uma cobra para capturar comidas e marcar pontos. O maior score é salvo no localStorage. Feito com HTML, CSS e JavaScript.</p>
            <div className="icons">
              <a className="btn-hover-effect-4782fghj" href="https://github.com/GiovanniB6/TheSnake-JS" target="_blank">Código</a>
              <a className="btn-hover-effect-4782fghj" href="https://giovannib6.github.io/TheSnake-JS/" target="_blank">Projeto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
