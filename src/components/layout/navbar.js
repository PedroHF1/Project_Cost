import { Link } from 'react-router-dom'
import Container from './container'
import styles from './navbar.module.css'
import logo from '../../assets/costs_logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Inicio</Link> </li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link> </li>
                    <li className={styles.item}><Link to="/company">Empesa</Link> </li>
                    <li className={styles.item}><Link to="/contact">Contato</Link> </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar