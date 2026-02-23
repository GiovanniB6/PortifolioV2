import { useState } from 'react'

export default function About() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="about" id="about">
      <div className="about-img"></div>
      <div className="about-content">
        <h2 className="heading">
          Sobre <strong>Mim</strong>
        </h2>
        <h3>
          Olá, pode me chamar de <strong>Giovanni</strong>.
        </h3>

        {!showMore && (
          <p>
            Desde o início da minha jornada no desenvolvimento, venho me dedicando a aprimorar e
            expandir meus conhecimentos, aplicando boas práticas para desenvolver aplicações
            eficientes, responsivas, acessíveis e visualmente atraentes. Estou sempre buscando estar
            atualizado com as tendências e tecnologias.
          </p>
        )}

        {showMore && (
          <>
            <p>
              Desde o início da minha jornada no desenvolvimento, venho me dedicando a aprimorar e
              expandir meus conhecimentos, aplicando boas práticas para desenvolver aplicações
              eficientes, responsivas, acessíveis e visualmente atraentes. Estou sempre buscando
              estar atualizado com as tendências e tecnologias.
            </p>

            <p>
              Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> na{' '}
              <a
                href="https://www.mackenzie.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Instituto Presbiteriano Mackenzie</strong>
              </a>
              , e assim que concluir, pretendo seguir com uma pós-graduação em{' '}
              <strong>Engenharia de Software</strong>, para aprofundar ainda mais meus
              conhecimentos na área.
            </p>

            <p>
              Desde março de 2024, estou <strong>estagiando</strong> na empresa CONSLADEL na parte
              de <strong>Análise e Desenvolvimento de Sistemas</strong>. Além disso, tive a
              oportunidade de colaborar no time de Desenvolvimento da CLD, onde adquiri experiências
              valiosas, como:
            </p>

            <ul>
              <li>
                Apoio no desenvolvimento de aplicações web utilizando HTML, CSS, JavaScript e C#,
                com foco na biblioteca .NET, contribuindo para funcionalidades e melhorias de
                interface.
              </li>
              <li>
                Atuação com bancos de dados relacionais, realizando consultas, atualizações e
                manipulação de dados utilizando SQL para apoiar no desenvolvimento e nas análises.
              </li>
              <li>
                Suporte na análise de requisitos, participando de reuniões para entender as
                necessidades do negócio e sugerir melhorias.
              </li>
              <li>
                Realização de testes de software, reportando bugs e propondo soluções para melhorar
                a experiência do usuário.
              </li>
              <li>
                Contribuição para a documentação técnica dos projetos, garantindo clareza nos
                processos e procedimentos para facilitar a manutenção e o entendimento das soluções
                desenvolvidas.
              </li>
            </ul>

            <p>
              Além disso, mantenho um foco constante no aprendizado e na melhoria contínua das
              minhas habilidades, atualmente com objetivo de <strong>migrar</strong> para a área de <strong>Back-end</strong>. Desde
              2024, venho me dedicando a plataformas como Alura e RocketSeat, onde estudo
              profundamente tecnologias como <strong>C#</strong>, <strong>JavaScript</strong>,{' '}
              <strong>React</strong>, <strong>Node.js</strong> e <strong>SQL</strong>. Também estou
              desenvolvendo meu conhecimento em back-end, com ênfase nas linguagens{' '}
              <strong>Python</strong> e <strong>PHP</strong>, e em metodologias ágeis, como{' '}
              <strong>Scrum</strong>.
            </p>
          </>
        )}

        <button
          className="btn"
          onClick={() => setShowMore(!showMore)}
          id="btnLeiaMais"
        >
          {showMore ? 'Leia Menos' : 'Leia Mais'}
        </button>
      </div>
    </section>
  )
}