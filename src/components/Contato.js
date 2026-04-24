import { useState } from 'react';
import styles from './Contato.module.css';

function Contato() {

    const [nome, setNome] = useState();
    const [enviado, setEnviado] = useState(false);

    function enviar(e) {
        e.preventDefault();
        setEnviado(true);
    }

    return (
        <section>
            <h2>Contato</h2>

            <form onSubmit={enviar} className={styles.form}>
                <input 
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setNome(e.target.value)}
                />

                <button type="submit">Enviar</button>
            </form>

            {enviado && <p>Obrigado pelo contato, {nome}!</p>}
        </section>
    )
}

export default Contato;