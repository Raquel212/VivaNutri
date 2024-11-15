import { useState } from "react";
import {  FaBlender , FaUserCircle } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5";
import { MdFlatware } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./ReceitasFavoritasPaciente.module.css";
import { SiGoogleforms } from "react-icons/si";

function ReceitasFavoritasPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [favoriteRecipes] = useState([
    { id: 1, name: "Salada de Frutas", description: "Uma mistura refrescante de frutas variadas." },
    { id: 2, name: "Frango Grelhado com Legumes", description: "Frango grelhado acompanhado de legumes assados." },
    { id: 3, name: "Smoothie Verde", description: "Bebida nutritiva com espinafre, abacate e maçã." }
  ]);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

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
              <Link to="/notificationsPaci" className={styles.linkHome}>
                Notificações
              </Link>
              <Link to="/receitasFavoritasPaciente" className={styles.linkHome}>
                Receitas Favoritas
              </Link>
              <Link to="/EditarPaciente" className={styles.linkHome}>
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

      <main>
        <h1>Receitas Favoritas</h1>
        <div className={styles.favoriteRecipes}>
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCard}>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
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
  );
}

export default ReceitasFavoritasPaciente;
