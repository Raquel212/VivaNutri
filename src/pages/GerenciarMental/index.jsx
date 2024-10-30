import { useState } from "react"
import { FaEdit, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"

import { Link } from "react-router-dom"
import styles from "./GerenciarMental.module.css"

function GerenciarMental() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }
  return (
    <>
      <header className={styles.headerHomePacie}>
        <div className={styles.logo}>
          <Link to="/homePsico">
            <img src="/Logo_Sem.png" alt="Logo" className={styles.imagemLogo} />
          </Link>
        </div>

        <div className={styles.userName}>
          <FaUserCircle onClick={toggleUserMenu} className={styles.userIcon} />
          {userMenuOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/notifications" className={styles.linkHome}>
                Notificações
              </Link>
              {/* <Link to="/receitasFavoritasPaciente" className={styles.linkHome}>
                Receitas Favoritas
              </Link>
              <Link to="/" className={styles.linkHome}>
                Nutricionista
              </Link>
              <Link to="/" className={styles.linkHome}>
                Psicólogo
              </Link>
              <Link to="/edit-profile" className={styles.linkHome}>
                Editar Perfil
              </Link> */}
              <Link to="/entrar" className={styles.linkHome}>
                Logoff
              </Link>
            </div>
          )}
        </div>
      </header>

      <nav className={styles.sidebar}>
        <ul>
          <li>
            <Link to="/consultaPsico">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarMental">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Gerenciar Pensamentos </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={styles.pageTitle}>Gerenciar Planos Alimentares</h1>

        {/* Lista de Planos */}
        <div className={styles.planList}>
          <div className={styles.planItem}>
            <div className={styles.planInfo}>
              <p className={styles.planName}>Alice Santana</p>
              <p>Idade: 23 anos</p>
              <p>Foco: Problemas Familiares</p>
            </div>
            <FaEdit className={styles.editIcon} />
          </div>

          <div className={styles.planItem}>
            <div className={styles.planInfo}>
              <p className={styles.planName}>Beatriz Pereira</p>
              <p>Idade: 21 anos</p>
              <p>Foco: Ansiedade</p>
            </div>
            <FaEdit className={styles.editIcon} />
          </div>

          <div className={styles.planItem}>
            <div className={styles.planInfo}>
              <p className={styles.planName}>Marina Barros</p>
              <p>Idade: 25 anos</p>
              <p>Foco: Depressão</p>
            </div>
            <FaEdit className={styles.editIcon} />
          </div>

          <div className={styles.planItem}>
            <div className={styles.planInfo}>
              <p className={styles.planName}>Maria Gomes</p>
              <p>Idade: 36 anos</p>
              <p>Foco: Bullying</p>
            </div>
            <FaEdit className={styles.editIcon} />
          </div>
        </div>
      </main>

      <footer className={styles.footerHomeP}>
        <p className={styles.copyright}>&copy; 2024 VivaNutri</p>
        <ul className={styles.links}>
          <li className={styles.linksLi}>
            <a href="#">Política de Privacidade</a>
          </li>
          <li className={styles.linksLi}>
            <a href="#">Termos de Uso</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default GerenciarMental
