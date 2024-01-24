import Logo from "./Logo"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo></Logo>

      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <a href='/#' className={styles.navLink}>
            Inicio
          </a>
        </li>

        <li className={styles.navItem}>
          <a href='/#sobre-mi' className={styles.navLink}>
            Sobre mi
          </a>
        </li>

        <li className={styles.navItem}>
          <a href='/#asesorias' className={styles.navLink}>
            Asesorias
          </a>
        </li>

        <li className={styles.navItem}>
          <a href='/#contacto' className={styles.navLink}>
            Contacto
          </a>
        </li>

        <li className={styles.navItem}>
          <a href='/tienda' className={styles.navLink}>
            Tienda
          </a>
        </li>
      </ul>

      <span className={`material-icons ${styles.navIcon}`}> menu </span>
    </nav>
  )
}

export default Navbar
