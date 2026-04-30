import CardServico from './CardServico';
import styles from './Servicos.module.css';

import ansiedade from '../assets/ansiedade.png';
import depressao from '../assets/depressao.png';
import autoestima from '../assets/autoestima.png';
import rel_interpes from '../assets/rel_interpes.png';
import relacionamentos from '../assets/relacionamentos.png';
import apoio from '../assets/apoio.png';
import atendimentos from '../assets/atendimentos.png';

function Servicos() {

    const lista = [
        {
            nome: "Ansiedade",
            imagem: ansiedade,
            descricao: "Tratamento para ansiedade"
        },

        {
            nome: "Depressão",
            imagem: depressao,
            descricao: "Tratamento para depressão"
        },

        {
            nome: "Autoestima",
            imagem: autoestima,
            descricao: "Autoconhecimento e desenvolvimento da autoestima"
        },

        {
            nome: "Relacionamento Interpessoal",
            imagem: rel_interpes,
            descricao: "Tratamento para relacionamentos interpessoais"
        },

        {
            nome: "Relacionamentos",
            imagem: relacionamentos,
            descricao: "Tratamento para relacionamentos"
        },

        {
            nome: "Apoio emocional",
            imagem: apoio,
            descricao: "Apoio Emocional"
        },
        
    ];

    const lista2 = [
        {
            nome: "Atendimentos",
            imagem: atendimentos,
            descricao: "Atendimentos Online"
        },

    ];

    return (
        <section id="Servicos">
            <h2>Serviços</h2>

            <div className={styles.grid}>
                {lista.map((item, index) => (
                    <CardServico
                        key={index}
                        nome={item.nome}
                        imagem={item.imagem}
                        descricao={item.descricao}
                    />
                ))},
            </div>

            <h2>Atendimentos</h2>

            <div className={styles.cardDestaque}>
                
                <img src={lista2[0].imagem} alt={lista2[0].nome} />

                <div className={styles.textoDestaque}>
                    <h3>{lista2[0].nome}</h3>
                    <p>{lista2[0].descricao}</p>

                    <button className="btn-primary">
                        Agendar
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Servicos;