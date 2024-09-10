// src/pages/CadastroPaciente.jsx
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import styles from "./CadastroPaciente.module.css"

function CadastroPaciente() {
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [nomeCompleto, setNomeCompleto] = useState("")
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [redefineSenha, setRedefineSenha] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (senha !== redefineSenha) {
      alert("As senhas não coincidem.")
      return
    }

    const userData = {
      email,
      telefone,
      nomeCompleto,
      nomeUsuario,
      senha,
    }

    // Salvando no localStorage
    localStorage.setItem("paciente", JSON.stringify(userData))

    // Redirecionando para a tela Home do Paciente
    alert("Cadastro realizado com sucesso!")
    navigate("/HomePaciente")
  }

  return (
    <>
      <Header />
      <div className={styles.containerPaciente}>
        <form className={styles.pacienteFrom} onSubmit={handleSubmit}>
          <h2 className={styles.tituloPaciente}>Cadastro de Paciente</h2>
          <label className={styles.pacienteLabel}>
            E-mail:
            <input
              className={styles.intPaciente}
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className={styles.pacienteLabel}>
            Telefone:
            <input
              className={styles.intPaciente}
              type="tel"
              name="telefone"
              placeholder="Telefone"
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </label>
          <label className={styles.pacienteLabel}>
            Nome Completo:
            <input
              className={styles.intPaciente}
              type="text"
              name="nomeCompleto"
              placeholder="Nome Complento"
              onChange={(e) => setNomeCompleto(e.target.value)}
              required
            />
          </label>
          <label className={styles.pacienteLabel}>
            Nome de Usuário:
            <input
              className={styles.intPaciente}
              type="text"
              name="nomeUsuario"
              placeholder="Nome de Usuário"
              onChange={(e) => setNomeUsuario(e.target.value)}
              required
            />
          </label>
          <label className={styles.pacienteLabel}>
            Senha:
            <input
              className={styles.intPaciente}
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>
          <label className={styles.pacienteLabel}>
            Confirmar Senha:
            <input
              className={styles.intPaciente}
              type="password"
              name="confirmaSenha"
              placeholder="Confirmar Senha"
              onChange={(e) => setRedefineSenha(e.target.value)}
              required
            />
          </label>
          <button className={styles.btnPaciente} type="submit">
            Cadastrar
          </button>
          <br />
          <Link to="/registrar" className={styles.voltarPaciente}>
            Voltar
          </Link>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default CadastroPaciente
