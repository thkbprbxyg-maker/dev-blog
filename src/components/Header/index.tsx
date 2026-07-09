import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setVisible(true);
      } else {
        setVisible(false);
        setMenuOpen(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          {['about-me', 'my-skills', 'my-projects', 'contact'].map((id) => (
            <button key={id} className={styles.navLink} onClick={() => scrollTo(id)}>
              {id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            </button>
          ))}
        </nav>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}>
        <button className={styles.mobileClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
          ✕
        </button>
        <nav className={styles.mobileNav}>
          {['about-me', 'my-skills', 'my-projects', 'contact'].map((id) => (
            <button key={id} className={styles.mobileNavLink} onClick={() => scrollTo(id)}>
              {id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;