import { useState } from "react"
import { FaSave, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"


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
                <p>Plano Alimentar </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/consultaNutriPsico">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/chatNutri">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Chat </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/receitasNutri">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Adicionar Receitas </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/questionariosNutri">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Questionários </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/analisarProgresso">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Analisar Progresso </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarClientesNutri">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Gerenciar Clientes </p>
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
              defaultValue="(79) 9 9860-5972"
              className={styles.input}
            />
          </label>


          

          {/* Botão de Salvar */}
          <button type="submit" className={styles.saveButton}>
            <FaSave className={styles.icon} /> Salvar Alterações
          </button>

          <Link to="/homeNutriPsico" className={styles.voltarNutri}>
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
