import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const stack = [
    'React',
    'TypeScript',
    'JavaScript',
    'TailwindCSS',
    'Node.js',
    'Express',
    'PostgreSQL',
  ];

  const aboutRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLUListElement>(null);
  const spidersLeftRef = useRef<HTMLImageElement>(null);
  const spidersRightRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(stackRef.current!.children, {
      boxShadow: '0 0 25px rgba(163, 21, 21, 0.6)',
      borderColor: 'var(--primary)',
      duration: 1,
      ease: 'sine.inOut',
      stagger: {
        each: 0.15,
        repeat: -1,
        yoyo: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
      },
    });

    tl.fromTo(
      spidersLeftRef.current,
      { y: -150, opacity: 0 },
      { y: 0, opacity: 0.2, duration: 1.2, ease: 'bounce.out' }
    ).fromTo(
      spidersRightRef.current,
      { y: -150, opacity: 0 },
      { y: 0, opacity: 0.2, duration: 1.2, ease: 'bounce.out' },
      '-=0.9' // arranca casi junto con la izquierda, ligero desfase
    );

    // Balanceo sutil después de que caigan
    tl.to(
      spidersLeftRef.current,
      {
        rotation: 4,
        transformOrigin: 'top center',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      },
      '+=0.1'
    ).to(
      spidersRightRef.current,
      {
        rotation: -4,
        transformOrigin: 'top center',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      },
      '<0.3' // pequeño desfase respecto a la anterior
    );
  }, { scope: aboutRef });
  
  return (
    <div className={styles.about}>
      <div className={styles.spiders}>
        <img ref={spidersLeftRef} className={styles.spidersLeft} src="/img/spiders.png" alt="" />
        <img ref={spidersRightRef} className={styles.spidersRight} src="/img/spiders.png" alt="" />
      </div>
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
          <ul ref={stackRef} className={styles.techStackList}>
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.image}>
        <div className={styles.imageFrame}>
          <img src="/img/foto.png" alt="Foto de Andrés Muñoz" />
        </div>
      </div>
    </div>
  );
}
