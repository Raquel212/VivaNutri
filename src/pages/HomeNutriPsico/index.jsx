import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"

import { Link } from "react-router-dom"
import styles from "./HomeNutriPsico.module.css"

function HomeNutriPsico() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }
  return (
    <>
      <header className={styles.headerHomePacie}>
        <div className={styles.logo}>
          <Link to="/homeNutri">
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
              {/* <Link to="/receitasFavoritasPaciente" className={styles.linkHome}>
                Receitas Favoritas
              </Link>
              <Link to="/" className={styles.linkHome}>
                Nutricionista
              </Link>
              <Link to="/" className={styles.linkHome}>
                Psicólogo
              </Link>
              <Link to="/edit-profile" className={styles.linkHome}>
                Editar Perfil
              </Link> */}
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
            <Link to="/consultaNutriPsico">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarPlanosAlimentares">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Gerenciar Planos </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={styles.nutriHomeTitle}>Olá, Maria!</h1>

        <p className={styles.sectionTitle}>Gerenciar clientes</p>
        <div className={styles.clients}>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Alice Santana"
            />
            <div className={styles.name}>Alice Santana</div>
          </div>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Beatriz Pereira"
            />
            <div className={styles.name}>Beatriz Pereira</div>
          </div>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Marina Barros"
            />
            <div className={styles.name}>Marina Barros</div>
          </div>
          <div className={styles.clientCard}>
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Marina Barros"
            />
            <div className={styles.name}>Maria Gomes</div>
          </div>
        </div>

        <div className={styles.doubleContainer}>
          <div className={styles.containerTwo}>
            <p className={styles.sectionTitle}>Ver consultas</p>
            <div className={styles.consultationList}>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>João Victor Nogueira</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 12h</p>
                </div>
              </div>

              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Beatriz Pereira</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 15h</p>
                </div>
              </div>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Marina Barros</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 16h</p>
                </div>
              </div>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Marina Barros</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 18h</p>
                </div>
              </div>
              <div className={styles.consultationItem}>
                <div className={styles.consultationDate}>09</div>
                <div className={styles.consultationInfo}>
                  <p>Marina Barros</p>
                  <p>Quarta-Feira | 09/08/2023</p>
                  <p>JFC Trade Center - 20h</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.containerOne}>
            <p className={styles.sectionTitle}>Gerenciar Planos alimentares</p>
            <div className={styles.planList}>
              <div className={styles.planItem}>
                <div className={styles.planName}>Alice Santana</div>
                <div>Idade: 23 anos</div>
              </div>
              <div className={styles.planItem}>
                <div className={styles.planName}>Beatriz Pereira</div>
                <div>Idade: 21 anos</div>
              </div>
              <div className={styles.planItem}>
                <div className={styles.planName}>Marina Barros</div>
                <div>Idade: 25 anos</div>
              </div>
              <div className={styles.planItem}>
                <div className={styles.planName}>Maria Gomes</div>
                <div>Idade: 36 anos</div>
              </div>
            </div>
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

export default HomeNutriPsico
