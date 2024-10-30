import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"

import { Link } from "react-router-dom"
import styles from "./ConsultaNutriPsico.module.css"

function ConsultaNutriPsico() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }
  return (
    <>
      <header className={styles.headerHomePacie}>
        <div className={styles.logo}>
          <Link to="/homeNutri">
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
            <Link to="/consultaNutriPsico">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarPlanosAlimentares">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Gerenciar Planos </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.pageTitle}>Consultas</h1>

        {/* Filtro de Consultas */}
        <div className={styles.filterContainer}>
          <label htmlFor="dateFilter">Filtrar por data:</label>
          <input type="date" id="dateFilter" className={styles.dateFilter} />
        </div>

        {/* Lista de Consultas */}
        <div className={styles.consultationList}>
          <div className={styles.consultationItem}>
            <div className={styles.consultationDate}>
              <p className={styles.day}>09</p>
              <p className={styles.monthYear}>Ago 2023</p>
            </div>
            <div className={styles.consultationInfo}>
              <p className={styles.clientName}>João Victor Nogueira</p>
              <p>Quarta-Feira | 09/08/2024</p>
              <p>JFC Trade Center - 12h</p>
            </div>
          </div>

          <div className={styles.consultationItem}>
            <div className={styles.consultationDate}>
              <p className={styles.day}>09</p>
              <p className={styles.monthYear}>Ago 2023</p>
            </div>
            <div className={styles.consultationInfo}>
              <p className={styles.clientName}>Beatriz Pereira</p>
              <p>Quarta-Feira | 09/08/2024</p>
              <p>JFC Trade Center - 15h</p>
            </div>
          </div>

          <div className={styles.consultationItem}>
            <div className={styles.consultationDate}>
              <p className={styles.day}>09</p>
              <p className={styles.monthYear}>Ago 2023</p>
            </div>
            <div className={styles.consultationInfo}>
              <p className={styles.clientName}>Marina Barros</p>
              <p>Quarta-Feira | 09/08/2024</p>
              <p>JFC Trade Center - 16h</p>
            </div>
          </div>

          <div className={styles.consultationItem}>
            <div className={styles.consultationDate}>
              <p className={styles.day}>09</p>
              <p className={styles.monthYear}>Ago 2023</p>
            </div>
            <div className={styles.consultationInfo}>
              <p className={styles.clientName}>Marina Barros</p>
              <p>Quarta-Feira | 09/08/2024</p>
              <p>JFC Trade Center - 16h</p>
            </div>
          </div>

          <div className={styles.consultationItem}>
            <div className={styles.consultationDate}>
              <p className={styles.day}>09</p>
              <p className={styles.monthYear}>Ago 2023</p>
            </div>
            <div className={styles.consultationInfo}>
              <p className={styles.clientName}>Marina Barros</p>
              <p>Quarta-Feira | 09/08/2024</p>
              <p>JFC Trade Center - 16h</p>
            </div>
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

export default ConsultaNutriPsico
