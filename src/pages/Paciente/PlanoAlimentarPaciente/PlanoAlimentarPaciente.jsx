import { useState, useEffect } from "react"
import { FaUserCircle, FaBlender } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoFastFood, IoBarChart, IoChatbox } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./PlanoAlimentarPaciente.module.css"

function PlanoAlimentarPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [planoAlimentar, setPlanoAlimentar] = useState([]) // Estado para armazenar o plano alimentar

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  // Simulando busca de dados (substituir por requisição ao backend)
  useEffect(() => {
    const planoExemplo = [
      {
        dia: "Segunda-feira",
        refeicoes: {
          cafeManha: "Ovos mexidos com pão integral",
          lancheManha: "Biscoito e suco",
          almoco: "Frango grelhado com salada",
          lancheTarde: "Não sei ainda",
          jantar: "Sopa de legumes",
          ceia: "Uma maça"
        }
      },
      {
        dia: "Terça-feira",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Biscoito e suco",
          almoco: "Peixe assado com arroz integral",
          lancheTarde: "Não sei ainda",
          jantar: "Salada de grãos",
          ceia: "Uma maça"
        }
      },
      {
        dia: "Quarta-feira",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Biscoito e suco",
          almoco: "Peixe assado com arroz integral",
          lancheTarde: "Não sei ainda",
          jantar: "Salada de grãos",
          ceia: "Uma maça"
        }
      },
      {
        dia: "Quinta-feira",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Biscoito e suco",
          almoco: "Peixe assado com arroz integral",
          lancheTarde: "Não sei ainda",
          jantar: "Salada de grãos",
          ceia: "Uma maça"
        }
      },
      {
        dia: "Sexta-feira",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Biscoito e suco",
          almoco: "Peixe assado com arroz integral",
          lancheTarde: "Não sei ainda",
          jantar: "Salada de grãos",
          ceia: "Uma maça"
        }
      },
    ]
    setPlanoAlimentar(planoExemplo)
  }, [])

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

      <main className={styles.mainContent}>
        <h1>Plano Alimentar da Semana 1</h1>
        <div className={styles.planoAlimentar}>
          {planoAlimentar.map((dia, index) => (
            <div key={index} className={styles.diaPlano}>
              <h2>{dia.dia}</h2>
              <ul>
                <li><strong>Café da Manhã:</strong> {dia.refeicoes.cafeManha}</li>
                <li><strong>Lanche da Manhã:</strong> {dia.refeicoes.lancheManha}</li>
                <li><strong>Almoço:</strong> {dia.refeicoes.almoco}</li>
                <li><strong>Lanche da Tarde:</strong> {dia.refeicoes.lancheTarde}</li>
                <li><strong>Jantar:</strong> {dia.refeicoes.jantar}</li>
                <li><strong>Ceia:</strong> {dia.refeicoes.ceia}</li>
              </ul>
            </div>
          ))}
        </div>

        <h2 className={styles.tituloPlanoAlimentar}>Plano Alimentar da Semana 2</h2>
        <div className={styles.planoAlimentar}>
          {planoAlimentar.map((dia, index) => (
            <div key={index} className={styles.diaPlano}>
              <h2>{dia.dia}</h2>
              <ul>
                <li><strong>Café da Manhã:</strong> {dia.refeicoes.cafeManha}</li>
                <li><strong>Almoço:</strong> {dia.refeicoes.almoco}</li>
                <li><strong>Jantar:</strong> {dia.refeicoes.jantar}</li>
              </ul>
            </div>
          ))}
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

export default PlanoAlimentarPaciente
