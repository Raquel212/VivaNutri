import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header"
import styles from "./CadastroPsicologo.module.css"

const CadastroPsicologo = () => {
  const [form, setForm] = useState({
    email: "",
    telefone: "",
    nomeCompleto: "",
    crp: "",
    nomeUsuario: "",
    senha: "",
    confirmaSenha: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.senha !== form.confirmaSenha) {
      alert("As senhas não coincidem.")
      return
    }

    if (!validateCRP(form.crp)) {
      alert("CRP inválido.")
      return
    }

    localStorage.setItem("psicologo", JSON.stringify(form))
    alert("Cadastro realizado com sucesso!!")
    navigate("/homePsico")
  }

  const validateCRP = (crp) => {
    // Verificação do CRP-19: deve começar com "CRP 19/" seguido por um número sequencial de 1 a 5 dígitos
    const crpRegex = /^CRP 19\/\d{1,5}$/
    return crpRegex.test(crp)
  }

  return (
    <>
      <Header />
      <div className={styles.containerPsicologo}>
        <form className={styles.psicologoFrom} onSubmit={handleSubmit}>
          <h2 className={styles.tituloPsicologo}>Cadastro de Psicólogo</h2>
          <label className={styles.psicologoLabel}>
            E-mail:
            <input
              className={styles.intPsicologo}
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.psicologoLabel}>
            Telefone:
            <input
              className={styles.intPsicologo}
              type="tel"
              name="telefone"
              placeholder="Telefone"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.psicologoLabel}>
            Nome Completo:
            <input
              className={styles.intPsicologo}
              type="text"
              name="nomeCompleto"
              placeholder="Nome Complento"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.psicologoLabel}>
            CRP:
            <input
              className={styles.intPsicologo}
              type="text"
              name="crp"
              placeholder="CRP"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.psicologoLabel}>
            Nome de Usuário:
            <input
              className={styles.intPsicologo}
              type="text"
              name="nomeUsuario"
              placeholder="Nome de Usuário"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.psicologoLabel}>
            Senha:
            <input
              className={styles.intPsicologo}
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.psicologoLabel}>
            Confirmar Senha:
            <input
              className={styles.intPsicologo}
              type="password"
              name="confirmaSenha"
              placeholder="Confirmar Senha"
              onChange={handleChange}
              required
            />
          </label>

          <button className={styles.btnPsicologo} type="submit">
            Cadastrar
          </button>
          <br />
          <Link to="/registrar" className={styles.voltarPsico}>
            Voltar
          </Link>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default CadastroPsicologo
