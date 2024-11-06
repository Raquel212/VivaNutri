import { useEffect, useRef, useState } from "react"
import { FaBlender, FaUserCircle } from "react-icons/fa"
import { HiDocumentReport } from "react-icons/hi"
import { IoBarChart, IoChatbox, IoFastFood, IoVideocam } from "react-icons/io5"
import { MdFlatware } from "react-icons/md"
import { SiGoogleforms } from "react-icons/si"
import { Link } from "react-router-dom"
import styles from "./ChatPaciente.module.css"

function ChatPaciente() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const initialMessagesAdded = useRef(false) // Ref para controlar a adição das mensagens iniciais

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  const addMessage = (sender, text) => {
    setMessages((prevMessages) => [...prevMessages, { sender, text }])
  }

  useEffect(() => {
    if (!initialMessagesAdded.current) {
      // Adiciona mensagens apenas se ainda não foram adicionadas
      const initialMessages = [
        { sender: "Nutricionista", text: "Olá! Como posso te ajudar hoje?" },
        { sender: "Psicólogo", text: "Olá! Como você está se sentindo?" },
      ]

      initialMessages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.text)
        }, 1000 * (index + 1))
      })

      initialMessagesAdded.current = true // Marca como mensagens já adicionadas
    }
  }, [])

  const suggestionQuestions = [
    {
      question: "Como melhorar minha alimentação?",
      message: "Olá! Como posso melhorar minha alimentação?",
    },
    {
      question: "O que fazer para perder peso?",
      message:
        "Estou preocupado com meu peso. Como posso perdê-lo de forma saudável?",
    },
    {
      question: "Como lidar com ansiedade?",
      message:
        "Estou me sentindo ansioso(a). O que posso fazer para me sentir melhor?",
    },
    {
      question: "Preciso de ajuda com minha dieta.",
      message:
        "Gostaria de ajuda para criar uma dieta saudável. Pode me orientar?",
    },
    {
      question: "Como reduzir o estresse?",
      message: "Estou passando por momentos de estresse. Como posso reduzi-lo?",
    },
  ]

  const respondToMessage = (patientMessage) => {
    const lowerCaseMessage = patientMessage.toLowerCase()

    if (lowerCaseMessage.includes("olá") || lowerCaseMessage.includes("oi")) {
      setTimeout(() => {
        addMessage(
          "Nutricionista",
          "Olá! Em que posso te ajudar com sua alimentação?"
        )
      }, 1000)
      setTimeout(() => {
        addMessage("Psicólogo", "Olá! Como tem se sentido ultimamente?")
      }, 2000)
    } else if (
      lowerCaseMessage.includes("ajuda") ||
      lowerCaseMessage.includes("preciso")
    ) {
      setTimeout(() => {
        addMessage(
          "Nutricionista",
          "Claro! Conte-me mais sobre suas necessidades alimentares."
        )
      }, 1000)
      setTimeout(() => {
        addMessage(
          "Psicólogo",
          "Estou aqui para te ouvir. Como posso ajudar você emocionalmente?"
        )
      }, 2000)
    } else if (
      lowerCaseMessage.includes("obesidade") ||
      lowerCaseMessage.includes("peso")
    ) {
      setTimeout(() => {
        addMessage(
          "Nutricionista",
          "Entendi. Vamos trabalhar juntos para alcançar seus objetivos de peso."
        )
      }, 1000)
    } else if (
      lowerCaseMessage.includes("ansiedade") ||
      lowerCaseMessage.includes("estresse")
    ) {
      setTimeout(() => {
        addMessage(
          "Psicólogo",
          "Sinto muito que você esteja se sentindo assim. Vamos encontrar maneiras de gerenciar isso juntos."
        )
      }, 1000)
    } else {
      setTimeout(() => {
        addMessage(
          "Nutricionista",
          "Interessante! Pode me contar mais sobre isso?"
        )
      }, 1000)
      setTimeout(() => {
        addMessage(
          "Psicólogo",
          "Entendi. Como você gostaria de abordar esse assunto?"
        )
      }, 2000)
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      addMessage("Paciente", newMessage.trim())
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
              {/* <Link to="/" className={styles.linkHome}>
                Nutricionista
              </Link>
              <Link to="/" className={styles.linkHome}>
                Psicólogo
              </Link> */}
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

      <main className={styles.mainContent}>
        <h1>Chat Paciente</h1>
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
              {/* <a
                href="https://meet.google.com/psicologo-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Chamada de Vídeo com Psicólogo"
              >
                <IoVideocam />
              </a> */}
            </div>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  ${styles.message} ${
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
            <button className={styles.sendButton} onClick={handleSendMessage}>
              Enviar
            </button>
          </div>
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

export default ChatPaciente
