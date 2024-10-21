import { useState } from "react"
import { FaUserCircle,  FaBlender  } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoFastFood, IoBarChart, IoChatbox } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./RefeicaoPaciente.module.css"

function RefeicaoPaciente() {
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
      foto: "/Img_Home.png", // URL da imagem de exemplo
      tipoRefeicao: "Almoço",
      data: "2024-10-01",
      horario: "12:30",
      descricao: "Salada de quinoa com legumes grelhados e molho de tahine.",
      fome: 5,
      saciedade: 7,
      comentarioNutricionista: "Excelente escolha de alimentos balanceados. Continue assim!",
      avaliacaoNutricionista: 5

      
      
    },
    {
      id: 2,
      foto: "/Img_Home.png", // URL da imagem de exemplo
      tipoRefeicao: "Almoço",
      data: "2024-10-01",
      horario: "12:30",
      descricao: "Salada de quinoa com legumes grelhados e molho de tahine.",
      fome: 5,
      saciedade: 7,
      comentarioNutricionista: "Excelente escolha de alimentos balanceados. Continue assim!",
      avaliacaoNutricionista: 5

      
      
    },
    {
      id: 3,
      foto: "/Img_Home.png", // URL da imagem de exemplo
      tipoRefeicao: "Almoço",
      data: "2024-10-01",
      horario: "12:30",
      descricao: "Salada de quinoa com legumes grelhados e molho de tahine.",
      fome: 5,
      saciedade: 7,
      comentarioNutricionista: "Excelente escolha de alimentos balanceados. Continue assim!",
      avaliacaoNutricionista: 5

      
      
    },
    {
      id: 4,
      foto: "/Img_Home.png", // URL da imagem de exemplo
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

      <main className={styles.mainContent}>
        <h1>Adiconar Refeições</h1>

        <form onSubmit={handleSubmit} className={styles.formRefeicao}>
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

          <div className={styles.refeicaoContainer}>
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
          </div>
        </section>
      </main>

      <footer className={styles.footerRefeicao}>
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

export default RefeicaoPaciente
