import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { HiCalendar } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom"
import styles from "./HomePsico.module.css"

function HomePsico() {
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
                <HiCalendar className={styles.icon} />
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
                <HiChatAlt2  className={styles.icon} />
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
        <h1 className={styles.nutriHomeTitle}>Olá, Fernanda!</h1>

        <p className={styles.sectionTitle}>Gerenciar clientes</p>
        <div className={styles.clients}>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Alice Santana"
            />
            <div className={styles.name}>Alice Santana</div>
          </div>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Beatriz Pereira"
            />
            <div className={styles.name}>Beatriz Pereira</div>
          </div>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Marina Barros"
            />
            <div className={styles.name}>Marina Barros</div>
          </div>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Marina Barros"
            />
            <div className={styles.name}>Maria Gomes</div>
          </div>
        </div>

        <div className={styles.doubleContainer}>
          <div className={styles.containerTwo}>
            <p className={styles.sectionTitle}>Ver consultas</p>
            <div className={styles.consultationList}>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>João Victor Nogueira</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 12h</p>
                </div>
              </div>

              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Beatriz Pereira</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 15h</p>
                </div>
              </div>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Marina Barros</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 16h</p>
                </div>
              </div>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Marina Barros</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 18h</p>
                </div>
              </div>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Marina Barros</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 20h</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.containerOne}>
            <p className={styles.sectionTitle}>Gerenciar Planos Mentais</p>
            <div className={styles.planList}>
              <div className={styles.planItem}>
                <div className={styles.planName}>Alice Santana</div>
                <div>Idade: 23 anos</div>
              </div>
              <div className={styles.planItem}>
                <div className={styles.planName}>Beatriz Pereira</div>
                <div>Idade: 21 anos</div>
              </div>
              <div className={styles.planItem}>
                <div className={styles.planName}>Marina Barros</div>
                <div>Idade: 25 anos</div>
              </div>
              <div className={styles.planItem}>
                <div className={styles.planName}>Maria Gomes</div>
                <div>Idade: 36 anos</div>
              </div>
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

export default HomePsico
