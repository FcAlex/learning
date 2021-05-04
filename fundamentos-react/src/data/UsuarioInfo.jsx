import If, {Else} from "../components/condicional/If"

export default props => {
    const {usuario} = props
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                Sejam bem vindo <strong>{usuario.nome}</strong>
            </If> */}

            <If test={usuario && usuario.nome}>
                Sejam bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    <strong>Sejam bem vindo Amigo!</strong>
                </Else>
            </If>
        </div>
    )
}