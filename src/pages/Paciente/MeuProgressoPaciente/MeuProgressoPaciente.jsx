import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js" // Importar os componentes necessários
import { useState } from "react"
import { Bar, Line } from "react-chartjs-2"
import { FaBlender, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./MeuProgressoPaciente.module.css"

// Registrar os componentes necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function MeuProgressoPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  // Dados dos gráficos
  const massData = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"], // Etiquetas para o eixo x
    datasets: [
      {
        label: "Massa Magra (kg)",
        data: [60, 62, 63, 64], // Dados da massa magra
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
      {
        label: "Massa Gorda (kg)",
        data: [20, 19, 18, 17], // Dados da massa gorda
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
      },
    ],
  }

  const foodData = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"], // Etiquetas para o eixo x
    datasets: [
      {
        label: "Calorias Consumidas",
        data: [2000, 2200, 2100, 2300], // Dados de calorias consumidas
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  }

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

      <main>
        <h1>Meu Progresso</h1>
        <div className={styles.chartContainer}>
          <h2>Massa Magra e Gorda</h2>
          <Line data={massData} options={{ responsive: true }} />
        </div>
        <div className={styles.chartContainer}>
          <h2>Calorias Consumidas no Mês</h2>
          <Bar data={foodData} options={{ responsive: true }} />
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

export default MeuProgressoPaciente
