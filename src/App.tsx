import styles from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.homeSection}>
          <img className={styles.spidey} src="/img/spidey.png" alt="" />
          <div className={styles.webs}>
            <img className={styles.webTop} src="/img/web.png" alt="Imagen telaraña" />
            <img className={styles.webBottom} src="/img/web2.png" alt="" />
          </div>    
          <Home /> 
        </section>
      </main>
    </>
  );
}

export default App;
