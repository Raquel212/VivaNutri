import {
    FaBell,
    FaCalendarAlt,
    FaChartLine,
    FaClipboardList,
    FaEdit,
    FaHandsHelping,
    FaLifeRing,
    FaUserMd,
    FaUtensils,
  } from "react-icons/fa"
  import { Link } from "react-router-dom"
  import Carousel from "../../components/Carousel"
  import Container from "../../components/Container"
  import Footer from "../../components/Footer"
  import Header from "../../components/Header"
  import styles from "./Home.module.css"
  
  function Home() {
    return (
      <>
        <Header />
        <Container>
          <section className={styles.home}>
            <div className={styles.containerHome}>
              <figure>
                <img
                  className={styles.img_home}
                  src="/Img_Home.png"
                  alt="Imagem de Home"
                />
              </figure>
              <div className={styles.apresentacao}>
                <h1>
                  Transforme sua vida com uma alimentação consciente.
                  <br />
                  <span>
                    Obtenha orientação nutricional especializada e veja como a
                    psicologia pode fazer a diferença!
                  </span>
                </h1>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                  Saiba mais
                </Link>
              </div>
            </div>
          </section>
          <hr />
          <section>
            <div className={styles.funcionalidade}>
              <h2>
                Fucionalidades do{" "}
                <span className={styles.txtSobre}>VivaNutri</span>
              </h2>
              {/* Ainda estou pensando!!!! */}
              <p>
                Descubra soluções personalizadas para desafios de saúde e
                bem-estar, com orientação nutricional
                <br /> e suporte emocional de especialistas
              </p>
            </div>
  
            <div className={styles.container}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaUserMd />
                </div>
                <h4 className={styles.titloBox}>
                  Acompanhamento direto com nutricionista e psicólogo
                </h4>
                <p className={styles.txtBox}>
                  {" "}
                  A plataforma oferece interação direta com profissionais de
                  saúde, permitindo que os usuários obtenham orientação
                  personalizada tanto na área nutricional quanto no apoio
                  psicológico.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaCalendarAlt />
                </div>
                <h4 className={styles.titloBox}>Agendamento e Consultas</h4>
                <p className={styles.txtBox}>
                  {" "}
                  Os usuários podem agendar consultas com nutricionistas e
                  psicólogos, facilitando o acesso a profissionais de saúde
                  conforme suas necessidades e disponibilidade.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaBell />
                </div>
                <h4 className={styles.titloBox}>Notificações e Lembretes</h4>
                <p className={styles.txtBox}>
                  {" "}
                  A plataforma envia notificações e lembretes automáticos para que
                  os usuários não percam consultas, sigam seus planos alimentares
                  e mantenham a regularidade no acompanhamento psicológico.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaChartLine />
                </div>
                <h4 className={styles.titloBox}>Ferramentas de Monitoramento</h4>
                <p className={styles.txtBox}>
                  {" "}
                  O VivaNutri oferece ferramentas que permitem aos usuários
                  monitorar sua saúde, como o progresso de seus planos alimentares
                  e metas de bem-estar, promovendo um acompanhamento contínuo e
                  eficaz.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaUtensils />
                </div>
                <h4 className={styles.titloBox}>
                  Planos Alimentares Personalizados
                </h4>
                <p className={styles.txtBox}>
                  {" "}
                  Planos alimentares feitos sob medida para atender às suas
                  necessidades e objetivos individuais, levando em consideração
                  suas condições de saúde, preferências alimentares e metas de
                  bem-estar.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaClipboardList />
                </div>
                <h4 className={styles.titloBox}>Avaliação Inicial</h4>
                <p className={styles.txtBox}>
                  {" "}
                  Ao iniciar o uso da plataforma, os usuários passam por uma
                  avaliação inicial que ajuda a personalizar os serviços
                  oferecidos, garantindo que cada plano seja adequado às suas
                  necessidades específicas.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaHandsHelping />
                </div>
                <h4 className={styles.titloBox}>Suporte Emocional</h4>
                <p className={styles.txtBox}>
                  {" "}
                  Além do acompanhamento nutricional, o VivaNutri oferece suporte
                  emocional, ajudando os usuários a lidar com questões emocionais
                  que possam impactar sua saúde e bem-estar.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaEdit />
                </div>
                <h4 className={styles.titloBox}>Criação e Gestão de Planos</h4>
                <p className={styles.txtBox}>
                  {" "}
                  A plataforma permite que os profissionais criem, gerenciem e
                  ajustem planos de saúde para cada usuário, garantindo que as
                  intervenções sejam dinâmicas e adaptadas às mudanças nas
                  necessidades dos usuários.
                </p>
              </div>
  
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaLifeRing />
                </div>
                <h4 className={styles.titloBox}>Suporte</h4>
                <p className={styles.txtBox}>
                  {" "}
                  O VivaNutri fornece suporte contínuo aos usuários, oferecendo
                  assistência técnica e esclarecimento de dúvidas, garantindo que
                  todos possam utilizar a plataforma de forma eficiente e segura.
                </p>
              </div>
            </div>
          </section>
          <hr />
        </Container>
        <Carousel />
      <Footer/>
      </>
    )
  }
  
  export default Home
  