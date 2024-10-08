import { useState } from "react"
import { FaUserCircle, FaStar } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoFastFood, IoBarChart, IoChatbox } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./PlanoAlimentarPaciente.module.css"

function PlanoAlimentarPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [foto, setFoto] = useState(null)
  const [tipoRefeicao, setTipoRefeicao] = useState("")
  const [data, setData] = useState("")
  const [horario, setHorario] = useState("")
  const [descricao, setDescricao] = useState("")
  const [fome, setFome] = useState(0)
  const [saciedade, setSaciedade] = useState(0)
  
  // Refeição pré-adicionada
  const [refeicoes, setRefeicoes] = useState([
    {
      id: 1,
      foto: "data:image/jpeg;base64,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", // URL da imagem de exemplo
      tipoRefeicao: "Almoço",
      data: "2024-10-01",
      horario: "12:30",
      descricao: "Salada de quinoa com legumes grelhados e molho de tahine.",
      fome: 5,
      saciedade: 7,
      comentarioNutricionista: "Excelente escolha de alimentos balanceados. Continue assim!",
      avaliacaoNutricionista: 5
    }
  ])

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFoto(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!tipoRefeicao || !data || !horario) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    const novaRefeicao = {
      id: Date.now(),
      foto,
      tipoRefeicao,
      data,
      horario,
      descricao,
      fome,
      saciedade,
      comentarioNutricionista: "Ótima refeição! Continue assim.",
      avaliacaoNutricionista: 5
    }

    setRefeicoes([novaRefeicao, ...refeicoes])

    // Resetar o formulário
    setFoto(null)
    setTipoRefeicao("")
    setData("")
    setHorario("")
    setDescricao("")
    setFome(0)
    setSaciedade(0)
  }

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
            <Link to="/receitasFavoritasPaciente">
              <div className={styles.linkSlider}>
                <FaStar className={styles.icon} />
                <p>Receitas Favoritas</p>
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

        <form onSubmit={handleSubmit} className={styles.formPlanoAlimentar}>
          <div className={styles.formGroup}>
            <label>Foto da Refeição:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {foto && <img src={foto} alt="Refeição" className={styles.previewImagem} />}
          </div>

          <div className={styles.formGroup}>
            <label>Tipo de Refeição:</label>
            <select value={tipoRefeicao} onChange={(e) => setTipoRefeicao(e.target.value)} required>
              <option value="">Selecione</option>
              <option value="Café da Manhã">Café da Manhã</option>
              <option value="Lanche da Manhã">Lanche da Manhã</option>
              <option value="Almoço">Almoço</option>
              <option value="Lanche da Tarde ">Lanche da Tarde </option>
              <option value="Jantar">Jantar</option>
              <option value="Ceia">Ceia</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Data:</label>
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
          </div>

          <div className={styles.formGroup}>
            <label>Horário:</label>
            <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} required />
          </div>

          <div className={styles.formGroup}>
            <label>Descrição:</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descreva sua refeição..."
            />
          </div>

          <div className={styles.formGroup}>
            <label>Nível de Fome (0-10):</label>
            <input
              type="number"
              value={fome}
              onChange={(e) => setFome(e.target.value)}
              min="0"
              max="10"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Nível de Saciedade (0-10):</label>
            <input
              type="number"
              value={saciedade}
              onChange={(e) => setSaciedade(e.target.value)}
              min="0"
              max="10"
            />
          </div>

          <button type="submit" className={styles.botaoAdicionar}>
            Adicionar Refeição
          </button>
        </form>

        <section className={styles.listaRefeicoes}>
          <h2>Refeições Adicionadas</h2>
          {refeicoes.length === 0 ? (
            <p>Nenhuma refeição adicionada ainda.</p>
          ) : (
            refeicoes.map((refeicao) => (
              <div key={refeicao.id} className={styles.refeicaoCard}>
                {refeicao.foto && (
                  <img src={refeicao.foto} alt="Refeição" className={styles.imagemRefeicao} />
                )}
                <div className={styles.infoRefeicao}>
                  <p><strong>Tipo:</strong> {refeicao.tipoRefeicao}</p>
                  <p><strong>Data:</strong> {refeicao.data}</p>
                  <p><strong>Horário:</strong> {refeicao.horario}</p>
                  <p><strong>Descrição:</strong> {refeicao.descricao}</p>
                  <p><strong>Nível de Fome:</strong> {refeicao.fome}/10</p>
                  <p><strong>Nível de Saciedade:</strong> {refeicao.saciedade}/10</p>
                </div>
                <div className={styles.comentarios}>
                  <h3>Comentários do Nutricionista:</h3>
                  <p>{refeicao.comentarioNutricionista}</p>
                  <h3>Avaliação do Nutricionista:</h3>
                  <p>{refeicao.avaliacaoNutricionista}/5</p>
                </div>
              </div>
            ))
          )}
        </section>
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
