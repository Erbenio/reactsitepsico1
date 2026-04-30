import styles from './Sobre.module.css';

function Sobre() {
    return (
        <section id='sobre' className="container">
            <h2>Sobre</h2>
            <p>
                Atuo com Terapia Cognitivo-Comportamental (TCC),
                auxiliando no controle da ansiedade e desenvolvimento emocional.
            </p>
            <p>
                Você agenda um horário conforme sua disponibilidade, com total sigilo e acolhimento.
                As sessões ocorrem por videochamada em ambiente seguro e privado.
            </p>
            <p>
                É possível acompanhar sua evolução e receber apoio emocional constante.
                O foco está em escutar, orientar e fortalecer seus recursos internos.
            </p>

            <img 
                src="/psicologo.png"
                alt="Psicólogo"
                className={styles.imagem}
            />


        </section>
    )
}

export default Sobre;