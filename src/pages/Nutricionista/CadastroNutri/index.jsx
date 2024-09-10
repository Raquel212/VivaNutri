import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import Header from "../../../components/Header"
import styles from "./CadastroNutri.module.css"

const CadastroNutri = () => {
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

    if (!validateCRN(form.crn)) {
      alert("CRN inválido.")
      return
    }

    localStorage.setItem("psicologo", JSON.stringify(form))
    alert("Cadastro realizado com sucesso!")
    navigate("/homeNutriPsico")
  }

  const validateCRN = (crn) => {
    // Verificação do CRN-5: deve começar com "CRN-5" seguido por um espaço e um número sequencial de 1 a 5 dígitos
    const crnRegex = /^CRN-5 \d{1,5}$/
    return crnRegex.test(crn)
  }

  return (
    <>
      <Header />
      <div className={styles.containerNutri}>
        <form className={styles.nutriFrom} onSubmit={handleSubmit}>
          <h2 className={styles.tituloNutri}>Cadastro de Nutricionista</h2>
          <label className={styles.nutriLabel}>
            E-mail:
            <input
              className={styles.intNutri}
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.nutriLabel}>
            Telefone:
            <input
              className={styles.intNutri}
              type="tel"
              name="telefone"
              placeholder="Telefone"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.nutriLabel}>
            Nome Completo:
            <input
              className={styles.intNutri}
              type="text"
              name="nomeCompleto"
              placeholder="Nome Completo"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.nutriLabel}>
            CRN:
            <input
              className={styles.intNutri}
              type="text"
              name="crn"
              placeholder="CRN"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.nutriLabel}>
            Nome de Usuário:
            <input
              className={styles.intNutri}
              type="text"
              name="nomeUsuario"
              placeholder="Nome de Usuário"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.nutriLabel}>
            Senha:
            <input
              className={styles.intNutri}
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.nutriLabel}>
            Confirmar Senha:
            <input
              className={styles.intNutri}
              type="password"
              name="confirmaSenha"
              placeholder="Confirmar Senha"
              onChange={handleChange}
              required
            />
          </label>

          <button className={styles.btnNutri} type="submit">
            Cadastrar
          </button>
          <br />
          <Link to="/registrar" className={styles.voltarNutri}>
            Voltar
          </Link>
        </form>
      </div>

    </>
  )
}

export default CadastroNutri
