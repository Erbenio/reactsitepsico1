function Mensagem({ nome }) {

    return (
        <>
            {nome && (
                <p>Obrigado pelo contato, {nome}!</p>
            )}
        </>
    )
}

export default Mensagem;