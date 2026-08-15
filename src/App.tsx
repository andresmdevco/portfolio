import styles from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Header />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
