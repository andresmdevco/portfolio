import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.bar}>
        <h1 className={styles.title}>
          <span>&lt;Porta</span>folio/&gt;
        </h1>
        <div className={styles.links}>
          <a href="">Inicio</a>
          <a href="">Sobre Mí</a>
          <a href="">Habilidades</a>
          <a href="">Proyectos</a>
          <a href="">Certificados</a>
          <a href="">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
