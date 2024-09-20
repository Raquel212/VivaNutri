import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './Sobre.module.css';

function Sobre() {
    return (
        <>
            <Header />
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Sobre o <span>VivaNutri</span></h1>
                    <p className={styles.description}>
                        VivaNutri, somos seu parceiro dedicado na jornada para alcançar saúde e bem-estar.
                        Nosso objetivo é proporcionar acesso rápido a nutricionistas e informações essenciais, além de
                        suporte psicológico especializado quando necessário. Entendemos que cada pessoa enfrenta desafios únicos na adoção e manutenção de hábitos saudáveis.
                        Por isso, oferecemos orientação personalizada e apoio contínuo para ajudar você a atingir seus objetivos de saúde de maneira sustentável e eficaz.
                    </p>
                </div>
                <img className={styles.heroImage} src="/Sobre.png" alt="Imagem Sobre" />
            </section>

            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>
                    <p className={styles.textoSobre}>
                        O VivaNutri reúne ferramentas e recursos que ajudam você a alcançar seus objetivos de saúde, com planos alimentares personalizados, receitas saudáveis e acompanhamento de nutricionistas. Além disso, você pode agendar consultas com psicólogos para cuidar do seu bem-estar emocional. Não importa se você está começando sua jornada de saúde ou buscando manter hábitos saudáveis, o VivaNutri está aqui para apoiar cada passo do seu caminho.
                    </p>

                    <h2 className={styles.tituloSobre}>Atendimento ao Cliente e Suporte</h2>
                    <p>Se precisar de ajuda, estamos aqui para você.</p>
                    <ol>
                        <li>
                            <strong>WhatsApp:</strong> Entre em contato direto conosco pelo WhatsApp para suporte rápido e personalizado.
                        </li>
                        <li>
                            <strong>E-mail:</strong> Mande suas dúvidas ou sugestões por e-mail, e nossa equipe responderá o mais rápido possível.
                        </li>
                        <li>
                            <strong>FAQ:</strong> Confira nossas perguntas frequentes para encontrar respostas imediatas e dicas úteis sobre o uso do VivaNutri.
                        </li>
                    </ol>
                    <p>
                        Estamos comprometidos em oferecer o melhor suporte para que você tenha uma experiência positiva e alcance seus objetivos de saúde com o VivaNutri.
                    </p>

                    <h2 className={styles.tituloSobre}>Escolha um assunto</h2>

                    <ul>
                        <li><strong>Gostaria de trabalhar conosco?</strong> Confira as oportunidades na nossa página de empregos.</li>
                        <li><strong>Tem uma dúvida sobre o VivaNutri?</strong> Entre em contato conosco diretamente pelo WhatsApp ou e-mail, e nossa equipe estará pronta para ajudar.</li>
                        <li><strong>Quer compartilhar uma sugestão? </strong> Adoramos ouvir de nossos usuários. Envie suas ideias e nos ajude a melhorar a plataforma.</li>
                        <li><strong>Problemas técnicos?</strong> Relate qualquer problema que você esteja enfrentando e resolveremos o mais rápido possível.</li>
                        <li><strong>Quer deixar um elogio ou feedback?</strong> Sua opinião é importante para nós. Envie seu feedback e ajude-nos a aprimorar o VivaNutri.</li>
                    </ul>
                </div>
            </section>

            <section className={styles.professionalSection}>
                <h2 className={styles.tituloProf}>Profissionais Credenciados em Quem Você Pode Confiar.</h2>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}><img src="https://assets.betterhelp.com/betterhelp_two/photos/therapists/g.campos.jpg?v=f4959109d99e" alt="Imagem01" /></div>
                    <div className={styles.gridItem}><img src="https://assets.betterhelp.com/betterhelp_two/photos/therapists/a.argianas.jpeg?v=f4959109d99e" alt="Imagem02" /></div>
                    <div className={styles.gridItem}><img src="https://assets.betterhelp.com/betterhelp_two/photos/therapists/p.casthely.jpg?v=f4959109d99e" alt="Imagem03" /></div>
                    <div className={styles.gridItem}><img src="https://assets.betterhelp.com/betterhelp_two/photos/therapists/k.bosin.jpeg?v=f4959109d99e" alt="Imagem04" /></div>
                    <div className={styles.gridItem}><img src="https://assets.betterhelp.com/betterhelp_two/photos/therapists/a.aguilar.jpeg?v=f4959109d99e" alt="Imagem05" /></div>
                    <div className={styles.gridItem}><img src="https://assets.betterhelp.com/betterhelp_two/photos/therapists/r.cheang.jpeg?v=f4959109d99e" alt="Imagem06" /></div>
                </div>
                <div className={styles.professionalText}>
                    <p>
                        Descubra a maior rede mundial de nutricionistas e psicólogos credenciados e experientes, prontos para ajudar você a enfrentar diversos desafios de saúde e bem-estar. Nossos profissionais oferecem orientação personalizada para questões como alimentação saudável, controle de peso, saúde mental, gerenciamento de estresse e muito mais. Com nossos especialistas, você recebe o mesmo nível de profissionalismo e qualidade que encontraria em um consultório, com a flexibilidade de se comunicar quando e como preferir.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Sobre;
