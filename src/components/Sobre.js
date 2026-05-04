import styles from './Sobre.module.css';
import banner from '../assets/banner1.png';

function Sobre() {
    return (
        <section id="sobre" className={styles.sobre}>
            <h2>Sobre</h2>

            <div className={styles.grid}>
                <div>
                <p>
                    Trabalho com a Terapia Cognitivo-Comportamental (TCC), uma abordagem prática
                    que ajuda a compreender pensamentos, emoções e comportamentos no dia a dia.
                </p>

                <p>
                    O processo terapêutico é um espaço de escuta, reflexão e construção conjunta,
                    respeitando o tempo e a individualidade de cada pessoa.
                </p>
                </div>

                <div>
                <p>
                    Os atendimentos são realizados de forma online, com horários agendados
                    previamente, oferecendo flexibilidade e comodidade.
                </p>

                <p>
                    A modalidade online permite que você esteja em um ambiente confortável,
                    economize tempo com deslocamentos e mantenha a continuidade do acompanhamento
                    de onde estiver.
                </p>
                </div>
            </div>

            <img 
                src={banner}
                alt="Psicólogo"
                className={styles.imagem}
            />


        </section>
    )
}

export default Sobre;