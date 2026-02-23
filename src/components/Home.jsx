export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Olá! Eu sou o</h3>
        <h1><strong>Giovanni Breno</strong></h1>
        <h2>Desenvolvedor <strong>Front-End</strong> e <strong> Analista de dados</strong></h2><br /><br />
        <br /><br /><h5>Transformando ideias em experiências digitais inovadoras, uma linha de código.</h5>
        <div className="social-media">
          <a href="https://github.com/GiovanniB6" target="_blank" style={{"--i":7}}><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/giovannibs6/" target="_blank" style={{"--i":8}}><i className='bx bxl-linkedin'></i></a>
          <a href="Giovannib.dev@gmail.com" target="_blank" style={{"--i":9}}><i className='bx bxl-gmail'></i></a>
          <a href="https://api.whatsapp.com/send/?phone=55511974752533&text&type=phone_number&app_absent=0" target="_blank" style={{"--i":10}}><i className='bx bxl-whatsapp'></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1Ji9erMP7KqcXIe4uIaDVfl7M8X6SOtr6/view?usp=sharing" className="btn">Download CV</a>
      </div>
      <div className="profession-container">
        <div className="profession-box">
          <div className="profession" style={{"--i":0}}>
            <i className="bxl bx-react"></i>
            <h3>React</h3>
          </div>
          <div className="profession" style={{"--i":1}}>
            <i className="bxl bx-c-sharp"></i>
            <h3>C#</h3>
          </div>
          <div className="profession" style={{"--i":2}}>
            <i className='bx bxl-javascript'></i>
            <h3>Javascript</h3>
          </div>
          <div className="profession" style={{"--i":3}}>
            <i className="fa-brands fa-python"></i>
            <h3>Python</h3>
          </div>
          <div className="circle"></div>
        </div>
        <div className="overlay">
          <div className="home-img"></div>
        </div>
      </div>
    </section>
  )
}
