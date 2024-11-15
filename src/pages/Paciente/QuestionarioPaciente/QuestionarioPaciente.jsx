import React from "react"
import { FaBlender, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./QuestionarioPaciente.module.css"

function QuestionarioPaciente() {
  const [userMenuOpen, setUserMenuOpen] = React.useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  // Links dos formulários (substitua pelos URLs reais dos seus formulários)
  const formsLinks = {
    nutricionista: "https://forms.gle/cDx2U2sTfQvjpFbT8",
    psicologo: "https://forms.gle/kTdKLNqghurYppbv8",
    corporal: "https://forms.gle/npyrYjrxWjntgj5V8",
    emocional: "https://forms.gle/zCrGmVBsstmvELV7A",
    saude: "https://forms.gle/L16cRvwDWJUvZTVe6",
    conjunto: "https://forms.gle/tU2S7KQx6jfdhVPv5",
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

      <main className={styles.questionarioMain}>
        <h1>Questionários</h1>
        <div className={styles.questionarioContainer}>
          {/* Cartão Questionário Nutricionista */}
          <div className={styles.questionarioCard}>
            <p>Questionário Nutricionista</p>
            <div className={styles.progress}>
              <div id={styles.progressBar} style={{ width: "80%" }}></div>
            </div>
            <p>Última atualização: 17/07/2024</p>
            <p>Progresso: 80%</p>
            <a
              href={formsLinks.nutricionista}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.questionarioButton}
            >
              Responder
            </a>
          </div>

          {/* Cartão Questionário Psicólogo */}
          <div className={styles.questionarioCard}>
            <p>Questionário Psicólogo - Alimentar</p>
            <div className={styles.progress}>
              <div
                className={styles.progressBar}
                style={{ width: "100%" }}
              ></div>
            </div>
            <p>Última atualização: 20/08/2024</p>
            <p>Progresso: 100%</p>
            <a
              href={formsLinks.psicologo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.questionarioButton}
            >
              Ver Resposta
            </a>
          </div>

          {/* Cartão Questionário Psicólogo */}
          <div className={styles.questionarioCard}>
            <p>Questionário Psicólogo - Corporal</p>
            <div className={styles.progress}>
              <div className={styles.progressBar} style={{ width: "0%" }}></div>
            </div>
            <p>Última atualização: 20/08/2024</p>
            <p>Progresso: 0%</p>
            <a
              href={formsLinks.corporal}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.questionarioButton}
            >
              Responder
            </a>
          </div>

          {/* Cartão Questionário Psicólogo */}
          <div className={styles.questionarioCard}>
            <p>Questionário Psicólogo - Emocional</p>
            <div className={styles.progress}>
              <div className={styles.progressBar} style={{ width: "0%" }}></div>
            </div>
            <p>Última atualização: 20/08/2024</p>
            <p>Progresso: 0%</p>
            <a
              href={formsLinks.emocional}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.questionarioButton}
            >
              Responder
            </a>
          </div>

          {/* Cartão Questionário Psicólogo */}
          <div className={styles.questionarioCard}>
            <p>Questionário Psicólogo - Sáude</p>
            <div className={styles.progress}>
              <div className={styles.progressBar} style={{ width: "0%" }}></div>
            </div>
            <p>Última atualização: 20/08/2024</p>
            <p>0% Conluído</p>
            <a
              href={formsLinks.saude}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.questionarioButton}
            >
              Responder
            </a>
          </div>

          {/* Cartão Questionário Conjunto */}
          <div className={styles.questionarioCard}>
            <p>Questionário Conjunto</p>
            <div className={styles.progress}>
              <div
                className={styles.progressBar}
                style={{ width: "100%" }}
              ></div>
            </div>
            <p>Última atualização: 25/09/2024</p>
            <p>Progresso: 0%</p>
            <a
              href={formsLinks.conjunto}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.questionarioButton}
            >
              Ver Resposta
            </a>
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

export default QuestionarioPaciente
