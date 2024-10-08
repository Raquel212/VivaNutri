import { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5";
import { MdFlatware } from "react-icons/md";
import { Link } from "react-router-dom";
import BarsChart from "../../../components/Grafico";
import styles from "./HomePaciente.module.css";
import { IoChevronForward } from 'react-icons/io5';
import { SiGoogleforms } from "react-icons/si";


function HomePaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
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
              <Link to="/notifications" className={styles.linkHome}>
                Notificações
              </Link>
              <Link to="/" className={styles.linkHome}>
                Nutricionista
              </Link>
              <Link to="/" className={styles.linkHome}>
                Psicólogo
              </Link>
              <Link to="/edit-profile" className={styles.linkHome}>
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
            <Link to="/receitasFavoritasPaciente">
              <div className={styles.linkSlider}>
                <FaStar className={styles.icon} />
                <p>Receitas Favoritas</p>
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
        <div className={styles.planoAlimentarCard}>
          <img src="/Img_Home.png" alt="Plano Alimentar" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3>Plano alimentar</h3>
            <p>Acompanhe todo o planejamento feito pelo seu Nutricionista.</p>
            <p className={styles.nutriName}>Prescrição feita por: Victor Santos</p>
          </div>
          <div className={styles.arrowIcon}>
            <IoChevronForward size={40} />
          </div>
        </div>

        <div className={styles.mainContent}>
        {/* 1 */}
          <section className={styles.section01}>
            <h2>Próximas refeições</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <p>Café da Manhã</p>
                <p>7h</p>
              </div>

              <div className={styles.card}>
                <p>Lanche da Manhã</p>
                <p>10h</p>
              </div>

              <div className={styles.card}>
                <p>Almoço</p>
                <p>13h</p>
              </div>

              <div className={styles.card}>
                <p>Lanche da Tarde</p>
                <p>15h30</p>
              </div>

              <div className={styles.card}>
                <p>Jantar</p>
                <p>19h</p>
              </div>

              <div className={styles.card}>
                <p>Ceia</p>
                <p>21h</p>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section className={styles.section02}>
            <h2>Meu progresso</h2>
            <div className={styles.progressCard}>
              <p>Peso Corporal</p>
              <h3>87.25Kg</h3>
              <div className={styles.progressDetails}>
                <p>25% Massa Gorda</p>
                <p>75% Massa Magra</p>
              </div>
              <div
                className="bg-light mx-auto px-2 border border-2 border-primary"
                style={{ width: "250px", height: "125px" }}
              >
                <BarsChart />
              </div>
            </div>
          </section>

          {/* 3 */}
          <section className={styles.section03}>
            <h2>Próxima consulta</h2>
            <div className={styles.consultationCard}>
              <p>Domingo | 18/08/2024</p>
              <p>JFC Trade Center</p>
              <p>12h</p>
              <p>Dra. Martins</p>
            </div>
          </section>
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

export default HomePaciente