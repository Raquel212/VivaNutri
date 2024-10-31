import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { HiCalendar } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom"
import styles from "./ConsultaPsico.module.css"

function ConsultaPsico() {
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
              <Link to="/EditarPsico" className={styles.linkHome}>
                Editar Perfil
              </Link> 
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
                <HiCalendar  className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarClientesPsico">
              <div className={styles.linkSlider}>
                <HiUsers className={styles.icon} />
                <p>Gerenciar Clientes</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarMental">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Gerenciar Bem-Estar </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/questionarioPsico">
              <div className={styles.linkSlider}>
                <HiClipboardList className={styles.icon} />
                <p>Questiónarios </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/chatPsico">
              <div className={styles.linkSlider}>
                <HiChatAlt2 className={styles.icon} />
                <p>Chat </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/analisarProgressoPsico">
              <div className={styles.linkSlider}>
                <HiChartBar className={styles.icon} />
                <p>Analisar Progresso</p>
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

export default ConsultaPsico
