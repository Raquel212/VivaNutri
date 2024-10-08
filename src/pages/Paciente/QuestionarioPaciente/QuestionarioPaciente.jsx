import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5";
import { MdFlatware } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./QuestionarioPaciente.module.css";
import { SiGoogleforms } from "react-icons/si";

function QuestionarioPaciente() {
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Links dos formulários (substitua pelos URLs reais dos seus formulários)
  const formsLinks = {
    nutricionista: "https://docs.google.com/document/d/1WgVdleqAeljJNb6NY1rzkpHlvnwibNuUZ7lrj0ZvS2s/edit?usp=sharing",
    psicologo: "https://docs.google.com/document/d/1jLdv_jzL2G1srs_lCSC9xtilOfNujrpyCejdjxb01Vw/edit?usp=sharing",
    conjunto: "https://docs.google.com/document/d/1LXZv2LT9b1P3ZhdFwCJ_5um-HcNkGg9fw9USHSX4hWs/edit?usp=sharing",
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
              <Link to="/notifications" className={styles.linkHome}>Notificações</Link>
              <Link to="/nutricionista" className={styles.linkHome}>Nutricionista</Link>
              <Link to="/psicologo" className={styles.linkHome}>Psicólogo</Link>
              <Link to="/edit-profile" className={styles.linkHome}>Editar Perfil</Link>
              <Link to="/entrar" className={styles.linkHome}>Logoff</Link>
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

      <main className={styles.questionarioMain}>
        <h1>Questionários</h1>
        <div className={styles.questionarioContainer}>
          {/* Botão para Questionário Nutricionista */}
          <a
            href={formsLinks.nutricionista}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.questionarioButton}
          >
            Questionário Nutricionista
          </a>

          {/* Botão para Questionário Psicólogo */}
          <a
            href={formsLinks.psicologo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.questionarioButton}
          >
            Questionário Psicólogo
          </a>

          {/* Botão para Questionário Conjunto */}
          <a
            href={formsLinks.conjunto}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.questionarioButton}
          >
            Questionário Conjunto
          </a>
        </div>
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

export default QuestionarioPaciente;
