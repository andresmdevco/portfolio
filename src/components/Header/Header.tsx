import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.bar}>
        <h1 className={styles.title}>
          <span>&lt;Porta</span>folio/&gt;
        </h1>

        <nav className={styles.nav}>
          <a href="">Inicio</a>
          <a href="">Sobre Mí</a>
          <a href="">Habilidades</a>
          <a href="">Proyectos</a>
          <a href="">Certificados</a>
          <a href="">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
