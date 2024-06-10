import styles from './home.module.css'
import savings from '../../assets/savings.svg'
import { Link } from 'react-router-dom'
import LinkButton from '../layout/linkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            < LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} />
        </section>
    )
}

export default Home