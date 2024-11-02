import { useEffect, useState } from "react"
import { FaBlender, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./PlanoAlimentarPaciente.module.css"

function PlanoAlimentarPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [planoAlimentar, setPlanoAlimentar] = useState([]) // Estado para armazenar o plano alimentar
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda-feira") // Estado para armazenar o dia selecionado

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
          ceia: "Uma maça",
        },
      },
      {
        dia: "Terça-feira",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Biscoito e suco",
          almoco: "Peixe assado com arroz integral",
          lancheTarde: "Não sei ainda",
          jantar: "Salada de grãos",
          ceia: "Uma maça",
        },
      },
      {
        dia: "Quarta-feira",
        refeicoes: {
          cafeManha: "Pão integral com queijo",
          lancheManha: "Frutas",
          almoco: "Carne com legumes",
          lancheTarde: "Iogurte",
          jantar: "Sopa de lentilha",
          ceia: "Uma banana",
        },
      },
      {
        dia: "Quinta-feira",
        refeicoes: {
          cafeManha: "Omelete com vegetais",
          lancheManha: "Frutas",
          almoco: "Frango grelhado com arroz integral",
          lancheTarde: "Biscoito de arroz",
          jantar: "Sopa de legumes",
          ceia: "Iogurte",
        },
      },
      {
        dia: "Sexta-feira",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Suco natural",
          almoco: "Salada de grãos com peixe",
          lancheTarde: "Frutas secas",
          jantar: "Pizza de vegetais",
          ceia: "Chá",
        },
      },

      {
        dia: "Sabádo",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Suco natural",
          almoco: "Salada de grãos com peixe",
          lancheTarde: "Frutas secas",
          jantar: "Pizza de vegetais",
          ceia: "Chá",
        },
      },

      {
        dia: "Domingo",
        refeicoes: {
          cafeManha: "Iogurte com granola",
          lancheManha: "Suco natural",
          almoco: "Salada de grãos com peixe",
          lancheTarde: "Frutas secas",
          jantar: "Pizza de vegetais",
          ceia: "Chá",
        },
      },
    ]
    setPlanoAlimentar(planoExemplo)
  }, [])

  // Função para mudar o dia selecionado
  const handleDiaClick = (dia) => {
    setDiaSelecionado(dia)
  }

  // Encontrando o plano alimentar para o dia selecionado
  const planoDiaSelecionado = planoAlimentar.find(
    (plano) => plano.dia === diaSelecionado
  )

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

      <main className={styles.mainContent}>
        <h1>Plano Alimentar</h1>

        <div className={styles.diasSemana}>
          {planoAlimentar.map((plano) => (
            <button
              key={plano.dia}
              className={
                diaSelecionado === plano.dia ? styles.diaAtivo : styles.dia
              }
              onClick={() => handleDiaClick(plano.dia)}
            >
              {plano.dia}
            </button>
          ))}
        </div>

        {planoDiaSelecionado && (
          <div className={styles.planoAlimentarDia}>
            <h2>{planoDiaSelecionado.dia}</h2>
            <ul>
              <li>
                <strong>Café da Manhã:</strong>{" "}
                {planoDiaSelecionado.refeicoes.cafeManha}
              </li>
              <li>
                <strong>Lanche da Manhã:</strong>{" "}
                {planoDiaSelecionado.refeicoes.lancheManha}
              </li>
              <li>
                <strong>Almoço:</strong> {planoDiaSelecionado.refeicoes.almoco}
              </li>
              <li>
                <strong>Lanche da Tarde:</strong>{" "}
                {planoDiaSelecionado.refeicoes.lancheTarde}
              </li>
              <li>
                <strong>Jantar:</strong> {planoDiaSelecionado.refeicoes.jantar}
              </li>
              <li>
                <strong>Ceia:</strong> {planoDiaSelecionado.refeicoes.ceia}
              </li>
            </ul>
          </div>
        )}
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
