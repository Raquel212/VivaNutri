import { useState } from "react"
import { FaBrain, FaUserAlt } from "react-icons/fa" // Ícone para Paciente
import { GiFruitBowl } from "react-icons/gi" // Ícone para Nutricionista
import { Link, useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import styles from "./Registrar.module.css"

function Registrar() {
  const [role, setRole] = useState("")
  const navigate = useNavigate()

  const handleCardClick = (roleValue) => {
    setRole(roleValue)
    navigate(`/${roleValue}`)
  }

  return (
    <>
      <Header />
      <div className={styles.containerRegistro}>
        <div className={styles.boxRegistro}>
          <h2 className={styles.tituloRegistro}>Escolha o Tipo de Usuário:</h2>
          <div className={styles.userOptions}>
            <div
              className={`${styles.userOption} ${
                role === "CadastroPaciente" ? styles.selected : ""
              }`}
              onClick={() => handleCardClick("CadastroPaciente")}
            >
              <div className={styles.icon_text}>
                <FaUserAlt size={50} />
                <span>Paciente</span>
              </div>
            </div>
            <div
              className={`${styles.userOption} ${
                role === "CadastroNutri" ? styles.selected : ""
              }`}
              onClick={() => handleCardClick("CadastroNutri")}
            >
              <div className={styles.icon_text}>
                <GiFruitBowl size={50} />
                <span>Nutricionista</span>
              </div>
            </div>
            <div
              className={`${styles.userOption} ${
                role === "CadastroPsicologo" ? styles.selected : ""
              }`}
              onClick={() => handleCardClick("CadastroPsicologo")}
            >
              <div className={styles.icon_text}>
                <FaBrain size={50} />
                <span>Psicólogo</span>
              </div>
            </div>
          </div>
          <div className={styles.voltar}>
            <Link to="/entrar" className={styles.voltarRegistrar}>
              Voltar ao Login
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Registrar
