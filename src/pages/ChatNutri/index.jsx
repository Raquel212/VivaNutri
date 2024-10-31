import { useEffect, useRef, useState } from "react"
import { FaUserCircle } from "react-icons/fa";
import { HiDocumentReport, HiCalendar, HiUsers, HiBookOpen, HiChartBar, HiClipboardList, HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoVideocam } from "react-icons/io5"
// import { MdFlatware } from "react-icons/md"
// import { SiGoogleforms } from "react-icons/si"

import styles from "./ChatNutri.module.css"

function ChatNutri() {
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
        { sender: "Paciente", text: "Olá, estou querendo melhorar minha dieta." },
        { sender: "Paciente", text: "Também gostaria de algumas dicas para reduzir o estresse." },
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
      question: "Como posso melhorar minha alimentação?",
      message: "Olá! Como posso melhorar minha alimentação?",
    },
    {
      question: "O que fazer para perder peso?",
      message: "Estou preocupado com meu peso. Como posso perdê-lo de forma saudável?",
    },
    {
      question: "Como lidar com a ansiedade?",
      message: "Estou me sentindo ansioso(a). O que posso fazer para me sentir melhor?",
    },
    {
      question: "Preciso de ajuda com minha dieta.",
      message: "Gostaria de ajuda para criar uma dieta saudável. Pode me orientar?",
    },
    {
      question: "Como reduzir o estresse?",
      message: "Estou passando por momentos de estresse. Como posso reduzi-lo?",
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
        addMessage("Psicólogo", "Há várias técnicas de relaxamento que podemos explorar.")
      }, 1000)
    } else if (lowerCaseMessage.includes("perder peso")) {
      setTimeout(() => {
        addMessage("Nutricionista", "Posso te ajudar com um plano alimentar voltado para o emagrecimento.")
      }, 1000)
    } else if (lowerCaseMessage.includes("ansiedade")) {
      setTimeout(() => {
        addMessage("Psicólogo", "Vamos explorar formas de lidar com a ansiedade de maneira saudável.")
      }, 1000)
    } else {
      setTimeout(() => {
        addMessage("Nutricionista", "Conte-me mais sobre o que você precisa.")
      }, 1000)
      setTimeout(() => {
        addMessage("Psicólogo", "Estou aqui para te ouvir. Como você gostaria de abordar isso?")
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

export default ChatNutri
