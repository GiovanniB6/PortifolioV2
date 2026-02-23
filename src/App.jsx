import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY
      setSticky(scrollPosition > 100)
      setMenuOpen(false)
      const secs = document.querySelectorAll('section')
      let current = 'home'
      secs.forEach((sec) => {
        const offset = sec.offsetTop - 150
        const height = sec.offsetHeight
        const id = sec.getAttribute('id')
        if (scrollPosition >= offset && scrollPosition < offset + height) {
          current = id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  useEffect(() => {
    const sr = window.ScrollReveal
    if (sr) {
      sr({ reset: true, distance: '80px', duration: 2000, delay: 200 })
      sr().reveal('.home-content, .heading', { origin: 'top' })
      sr().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' })
      sr().reveal('.home-content h1, .about-img img', { origin: 'left' })
      sr().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' })
    }
  }, [])

  return (
    <>
      <Header
        sticky={sticky}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </>
  )
}
