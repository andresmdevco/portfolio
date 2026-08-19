import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.principal}>
      <p className={styles.infop}>Tu amigable vecino ingeniero de software</p>
      <h1 className={styles.glitch}>
        <span>Andrés</span>
        <span>Muñoz</span>
      </h1>

      <div className={styles.links}>
        <a className={styles.projects} href="">
          Explorar Proyectos
        </a>
        <a className={styles.download} href="">
          Descargar CV
        </a>
      </div>
    </div>
  );
}
