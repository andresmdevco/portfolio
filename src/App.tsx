import styles from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.webTop} src="/img/web.png" alt="Imagen telaraña" />
        <div className={styles.container}>
          <Header />
          <Home />
        </div>
        <img className={styles.webBottom} src="/img/web2.png" alt="" />
      </div>
    </>
  );
}

export default App;
