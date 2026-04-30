import CardServico from './CardServico';
import ansiedade from '../assets/ansiedade.png';
import depressao from '../assets/depressao.png';
import autoestima from '../assets/autoestima.png';
import relacionamentos from '../assets/relacionamentos.png';

function ListaServicos() {

    const servicos = [
        {
            nome: "Ansiedade",
            imagem: ansiedade,
            descricao: "Tratamento para ansiedade e controle emocional"
        },
        {
            nome: "Depressão",
            imagem: "/img2.jpg",
            descricao: "Acompanhamento psicológico para depressão"
        },
        {
            nome: "Autoestima",
            imagem: "/img3.jpg",
            descricao: "Desenvolvimento da autoconfiança"
        },
        {
            nome: "Relacionamentos",
            imagem: "/img4.jpg",
            descricao: "Melhoria nas relações interpessoais"
        },
        {
            nome: "Estresse",
            imagem: "/img5.jpg",
            descricao: "Controle do estresse diário"
        },
        {
            nome: "Orientação emocional",
            imagem: "/img6.jpg",
            descricao: "Apoio psicológico geral"
        }
    ];

    return (
        <section id='servicos'>
            <h2>Serviços</h2>

            <div className="grid">
                {servicos.map((item, index) => (
                    <CardServico
                        key={index}
                        nome={item.nome}
                        imagem={item.imagem}
                        descricao={item.descricao}
                    />
                ))}
            </div>
        </section>
    )
}

export default ListaServicos;