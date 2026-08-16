import styles from './Home.module.css';

export default function Home() {
  return (
      <section className={styles.principal}>
        <div className={styles.info}>
          <p className={styles.infop}>Tu amigable vecino ingeniero de software</p>
          <h1 className={styles.glitch}>
            <span>Andrés</span>
            <span>Muñoz</span>
          </h1>
        </div>

        <div className={styles.links}>
          <a className={styles.projects} href="">
            Explorar Proyectos
          </a>
          <a className={styles.download} href="">
            Descargar CV
          </a>
        </div>
      </section>
  );
}
