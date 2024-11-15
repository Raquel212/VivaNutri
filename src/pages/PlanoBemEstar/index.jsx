import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  HiDocumentReport,
  HiCalendar,
  HiUsers,
  HiChartBar,
  HiClipboardList,
  HiChatAlt2,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./PlanoBemEstar.module.css";

function PlanoBemEstar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [relatorio, setRelatorio] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o relatório ou enviar para um servidor
    alert("Relatório salvo com sucesso!");
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
              <Link to="/notificationsPsico" className={styles.linkHome}>
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
                <p>Gerenciar Bem-Estar</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/questionarioPsico">
              <div className={styles.linkSlider}>
                <HiClipboardList className={styles.icon} />
                <p>Questionários</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/chatPsico">
              <div className={styles.linkSlider}>
                <HiChatAlt2 className={styles.icon} />
                <p>Chat</p>
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

      <main className={styles.PlanoBemEstar}>
        <h2>Relatório de Bem-Estar Emocional</h2>
        <form onSubmit={handleSubmit} className={styles.formularioRelatorio}>
          <div className={styles.formGroup}>
            <label htmlFor="dataConsulta">Data da Consulta:</label>
            <input
              type="date"
              id="dataConsulta"
              value={dataConsulta}
              onChange={(e) => setDataConsulta(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="relatorio">Relatório da Consulta:</label>
            <textarea
              id="relatorio"
              value={relatorio}
              onChange={(e) => setRelatorio(e.target.value)}
              placeholder="Descreva o que foi discutido na consulta."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="observacoes">Observações Adicionais:</label>
            <textarea
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Observações adicionais sobre o paciente."
            />
          </div>

          <button type="submit" className={styles.botaoSalvar}>
            Salvar Relatório
          </button>
        </form>
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

export default PlanoBemEstar;
