import { useEffect, useRef, useState } from "react"
import { FaUserCircle } from "react-icons/fa";
import { HiDocumentReport, HiCalendar, HiUsers, HiChartBar, HiClipboardList, HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoVideocam } from "react-icons/io5"
// import { MdFlatware } from "react-icons/md"
// import { SiGoogleforms } from "react-icons/si"

import styles from "./ChatPsico.module.css"

function ChatPsico() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const initialMessagesAdded = useRef(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  const addMessage = (sender, text) => {
    setMessages((prevMessages) => [...prevMessages, { sender, text }])
  }

  useEffect(() => {
    if (!initialMessagesAdded.current) {
      const initialMessages = [
        { sender: "Paciente", text: "Oi, não estou me sentido bem." },
        // { sender: "Paciente", text: "Também gostaria de algumas dicas para reduzir o estresse." },
      ]

      initialMessages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.text)
        }, 1000 * (index + 1))
      })

      initialMessagesAdded.current = true
    }
  }, [])

  const suggestionQuestions = [
    {
      question: "Como está se sentido hoje?",
      message: "Como está se sentido hoje?",
    },
    {
      question: "O que fazer para tentar se distrair?",
      message: "O que fazer para tentar se distrair?",
    },
    {
      question: "Como voce tem lidado com a ansiedade?",
      message: "Como voce tem lidado com a ansiedade?",
    },
    {
      question: "Gostaria de ajuda. Pode me orientar?.",
      message: "Gostaria de ajuda. Pode me orientar?",
    },
    {
      question: "Irei te ajudar, mas precisa de mais sessões",
      message: "Irei te ajudar, mas precisa de mais sessões",
    },
  ]

  const respondToMessage = (patientMessage) => {
    const lowerCaseMessage = patientMessage.toLowerCase()

    if (lowerCaseMessage.includes("melhorar minha alimentação")) {
      setTimeout(() => {
        addMessage("Nutricionista", "Claro! Vamos montar uma estratégia de alimentação saudável.")
      }, 1000)
    } else if (lowerCaseMessage.includes("reduzir o estresse")) {
      setTimeout(() => {
        addMessage("Paciente", "Ando muito estressado.")
      }, 1000)
    } else if (lowerCaseMessage.includes("perder peso")) {
      setTimeout(() => {
        addMessage("Nutricionista", "Posso te ajudar com um plano alimentar voltado para o emagrecimento.")
      }, 1000)
    } else if (lowerCaseMessage.includes("ansiedade")) {
      setTimeout(() => {
        addMessage("Paciente", "Estou um pouco perdido e sem foco, tem como ajudar?.")
      }, 1000)
    } else {
      setTimeout(() => {
        addMessage("Nutricionista", "Conte-me mais sobre o que você precisa.")
      }, 1000)
      setTimeout(() => {
        addMessage("Paciente", "Queria ter ajuda.")
      }, 2000)
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      addMessage("Psicologo", newMessage.trim())
      respondToMessage(newMessage.trim())
      setNewMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <header className={styles.headerHomePacie}>
        <div className={styles.logo}>
          <Link to="/homePsico">
            <img src="/Logo_Sem.png" alt="Logo" className={styles.imagemLogo} />
          </Link>
        </div>

        <div className={styles.userName}>
          <FaUserCircle onClick={toggleUserMenu} className={styles.userIcon} />
          {userMenuOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/notifications" className={styles.linkHome}>Notificações</Link>
              <Link to="/EditarPsico" className={styles.linkHome}>Editar Perfil</Link>
              <Link to="/entrar" className={styles.linkHome}>Logoff</Link>
            </div>
          )}
        </div>
      </header>

      <nav className={styles.sidebar}>
      <ul>
          <li>
            <Link to="/consultaPsico">
              <div className={styles.linkSlider}>
                <HiCalendar  className={styles.icon} />
                <p>Consultas</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarClientesPsico">
              <div className={styles.linkSlider}>
                <HiUsers className={styles.icon} />
                <p>Gerenciar Clientes</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/gerenciarMental">
              <div className={styles.linkSlider}>
                <HiDocumentReport className={styles.icon} />
                <p>Gerenciar Bem-Estar </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/questionarioPsico">
              <div className={styles.linkSlider}>
                <HiClipboardList className={styles.icon} />
                <p>Questiónarios </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/chatPsico">
              <div className={styles.linkSlider}>
                <HiChatAlt2 className={styles.icon} />
                <p>Chat </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/analisarProgressoPsico">
              <div className={styles.linkSlider}>
                <HiChartBar className={styles.icon} />
                <p>Analisar Progresso</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.mainContent}>
        <h1>Chat Psicologo</h1>
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.title}>VivaNutri Chat</div>
            <div className={styles.videoCallButtons}>
              <a
                href="https://meet.google.com/qow-eqks-hzb"
                target="_blank"
                rel="noopener noreferrer"
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
                  msg.sender === "Psicologo"
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

          <div className={styles.suggestionsContainer}>
            <h3>Sugestões de Perguntas:</h3>
            <ul className={styles.suggestionList}>
              {suggestionQuestions.map((suggestion, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setNewMessage(suggestion.message)
                      handleSendMessage()
                    }}
                    className={styles.suggestionButton}
                  >
                    {suggestion.question}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.inputContainer}>
            <textarea
              className={styles.messageInput}
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
              Enviar
            </button>
          </div>
        </div>
      </main>


      <footer className={styles.footerHomeP}>
        <p className={styles.copyright}>&copy; 2024 VivaNutri</p>
        <ul className={styles.links}>
          <li className={styles.linksLi}><a href="#">Política de Privacidade</a></li>
          <li className={styles.linksLi}><a href="#">Termos de Uso</a></li>
        </ul>
      </footer>
    </>
  )
}

export default ChatPsico
