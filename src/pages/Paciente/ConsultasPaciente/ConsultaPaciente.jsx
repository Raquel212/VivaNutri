import { useState } from "react"
import {  FaBlender , FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { Link } from "react-router-dom"
import styles from "./ConsultaPaciente.module.css"
import { SiGoogleforms } from "react-icons/si";

function ConsultaPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]) // Data atual
  const [selectedNutricionistaTime, setSelectedNutricionistaTime] = useState("")
  const [selectedPsicologoTime, setSelectedPsicologoTime] = useState("")

  // Simulação de horários disponíveis para diferentes datas
  const availableTimes = {
    "2024-10-07": {
      nutricionista: ["10:00", "14:00", "16:00"],
      psicologo: ["09:00", "11:00", "15:00"],
    },
    "2024-10-08": {
      nutricionista: ["09:00", "12:00"],
      psicologo: ["10:00", "13:00", "16:00"],
    },
    // Adicione mais datas e horários conforme necessário
  }

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  const handleChangeDate = (e) => {
    setSelectedDate(e.target.value)
    setSelectedNutricionistaTime("")
    setSelectedPsicologoTime("")
  }

  const handleChangeNutricionistaTime = (e) => {
    setSelectedNutricionistaTime(e.target.value)
  }

  const handleChangePsicologoTime = (e) => {
    setSelectedPsicologoTime(e.target.value)
  }

  // Obtém os horários disponíveis para a data selecionada
  const nutricionistaTimes = availableTimes[selectedDate]?.nutricionista || []
  const psicologoTimes = availableTimes[selectedDate]?.psicologo || []

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
                < FaBlender  className={styles.icon} />
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

      <main>
        <h1>Consultas</h1>
        
        <div className={styles.consultaSection}>
          <h2>Consultas com Nutricionista</h2>
          <div className={styles.consultaDetails}>
            <label htmlFor="date">Escolha uma data:</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleChangeDate}
            />
            <p>Data da Consulta: <strong>{selectedDate}</strong></p>
            <form>
              <label htmlFor="nutricionista-time">Escolha um horário:</label>
              <select 
                id="nutricionista-time" 
                value={selectedNutricionistaTime} 
                onChange={handleChangeNutricionistaTime}
              >
                <option value="" disabled>Selecione um horário</option>
                {nutricionistaTimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
              <button type="button" className={styles.buttonConsulta}>Solicitar Troca de Horário</button>
            </form>
          </div>
        </div>

        <div className={styles.consultaSection}>
          <h2>Consultas com Psicólogo</h2>
          <div className={styles.consultaDetails}>
            <label htmlFor="date-psicologo">Escolha uma data:</label>
            <input
              type="date"
              id="date-psicologo"
              value={selectedDate}
              onChange={handleChangeDate}
            />
            <p>Data da Consulta: <strong>{selectedDate}</strong></p>
            <form>
              <label htmlFor="psicologo-time">Escolha um horário:</label>
              <select 
                id="psicologo-time" 
                value={selectedPsicologoTime} 
                onChange={handleChangePsicologoTime}
              >
                <option value="" disabled>Selecione um horário</option>
                {psicologoTimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
              <button type="button" className={styles.buttonConsulta}>Solicitar Troca de Horário</button>
            </form>
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

export default ConsultaPaciente
