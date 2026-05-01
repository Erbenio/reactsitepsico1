import style from './Header.module.css';

function Header() {

    const nome = "Francisco Erbenio Vasconcelos"; // 🔁 ALTERAR

    return (
        <div className={style.header}>
            <h1>Psicólogo {nome}</h1>

            <navbar className={style.navbar}>
                <a href="#">Início</a>
                <a href="#servicos">Serviços</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </navbar>

        </div>
    )
}

export default Header;
