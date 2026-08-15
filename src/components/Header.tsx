import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
        <div className={styles.contenedor}>
            <div className={styles.barra}>
                <h1 className={styles.title}><span>Andrés</span>Muñoz</h1>
                
                <nav className={styles.nav}>
                    <a href="">Inicio</a>
                    <a href="">Sobre Mí</a>
                    <a href="">Habilidades</a>
                    <a href="">Proyectos</a>
                    <a href="">Certificados</a>
                    <a href="">Contacto</a>
                </nav>
            </div>
        </div>
    </header>
  )
}
