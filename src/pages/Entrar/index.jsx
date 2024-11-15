import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import styles from "./Entrar.module.css"
// import { FaLock} from "react-icons/fa";
import Footer from "../../components/Footer";

const Entrar = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Dados de Login:", { username, password })

    // Simule a validação de login e o tipo de usuário
    let userType = "" // Este valor deve ser determinado pela validação de login

    // Simulação de validação
    if (username === "tayssa" && password === "1234") {
      userType = "tayssa"
    } else if (username === "nutri" && password === "1234") {
      userType = "nutri"
    } else if (username === "psicologo" && password === "1234") {
      userType = "psicologo"
    } else {
      alert("Usuário não Cadastrado")
      return
    }

    // Salvar tipo de usuário no localStorage
    localStorage.setItem("userType", userType)

    // Redirecionar para a página específica com base no tipo de usuário
    if (userType === "tayssa") {
      navigate("/homePaciente")
    } else if (userType === "nutri") {
      navigate("/homeNutriPsico")
    } else if (userType === "psicologo") {
      navigate("/homePsico")
    }
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.formimagem}>
          <img src="/Logo.png" alt="Imagem" />
        </div>
        <form onSubmit={handleSubmit} className={styles.fromEntrar}>
          <h1 className={styles.tituloEntrar}> Acesse o sistema</h1>
          <div className={styles.inputfield}>
            <input
              type="text"
              placeholder="Nome do Usuário"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* <FaUser className="icon" /> */}
          </div>
          <div className={styles.inputfield}>
            <input
              type="password"
              placeholder="Senha"
              required
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FaLock className={styles.icon} /> */}
          </div>

          <div className={styles.recallforget}>
            <label className={styles.checkboxEntrar}>
              <input className={styles.checkboxEntrar} type="checkbox" />
              Lembre de Mim
            </label>
            <Link to="/forgotPassword" className={styles.esqueceusenha}>
              Esqueceu sua senha?
            </Link>
          </div>
          <button type="submit" className={styles.btnsubmit}>
            Login
          </button>
          <div className={styles.signuplink}>
            <p>
              Não tem uma conta?{" "}
              <Link to="/registrar" className={styles.registrar}>
                Registar
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Entrar
