import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    'Home',
    'About',
    'Experience',
    'Projects',
    'Research',
    'Education',
    'Skills',
    'Contact',
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Home">
          <span className="logo-mark">AAO</span>
          <span className="brand-text">AAO</span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase() === 'home' ? 'home' : link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
