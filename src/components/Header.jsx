export default function Header({ sticky, activeSection, menuOpen, setMenuOpen, darkMode, setDarkMode }) {
  return (
    <header className={`header ${sticky ? 'sticky' : ''}`}>
      <a href="#" className="logo">GBreno.</a>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Habilidades</a>
        <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projetos</a>
      </nav>
      <div className={`bx ${darkMode ? 'bx-moon' : 'bx-sun'}`} id="darkMode-icon" onClick={() => setDarkMode(!darkMode)}></div>
      <div className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}></div>
    </header>
  )
}
