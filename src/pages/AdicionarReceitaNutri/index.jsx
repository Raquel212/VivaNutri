import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiDocumentReport, HiCalendar, HiUsers, HiBookOpen, HiChartBar, HiClipboardList, HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./AdicionarReceitaNutri.module.css";

function AdicionarReceitaNutri() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [tempoPreparo, setTempoPreparo] = useState("");
  const [receitas, setReceitas] = useState([]);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaReceita = { id: Date.now(), titulo, ingredientes, modoPreparo, tempoPreparo };
    setReceitas([...receitas, novaReceita]);
    setTitulo("");
    setIngredientes("");
    setModoPreparo("");
    setTempoPreparo("");
  };

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
              <Link to="/notifications" className={styles.linkHome}>Notificações</Link>
              <Link to="/EditarNutri" className={styles.linkHome}>Editar Perfil</Link>
              <Link to="/entrar" className={styles.linkHome}>Logoff</Link>
            </div>
          )}
        </div>
      </header>

      <nav className={styles.sidebar}>
        <ul>
          <li><Link to="/gerenciarPlanosAlimentares"><div className={styles.linkSlider}><HiDocumentReport className={styles.icon} /><p>Plano Alimentar</p></div></Link></li>
          <li><Link to="/consultaNutriPsico"><div className={styles.linkSlider}><HiCalendar className={styles.icon} /><p>Consultas</p></div></Link></li>
          <li><Link to="/gerenciarClientesNutri"><div className={styles.linkSlider}><HiUsers className={styles.icon} /><p>Gerenciar Clientes</p></div></Link></li>
          <li><Link to="/receitasNutri"><div className={styles.linkSlider}><HiBookOpen className={styles.icon} /><p>Adicionar Receitas</p></div></Link></li>
          <li><Link to="/analisarProgresso"><div className={styles.linkSlider}><HiChartBar className={styles.icon} /><p>Analisar Progresso</p></div></Link></li>
          <li><Link to="/questionariosNutri"><div className={styles.linkSlider}><HiClipboardList className={styles.icon} /><p>Questionários</p></div></Link></li>
          <li><Link to="/chatNutri"><div className={styles.linkSlider}><HiChatAlt2 className={styles.icon} /><p>Chat</p></div></Link></li>
        </ul>
      </nav>

      <main>
        <h1 className={styles.nutriHomeTitle}>Adicionar Novas Receitas</h1>
        
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label>Título da Receita:</label>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </div>

          <div className={styles.formGroup}>
            <label>Ingredientes:</label>
            <textarea value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} placeholder="Liste os ingredientes..." required />
          </div>

          <div className={styles.formGroup}>
            <label>Modo de Preparo:</label>
            <textarea value={modoPreparo} onChange={(e) => setModoPreparo(e.target.value)} placeholder="Descreva o modo de preparo..." required />
          </div>

          <div className={styles.formGroup}>
            <label>Tempo de Preparo (em minutos):</label>
            <input type="number" value={tempoPreparo} onChange={(e) => setTempoPreparo(e.target.value)} min="1" required />
          </div>

          <button type="submit" className={styles.botaoAdicionar}>Adicionar Receita</button>
        </form>

        <section className={styles.listaReceitas}>
          <div className={styles.receitaContainer}>
            <h2>Receitas Adicionadas</h2>
            {receitas.length === 0 ? (
              <p>Nenhuma receita adicionada ainda.</p>
            ) : (
              receitas.map((receita) => (
                <div key={receita.id} className={styles.receitaCard}>
                  <div className={styles.infoReceita}>
                    <p><strong>Título:</strong> {receita.titulo}</p>
                    <p><strong>Ingredientes:</strong> {receita.ingredientes}</p>
                    <p><strong>Modo de Preparo:</strong> {receita.modoPreparo}</p>
                    <p><strong>Tempo de Preparo:</strong> {receita.tempoPreparo} minutos</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footerHomeP}>
        <p className={styles.copyright}>&copy; 2024 VivaNutri</p>
        <ul className={styles.links}>
          <li className={styles.linksLi}><a href="#">Política de Privacidade</a></li>
          <li className={styles.linksLi}><a href="#">Termos de Uso</a></li>
        </ul>
      </footer>
    </>
  );
}

export default AdicionarReceitaNutri;
