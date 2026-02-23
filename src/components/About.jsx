import { useState } from 'react'

export default function About() {
  const [showMore, setShowMore] = useState(false)
  return (
    <section className="about" id="about">
      <div className="about-img"></div>
      <div className="about-content">
        <h2 className="heading">Sobre <strong>Mim</strong></h2>
        <h3>Olá, pode me chamar de <strong>Giovanni</strong>.</h3>
        <p>
          Desde o início da minha jornada no desenvolvimento, venho me dedicando a aprimorar e expandir meus conhecimentos, aplicando boas práticas para desenvolver aplicações eficientes, responsivas, acessíveis e visualmente atraentes. Estou sempre buscando estar atualizado com as tendências e tecnologias.
          <br /><br />
          Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> e, assim que concluir, pretendo seguir com uma pós-graduação em <strong>Engenharia de Software</strong>, para aprofundar ainda mais meus conhecimentos na área.
          <br /><br />
          Desde março de 2024, estou <strong>estagiando</strong> na empresa CONSLADEL em <strong>Análise e Desenvolvimento</strong>. Além disso, tive a oportunidade de colaborar no time de Desenvolvimento da CLD, onde adquiri experiências valiosas, como<span id="pontos" style={{display: showMore ? 'none' : 'inline'}}>...</span><span id="mais" style={{display: showMore ? 'inline' : 'none'}}>: 
          <br />
          <strong>·</strong> Apoio no desenvolvimento de aplicações web utilizando HTML, CSS, JavaScript e C#, com foco na biblioteca .NET, contribuindo para funcionalidades e melhorias de interface.<br />
          <strong>·</strong> Atuação com bancos de dados relacionais, realizando consultas, atualizações e manipulação de dados utilizando SQL para apoiar no desenvolvimento e nas análises.<br />
          <strong>·</strong> Suporte na análise de requisitos, participando de reuniões para entender as necessidades do negócio e sugerir melhorias.<br />
          <strong>·</strong> Realização de testes de software, reportando bugs e propondo soluções para melhorar a experiência do usuário.<br />
          <strong>·</strong> Contribuição para a documentação técnica dos projetos, garantindo clareza nos processos e procedimentos para facilitar a manutenção e o entendimento das soluções desenvolvidas.<br /><br />
          Além disso, mantenho um foco constante no aprendizado e na melhoria contínua das minhas habilidades. Desde 2022, venho me dedicando a plataformas como Alura e RocketSeat, onde estudo profundamente tecnologias como <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong> e <strong>SQL</strong>. Também estou desenvolvendo meu conhecimento em back-end, com ênfase na linguagem <strong>Python</strong> e <strong>PHP</strong>, em metodologias ágeis, como <strong>Scrum</strong>.</span>
        </p>
        <button className="btn" onClick={() => setShowMore(!showMore)} id="btnLeiaMais">{showMore ? 'Leia Menos' : 'Leia Mais'}</button>
      </div>
    </section>
  )
}
