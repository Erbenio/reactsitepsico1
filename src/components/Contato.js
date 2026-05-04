import { useState } from 'react';
import styles from './Contato.module.css';

function Contato() {

    const [abrir, setAbrir] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const [form, setForm] = useState({
        nome: '',
        idade: '',
        telefone: '',
        tipo: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function enviar(e) {
        e.preventDefault();
        setEnviado(true);

        console.log(form); // depois você pode enviar pro backend ou WhatsApp
    }

    return (
        <section id="contato">
            <h2>Contato</h2>

            {!abrir && (
                <button onClick={() => setAbrir(true)}>
                    Agendar atendimento
                </button>
            )}

            {abrir && !enviado && (
                <form onSubmit={enviar} className={styles.form}>

                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="idade"
                        placeholder="Idade"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone / WhatsApp"
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="tipo"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Tipo de atendimento</option>
                        <option value="ansiedade">Ansiedade</option>
                        <option value="relacionamentos">Relacionamentos</option>
                        <option value="autoconhecimento">Autoconhecimento</option>
                        <option value="luto">Luto</option>
                        <option value="autoestima">Autoestima</option>
                        <option value="perdas">Perdas</option>
                        <option value="mudancas">Mudançass</option>
                        <option value="outro">Outro</option>
                    </select>

                    <button type="submit">Enviar</button>
                </form>
            )}

            {enviado && (
                <p>
                    Obrigado pelo contato, {form.nome}!  
                    Em breve entrarei em contato com você.
                </p>
            )}
        </section>
    );
}

export default Contato;