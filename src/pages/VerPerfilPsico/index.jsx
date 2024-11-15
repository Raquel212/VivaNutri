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
import styles from "./VerPerfilPsico.module.css";

function VerPerfilPsico() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [perfilData, setPerfilData] = useState({
    contato: "",
    dataConsulta: "",
    alimentacaoSemanal: "",
    perdaPeso: "",
    seguiuPlano: "",
  });

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerfilData({ ...perfilData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar as informações do perfil.
    console.log("Dados do Perfil:", perfilData);
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

      <main className={styles.VerPerfilMain}>
        <h2>Perfil do Cliente</h2>
        <form onSubmit={handleSubmit} className={styles.perfilForm}>
          <label>
            Contato:
            <input
              type="text"
              name="contato"
              value={perfilData.contato}
              onChange={handleInputChange}
              placeholder="Digite o contato do cliente"
            />
          </label>

          <label>
            Data da Consulta:
            <input
              type="date"
              name="dataConsulta"
              value={perfilData.dataConsulta}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Como anda se sentido Semanamente:
            <textarea
              name="alimentacaoSemanal"
              value={perfilData.alimentacaoSemanal}
              onChange={handleInputChange}
              placeholder="Descreva como o paciente anda se sentido"
            />
          </label>

          <label>
            Seguiu o Plano Alimentar?
            <select
              name="seguiuPlano"
              value={perfilData.seguiuPlano}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Parcialmente">Parcialmente</option>
              <option value="Não">Não</option>
            </select>
          </label>

          <button type="submit">Salvar</button>
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

export default VerPerfilPsico;
