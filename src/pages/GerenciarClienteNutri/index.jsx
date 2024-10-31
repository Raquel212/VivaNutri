import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { HiCalendar } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom"
import styles from "./GerenciarClientesNutri.module.css"

function GerenciarClienteNutri() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clients = [
    { name: "Alice Santana", image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Beatriz Pereira", image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" }
    // { name: "Marina Barros", image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" },
    // { name: "Maria Gomes", image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <header className={styles.headerHomePacie}>
        <div className={styles.logo}>
          <Link to="/homeNutriPsico">
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
              <Link to="/EditarNutri" className={styles.linkHome}>
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
            <Link to="/gerenciarPlanosAlimentares">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Plano Alimentar </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/consultaNutriPsico">
              <div className={styles.linkSlider}>
                <HiCalendar className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarClientesNutri">
              <div className={styles.linkSlider}>
                <HiUsers  className={styles.icon} />
                <p>Gerenciar Clientes </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/receitasNutri">
              <div className={styles.linkSlider}>
                <HiBookOpen className={styles.icon} />
                <p>Adicionar Receitas </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/analisarProgresso">
              <div className={styles.linkSlider}>
                < HiChartBar className={styles.icon} />
                <p>Analisar Progresso </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/questionariosNutri">
              <div className={styles.linkSlider}>
                <HiClipboardList className={styles.icon} />
                <p>Questionários </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/chatNutri">
              <div className={styles.linkSlider}>
                <HiChatAlt2  className={styles.icon} />
                <p>Chat </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={styles.nutriHomeTitle}>Clientes</h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar cliente..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>


        <div className={styles.clients}>
          {filteredClients.length > 0 ? (
            filteredClients.map((client, index) => (
              <div key={index} className={styles.clientCard}>
                <img src={client.image} alt={client.name} className={styles.clientImage} />
                <div className={styles.clientInfo}>
                  <div className={styles.name}>{client.name}</div>
                  <Link to={`/verPerfilNutri/`} className={styles.viewProfile}>Ver Perfil</Link>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noClients}>Nenhum cliente encontrado.</p>
          )}
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

export default GerenciarClienteNutri
