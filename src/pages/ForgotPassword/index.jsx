import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "../../components/Container"

import Header from "../../components/Header"
import styles from "./ForgotPassword.module.css"

// eslint-disable-next-line react/prop-types
function ForgotPassword() {
  const [email, setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <Container>
        <div className={styles.containerForgot}>
          <div className={styles.imagemForgot}>
            <img src="./Logo.png" alt="Logo" className={styles.imgForgot} />
          </div>
          <h2 className={styles.tituloForgot}>Esqueceu sua Senha?</h2>
          <div className={styles.boxForgot}>
            <p className={styles.textoForgot}>
              Por favor, informe abaixo o e-mail associado a sua conta para
              enviarmos o link de alteração de senha.
            </p>
          </div>

          <from onSubmit={handleSubmit}>
            <div>
              <label className={styles.forgotLabel}>
                E-mail:
                <input
                  className={styles.intForgot}
                  type="email"
                  value={email}
                  name="email"
                  placeholder="seu_e-mail@hotmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            <button className={styles.btnForgot} type="submit">
              Enviar
            </button>
          </from>
          <br />
          <Link to="/entrar" className={styles.voltarForgot}>
            Voltar ao Login
          </Link>

          {/* <button className={styles.btnForgotred} onClick={onBack}>Voltar ao Login</button> */}
        </div>
      </Container>

    </>
  )
}

export default ForgotPassword
