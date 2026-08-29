import { useState } from 'react';
import styles from './Header.module.css';
import { Bars3Icon } from '@heroicons/react/16/solid';

export default function Header() {
  const [nav, setNav] = useState(false);
  
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.bar}>
          <h1 className={styles.title}>
            <span>&lt;Porta</span>folio/&gt;
          </h1>

          <div className={styles.menuButton}>
            {!nav && <Bars3Icon onClick={() => setNav(true)} />}
          </div>

          <div className={`${styles.links} ${nav ? styles.linksOpen : ''}`}>
            <a href="">Inicio</a>
            <a href="">Sobre Mí</a>
            <a href="">Habilidades</a>
            <a href="">Proyectos</a>
            <a href="">Certificados</a>
            <a href="">Contacto</a>
          </div>
        </div>
      </nav>

      {nav && <div className={styles.overlay} onClick={() => setNav(false)} />}
    </>
  );
}
