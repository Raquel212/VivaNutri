import { useState } from "react"
import { FaBlender, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"

import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import { MdOutlineMedicalServices} from "react-icons/md"; // Import icons for notifications
import { RiAlertLine } from "react-icons/ri"; // Import a general notification icon
import styles from "./NotificacaoPaciente.module.css"

function NotificacaoPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  const notifications = [
    { id: 1, type: "consulta", text: "Sua consulta foi remarcada para 20/11/2024." },
    { id: 2, type: "plano", text: "Seu Plano Alimentar foi atualizado ." },
    { id: 3, type: "lembrete", text: "Lembrete: Responder os questionários pendentes." },
  ];

  // Function to render the appropriate icon based on notification type
  const renderIcon = (type) => {
    switch (type) {
      case "consulta":
        return <MdOutlineMedicalServices className={styles.notificationIcon} />;
      case "plano":
        return <HiDocumentReport className={styles.notificationIcon} />;
      case "lembrete":
        return <RiAlertLine className={styles.notificationIcon} />;
      default:
        return <RiAlertLine className={styles.notificationIcon} />;
    }
  };



  return (
    <>
      <header className={styles.headerHomePacie}>
        <div className={styles.logo}>
          <Link to="/homePaciente">
            <img src="/Logo_Sem.png" alt="Logo" className={styles.imagemLogo} />
          </Link>
        </div>

        <div className={styles.userName}>
          <FaUserCircle onClick={toggleUserMenu} className={styles.userIcon} />
          {userMenuOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/notificationsPaci" className={styles.linkHome}>
                Notificações
              </Link>
              <Link to="/receitasFavoritasPaciente" className={styles.linkHome}>
                Receitas Favoritas
              </Link>
              {/* <Link to="/" className={styles.linkHome}>
                Nutricionista
              </Link>
              <Link to="/" className={styles.linkHome}>
                Psicólogo
              </Link> */}
              <Link to="/EditarPaciente" className={styles.linkHome}>
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
            <Link to="/planoAlimentarPaciente">
              <div className={styles.linkSlider}>
                <IoFastFood className={styles.icon} />
                <p>Plano Alimentar</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/refeicaoPaciente">
              <div className={styles.linkSlider}>
                <MdFlatware className={styles.icon} />
                <p>Refeições</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/meuProgressoPaciente">
              <div className={styles.linkSlider}>
                <IoBarChart className={styles.icon} />
                <p>Meu Progresso</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/consultasPaciente">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/questionarioPaciente">
              <div className={styles.linkSlider}>
                <SiGoogleforms className={styles.icon} />
                <p>Questionários</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/receitasPaciente">
              <div className={styles.linkSlider}>
                <FaBlender className={styles.icon} />
                <p>Receitas</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/chatPaciente">
              <div className={styles.linkSlider}>
                <IoChatbox className={styles.icon} />
                <p>Chat</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.notPaciente}>
        <h2>Notificações</h2>
        <div className={styles.notifications}>
          {notifications.map((notification) => (
            <div key={notification.id} className={styles.notificationCard}>
              {renderIcon(notification.type)}
              <p>{notification.text}</p>
            </div>
          ))}
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

export default NotificacaoPaciente
