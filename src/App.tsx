import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import styles from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

gsap.registerPlugin(useGSAP);

function App() {
  const webTop = useRef<HTMLImageElement>(null);
  const webBottom = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(webTop.current, {
      rotation: '+=360',
      duration: 90,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(webTop.current, {
      scale: 1.7,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(webBottom.current, {
      rotation: '+=360',
      duration: 90,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(webBottom.current, {
      scale: 1.7,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });

  return (
    <>
      <Header />
      <main>
        <section className={styles.homeSection}>
          <img className={styles.spidey} src="/img/spidey.png" alt="" />
          <div className={styles.webs}>
            <img ref={webTop} className={styles.webTop} src="/img/web.png" alt="Imagen telaraña" />
            <img ref={webBottom} className={styles.webBottom} src="/img/web.png" alt="" />
          </div>
          <Home />
        </section>
      </main>
    </>
  );
}

export default App;
