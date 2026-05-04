import styles from './Servicos.module.css';

function CardServico({ nome, imagem, descricao }) {

    return (
        <div className={styles.card}>

            <img src={imagem} alt={nome} />

            <h3>{nome}</h3>

            <p>{descricao}</p>

            <button className="btn-primary"
                onClick={() => {
                            document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                        }}
            
            >
                Agendar
            </button>

        </div>
    )
}

export default CardServico;