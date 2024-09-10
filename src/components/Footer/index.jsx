import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className= {styles.footer}>
            <p className={styles.copyright}>&copy; 2024 VivaNutri</p>
            <ul className={styles.links}>
                <li className={styles.linksLi}><Link to= "/sobre">Sobre Nós</Link></li>
                <li className={styles.linksLi}><a href="#">Política de Privacidade</a></li>
                <li className={styles.linksLi}><a href="#">Termos de Uso</a></li>
                
            </ul>
        </footer>
    )
}

export default Footer