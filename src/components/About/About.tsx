import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <p className={styles.label}>Sobre Mí</p>

        <h2 className={styles.title}>Andrés Muñoz</h2>

        <div className={styles.paragraphs}>
          <p>
            ¡Hola! Soy Andrés, soy Ingeniero Electrónico y Especialista en Ingeniería de Software,
            enfocado en el desarrollo frontend y la construcción de aplicaciones web sólidas y bien
            pensadas, con experiencia en React, TypeScript y JavaScript.
          </p>
          <p>
            Desde el desarrollo full stack de aplicaciones web hasta la aplicación de buenas
            prácticas de ingeniería de software, disfruto llevar problemas complejos a soluciones
            simples y bien construidas.
          </p>
        </div>

        <div className={styles.techStack}>
          <h3>Stack Principal</h3>
          <ul className={styles.techStackList}>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaSript</li>
            <li>TailwindCSS</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>

      <div className={styles.image}>
        <img src="/img/foto.png" alt="Foto de Andrés Muñoz" />
      </div>
    </div>
  );
}
