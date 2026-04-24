function ListaServicos({ itens }) {

    return (
        <>
            {itens && itens.length > 0 ? (
                itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            ) : (
                <p>Nenhum serviço disponível</p>
            )}
        </>
    )
}

export default ListaServicos;