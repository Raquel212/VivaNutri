import { useState } from "react"
import { FaSave, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { HiCalendar } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom"
import styles from "./EditarPsico.module.css"

function EditarPsico() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }


  const handleSave = (e) => {
    e.preventDefault()
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

      <main className={styles.EditProfileMain}>
        <h1 className={styles.pageTitleEdit}>Editar Perfil do Usuário</h1>

        <form onSubmit={handleSave} className={styles.formEdit}>
          {/* Campos de Informações do Perfil */}
          <label>
            Nome Completo:
            <input
              type="text"
              defaultValue="Fernanda Souza"
              className={styles.input}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              defaultValue="fernanda.souza@email.com"
              className={styles.input}
            />
          </label>

          <label>
            Telefone:
            <input
              type="tel"
              defaultValue="(79) 9 9934-2717"
              className={styles.input}
            />
          </label>


          

          {/* Botão de Salvar */}
          <button type="submit" className={styles.saveButton}>
            <FaSave className={styles.icon} /> Salvar Alterações
          </button>

          <Link to="/homePsico" className={styles.voltarNutri}>
            Voltar
          </Link>
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
  )
}

export default EditarPsico
