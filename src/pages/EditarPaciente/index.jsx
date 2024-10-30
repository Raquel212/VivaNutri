import { useState } from "react"
import { FaBlender, FaSave, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"

import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./EditarPaciente.module.css"

function EditarPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  const [selectedProfessional, setSelectedProfessional] = useState("")
  const [reason, setReason] = useState("")

  const handleSave = (e) => {
    e.preventDefault()
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

      <main className={styles.EditProfileMain}>
        <h1 className={styles.pageTitleEdit}>Editar Perfil do Usuário</h1>

        <form onSubmit={handleSave} className={styles.formEdit}>
          {/* Campos de Informações do Perfil */}
          <label>
            Nome Completo:
            <input
              type="text"
              defaultValue="Tayssa Silva"
              className={styles.input}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              defaultValue="tayssa.silva@email.com"
              className={styles.input}
            />
          </label>

          <label>
            Telefone:
            <input
              type="tel"
              defaultValue="(79) 9 9658-2116"
              className={styles.input}
            />
          </label>

          {/* Seleção de Novo Psicólogo ou Nutricionista */}
          <label>
            Deseja trocar de Psicólogo ou Nutricionista?
            <select
              value={selectedProfessional}
              onChange={(e) => setSelectedProfessional(e.target.value)}
              className={styles.input}
            >
              <option value="">Selecione</option>
              <option value="novoPsicologo">Novo Psicólogo</option>
              <option value="novoNutricionista">Novo Nutricionista</option>
            </select>
          </label>

          {/* Justificativa da Troca */}
          {selectedProfessional && (
            <label>
              Justifique o motivo da troca:
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Escreva o motivo..."
                className={styles.textarea}
              />
            </label>
          )}

          {/* Botão de Salvar */}
          <button type="submit" className={styles.saveButton}>
            <FaSave className={styles.icon} /> Salvar Alterações
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
  )
}

export default EditarPaciente
