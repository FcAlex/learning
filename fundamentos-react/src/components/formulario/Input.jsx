import './Input.css'
import { useState } from "react"

export default props => {
    const [valor, setValor] = useState('')

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div className="input">
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/> {/* Componente controlado */}
            <input value={undefined} /> {/* Componente não controlado */}
        </div>
    )
}