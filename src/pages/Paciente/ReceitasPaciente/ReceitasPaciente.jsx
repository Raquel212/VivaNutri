import { useState } from "react";
import { FaBlender, FaUserCircle, FaHeart, FaRegHeart } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoBarChart, IoChatbox, IoFastFood } from "react-icons/io5";
import { MdFlatware } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./ReceitasPaciente.module.css";
import { SiGoogleforms } from "react-icons/si";

function ReceitasFavoritasPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [favoritas, setFavoritas] = useState(new Set());

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Exemplo de receitas com vídeos do YouTube e informações adicionais
  const receitas = [
    { 
      id: 1, 
      nome: "Cheesecake", 
      video: "0bGuTy1fWHw", // Código do vídeo do YouTube
      ingredientes: ["Cream Cheese", "Biscoito", "Açúcar", "Manteiga"], 
      preparo: "Misture todos os ingredientes e leve ao forno.", 
      estrelas: 4, 
      tempoPreparo: "44 min", 
      porcoes: 8, 
      valorNutricional: "534,00 kcal", 
      detalhesNutricionais: { 
        carboidratos: "30g",
        proteina: "10g",
        gordura: "20g",
        fibra: "2g",
        monoinsaturadas: "8g",
        poliinsaturadas: "5g"
      }
    },
    { 
      id: 2, 
      nome: "Salada de Quinoa", 
      video: "0bGuTy1fWHw", // Código do vídeo do YouTube
      ingredientes: ["Quinoa", "Tomate", "Pepino", "Limão"], 
      preparo: "Cozinhe a quinoa e misture todos os ingredientes.", 
      estrelas: 5, 
      tempoPreparo: "20 min", 
      porcoes: 4, 
      valorNutricional: "200,00 kcal", 
      detalhesNutricionais: { 
        carboidratos: "45g",
        proteina: "8g",
        gordura: "5g",
        fibra: "6g",
        monoinsaturadas: "2g",
        poliinsaturadas: "1g"
      }
    }
  ];

  const toggleFavorita = (id) => {
    const updatedFavoritas = new Set(favoritas);
    if (updatedFavoritas.has(id)) {
      updatedFavoritas.delete(id);
    } else {
      updatedFavoritas.add(id);
    }
    setFavoritas(updatedFavoritas);
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
                <FaBlender className={styles.icon} />
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
        <h1>Receitas</h1>
        <div className={styles.receitasContainer}>
          {receitas.map(receita => (
            <div key={receita.id} className={styles.receitaCard}>
              <iframe
                className={styles.receitaVideo}
                src={`https://www.youtube.com/embed/${receita.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2>{receita.nome}</h2>
              <div className={styles.receitaInfo}>
                <span>{`⭐ ${receita.estrelas}`}</span>
                <span>{`⏳ ${receita.tempoPreparo}`}</span>
                <span>{`${receita.porcoes} porções`}</span>
              </div>
              <p><strong>Ingredientes:</strong> {receita.ingredientes.join(", ")}</p>
              <p><strong>Modo de Preparo:</strong> {receita.preparo}</p>
              <div className={styles.receitaValores}>
                <div className={styles.nutritionalDetails}>
                  <p>
                    <strong>Carboidratos:</strong> {receita.detalhesNutricionais.carboidratos}
                  </p>
                  <p>
                    <strong>Proteínas:</strong> {receita.detalhesNutricionais.proteina}
                  </p>
                  <p>
                    <strong>Gordura:</strong> {receita.detalhesNutricionais.gordura}
                  </p>
                  <p>
                    <strong>Fibra:</strong> {receita.detalhesNutricionais.fibra}
                  </p>
                  <p>
                    <strong>Monoinsaturadas:</strong> {receita.detalhesNutricionais.monoinsaturadas}
                  </p>
                  <p>
                    <strong>Poli-insaturadas:</strong> {receita.detalhesNutricionais.poliinsaturadas}
                  </p>
                </div>
                <button onClick={() => toggleFavorita(receita.id)} className={styles.favoritarButton}>
                  {favoritas.has(receita.id) ? ( <FaHeart className={styles.favoritarIcon} /> ) : ( <FaRegHeart className={styles.favoritarIcon} /> )}
                </button>
              </div>
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
