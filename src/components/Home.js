import styles from './Home.module.css';

function Home() {
    return (
        <section className="container">
            <h2>Cuidar da mente é cuidar da vida</h2>
            <p>Atendimento psicológico com foco em TCC</p>
            <img 
                src="/psicologo.png"
                alt="Psicólogo"
                className={styles.imagem}
            />


        </section>
    )
}

export default Home;