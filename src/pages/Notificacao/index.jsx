import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  HiDocumentReport,
  HiCalendar,
  HiUsers,
  HiBookOpen,
  HiChartBar,
  HiClipboardList,
  HiChatAlt2,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineMedicalServices} from "react-icons/md"; // Import icons for notifications
import { RiAlertLine } from "react-icons/ri"; // Import a general notification icon
import styles from "./Notificacao.module.css";

function Notificacao() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const notifications = [
    { id: 1, type: "consulta", text: "Você tem uma nova consulta marcada para 20/11/2024." },
    { id: 2, type: "plano", text: "Seu paciente João Silva atualizou o plano alimentar." },
    { id: 3, type: "lembrete", text: "Lembrete: Revisar questionários respondidos." },
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
          <Link to="/homeNutriPsico">
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
              <Link to="/EditarNutri" className={styles.linkHome}>
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
            <Link to="/gerenciarPlanosAlimentares">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Plano Alimentar</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/consultaNutriPsico">
              <div className={styles.linkSlider}>
                <HiCalendar className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/gerenciarClientesNutri">
              <div className={styles.linkSlider}>
                <HiUsers className={styles.icon} />
                <p>Gerenciar Clientes</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/receitasNutri">
              <div className={styles.linkSlider}>
                <HiBookOpen className={styles.icon} />
                <p>Adicionar Receitas</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/analisarProgresso">
              <div className={styles.linkSlider}>
                <HiChartBar className={styles.icon} />
                <p>Analisar Progresso</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/questionariosNutri">
              <div className={styles.linkSlider}>
                <HiClipboardList className={styles.icon} />
                <p>Questionários</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/chatNutri">
              <div className={styles.linkSlider}>
                <HiChatAlt2 className={styles.icon} />
                <p>Chat</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.notNutri}>
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
  );
}

export default Notificacao;
