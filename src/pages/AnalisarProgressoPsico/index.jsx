import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiDocumentReport, HiCalendar, HiUsers, HiBookOpen, HiChartBar, HiClipboardList, HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2"; // Importa um gráfico de linha
import styles from "./AnalisarProgressoPsico.module.css";

function AnalisarProgressoPsico() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  // Dados de exemplo para o gráfico de progresso
  const data = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Consumo de Calorias",
        data: [2000, 1800, 2200, 2100],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
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
              <Link to="/notifications" className={styles.linkHome}>Notificações</Link>
              <Link to="/EditarNutri" className={styles.linkHome}>Editar Perfil</Link>
              <Link to="/entrar" className={styles.linkHome}>Logoff</Link>
            </div>
          )}
        </div>
      </header>

      <nav className={styles.sidebar}>
        <ul>
          <li><Link to="/gerenciarPlanosAlimentares"><div className={styles.linkSlider}><HiDocumentReport className={styles.icon} /><p>Plano Alimentar</p></div></Link></li>
          <li><Link to="/consultaNutriPsico"><div className={styles.linkSlider}><HiCalendar className={styles.icon} /><p>Consultas</p></div></Link></li>
          <li><Link to="/gerenciarClientesNutri"><div className={styles.linkSlider}><HiUsers className={styles.icon} /><p>Gerenciar Clientes</p></div></Link></li>
          <li><Link to="/receitasNutri"><div className={styles.linkSlider}><HiBookOpen className={styles.icon} /><p>Adicionar Receitas</p></div></Link></li>
          <li><Link to="/analisarProgresso"><div className={styles.linkSlider}><HiChartBar className={styles.icon} /><p>Analisar Progresso</p></div></Link></li>
          <li><Link to="/questionariosNutri"><div className={styles.linkSlider}><HiClipboardList className={styles.icon} /><p>Questionários</p></div></Link></li>
          <li><Link to="/chatNutri"><div className={styles.linkSlider}><HiChatAlt2 className={styles.icon} /><p>Chat</p></div></Link></li>
        </ul>
      </nav>

      <main className={styles.mainContent}>
        <h1 className={styles.nutriHomeTitle}>Análise de Progresso do Paciente</h1>
        <section className={styles.progressSection}>
          <div className={styles.chartContainer}>
            <Line data={data} />
          </div>
          <div className={styles.analysisArea}>
            <h2>Análise do Nutricionista</h2>
            <textarea
              placeholder="Escreva sua análise aqui..."
              className={styles.analysisInput}
            ></textarea>
            <button className={styles.submitAnalysisButton}>Salvar Análise</button>
          </div>
        </section>
      </main>

      <footer className={styles.footerHomeP}>
        <p className={styles.copyright}>&copy; 2024 VivaNutri</p>
        <ul className={styles.links}>
          <li className={styles.linksLi}><a href="#">Política de Privacidade</a></li>
          <li className={styles.linksLi}><a href="#">Termos de Uso</a></li>
        </ul>
      </footer>
    </>
  );
}

export default AnalisarProgressoPsico;
