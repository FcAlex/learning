import { useParams } from "react-router"

const Param = props => {
    const { id } = useParams()
    return (
        <aside className="Param">
            <h1>Param</h1>
            <p>Valor: {id}</p>
        </aside>
    )
}

export default Param