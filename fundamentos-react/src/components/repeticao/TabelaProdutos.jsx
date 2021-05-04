import produtos from '../../data/produtos'

const TabelaProdutos = props => {
    return (
        <div>
            <table cellPadding={4} cellSpacing={1} border={1} style={{borderCollapse: 'collapse', width: '100%'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map(produto => {
                        return (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaProdutos