import style from './Header.module.css';

function Header() {

    const nome = "Francisco Erbenio Vasconcelos"; // 🔁 ALTERAR

    return (
        <div className={style.header}>
            <h1>Psicólogo {nome}</h1>
            <p>Abordagem: Terapia Cognitivo-Comportamental</p>
        </div>
    )
}

export default Header;