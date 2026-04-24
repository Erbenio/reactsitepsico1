import { FaBrain, FaHeart, FaUser, FaUserAlt, FaUserFriends, FaUserPlus, FaUsersCog, FaUserTimes } from "react-icons/fa";
import styles from './Servicos.module.css';

function Servicos() {

    const lista = [
        { nome: "Atendimento Individual, Casais, Famílias", icone: <FaUserFriends/> },
        { nome: "Tratamento para Ansiedade", icone: <FaBrain /> },
        { nome: "Apoio Emocional", icone: <FaHeart /> },
        { nome: "Adolescentes, Adultos, Idosos", icone: <FaUser /> }
    ];

    return (
        <section>
            <h2>Serviços</h2>

            <div className={styles.grid}>
                {lista.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{item.icone}</div>
                        <p>{item.nome}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Servicos;