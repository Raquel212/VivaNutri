import { FaRightToBracket } from "react-icons/fa6"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/Logo_Sem.png" alt="Logo" className={styles.imagemLogo} />
          </Link>
        </div>

        <div className={styles.loginLink}>
          <Link to="/entrar">
            <FaRightToBracket />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
