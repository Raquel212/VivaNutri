import { useState, useEffect } from "react";
import {  FaBlender , FaUserCircle } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoBarChart, IoChatbox, IoFastFood, IoVideocam } from "react-icons/io5";
import { MdFlatware } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./ChatPaciente.module.css";
import { SiGoogleforms } from "react-icons/si";

function ChatPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const addMessage = (sender, text) => {
    setMessages((prevMessages) => [...prevMessages, { sender, text }]);
  };

  useEffect(() => {
    const initialMessages = [
      { sender: "Nutricionista", text: "Olá! Como posso te ajudar hoje?" },
      { sender: "Psicólogo", text: "Olá! Como você está se sentindo?" },
    ];

    initialMessages.forEach((msg, index) => {
      setTimeout(() => {
        addMessage(msg.sender, msg.text);
      }, 1000 * (index + 1));
    });
  }, []);

  const respondToMessage = (patientMessage) => {
    const lowerCaseMessage = patientMessage.toLowerCase();

    if (lowerCaseMessage.includes("olá") || lowerCaseMessage.includes("oi")) {
      setTimeout(() => {
        addMessage("Nutricionista", "Olá! Em que posso te ajudar com sua alimentação?");
      }, 1000);
      setTimeout(() => {
        addMessage("Psicólogo", "Olá! Como tem se sentido ultimamente?");
      }, 2000);
    } else if (lowerCaseMessage.includes("ajuda") || lowerCaseMessage.includes("preciso")) {
      setTimeout(() => {
        addMessage("Nutricionista", "Claro! Conte-me mais sobre suas necessidades alimentares.");
      }, 1000);
      setTimeout(() => {
        addMessage("Psicólogo", "Estou aqui para te ouvir. Como posso ajudar você emocionalmente?");
      }, 2000);
    } else if (lowerCaseMessage.includes("obesidade") || lowerCaseMessage.includes("peso")) {
      setTimeout(() => {
        addMessage("Nutricionista", "Entendi. Vamos trabalhar juntos para alcançar seus objetivos de peso.");
      }, 1000);
    } else if (lowerCaseMessage.includes("ansiedade") || lowerCaseMessage.includes("estresse")) {
      setTimeout(() => {
        addMessage("Psicólogo", "Sinto muito que você esteja se sentindo assim. Vamos encontrar maneiras de gerenciar isso juntos.");
      }, 1000);
    } else {
      setTimeout(() => {
        addMessage("Nutricionista", "Interessante! Pode me contar mais sobre isso?");
      }, 1000);
      setTimeout(() => {
        addMessage("Psicólogo", "Entendi. Como você gostaria de abordar esse assunto?");
      }, 2000);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      addMessage("Paciente", newMessage.trim());
      respondToMessage(newMessage.trim());
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
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
              <Link to="/notifications" className={styles.linkHome}>Notificações</Link>
              <Link to="/receitasFavoritasPaciente" className={styles.linkHome}>
                Receitas Favoritas
              </Link>
              <Link to="/nutricionista" className={styles.linkHome}>Nutricionista</Link>
              <Link to="/psicologo" className={styles.linkHome}>Psicólogo</Link>
              <Link to="/edit-profile" className={styles.linkHome}>Editar Perfil</Link>
              <Link to="/entrar" className={styles.linkHome}>Logoff</Link>
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
        <h1>Chat Paciente</h1>
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.title}>VivaNutri Chat</div>
            <div className={styles.videoCallButtons}>
              <a
                href="https://meet.google.com/nutricionista-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Chamada de Vídeo com Nutricionista"
              >
                <IoVideocam />
              </a>
              <a
                href="https://meet.google.com/psicologo-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Chamada de Vídeo com Psicólogo"
              >
                <IoVideocam />
              </a>
            </div>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.sender === "Paciente"
                    ? styles.messagePaciente
                    : msg.sender === "Nutricionista"
                    ? styles.messageNutricionista
                    : styles.messagePsicologo
                }`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className={styles.chatInput}
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
              <IoChatbox />
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footerHomeP}>
        <p>&copy; 2024 VivaNutri</p>
        <ul>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default ChatPaciente;
