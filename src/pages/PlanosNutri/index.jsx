import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiDocumentReport, HiCalendar, HiUsers, HiBookOpen, HiChartBar, HiClipboardList, HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./PlanosNutri.module.css";

function PlanosNutri() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
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

            <main className={styles.mainContentPlano}>
                <h2 className={styles.tituloPlano}>Cadastrar Plano Alimentar</h2>
                <form className={styles.planFormBem}>
                    <label htmlFor="daySelect" className={styles.formLabelPlano}>Dia da Semana</label>
                    <select id="daySelect" className={styles.formInputPlano}>
                        <option value="segunda">Segunda-feira</option>
                        <option value="terca">Terça-feira</option>
                        <option value="quarta">Quarta-feira</option>
                        <option value="quinta">Quinta-feira</option>
                        <option value="sexta">Sexta-feira</option>
                        <option value="sabado">Sábado</option>
                        <option value="domingo">Domingo</option>
                    </select>

                    <label htmlFor="breakfast" className={styles.formLabelPlano}>Café da Manhã</label>
                    <input type="text" id="breakfast" className={styles.formInputPlano} placeholder="O que comer no café da manhã" />

                    <label htmlFor="morningSnack" className={styles.formLabelPlano}>Lanche da Manhã</label>
                    <input type="text" id="morningSnack" className={styles.formInputPlano} placeholder="O que comer no lanche da manhã" />

                    <label htmlFor="lunch" className={styles.formLabelPlano}>Almoço</label>
                    <input type="text" id="lunch" className={styles.formInputPlano} placeholder="O que comer no almoço" />

                    <label htmlFor="afternoonSnack" className={styles.formLabelPlano}>Lanche da Tarde</label>
                    <input type="text" id="afternoonSnack" className={styles.formInputPlano} placeholder="O que comer no lanche da tarde" />

                    <label htmlFor="dinner" className={styles.formLabelPlano}>Jantar</label>
                    <input type="text" id="dinner" className={styles.formInputPlano} placeholder="O que comer no jantar" />

                    <label htmlFor="supper" className={styles.formLabelPlano}>Ceia</label>
                    <input type="text" id="supper" className={styles.formInputPlano} placeholder="O que comer na ceia" />

                    <button type="submit" className={styles.submitButtonPlano}>Salvar Plano</button>
                </form>
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

export default PlanosNutri;
