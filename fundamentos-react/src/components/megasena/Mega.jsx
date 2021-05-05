import './Mega.css'
import { useState } from "react"

export default props => {
    const [valor, setValor] = useState(0)
    const [numSorteados, setNumSorteados] = useState([])

    function gerarNumero(qtd) {
        const res = []
        for(let i = 0; i < qtd; i++) {
            let numeroSorteado = parseInt(Math.random() * 59) + 1
            if(!res.includes(numeroSorteado))
                res.push(numeroSorteado)
        }

        return res.sort((n1, n2) => n1 - n2)
    }

    return (
        <div className="Mega">
            <h2>MegaSena</h2>
            
            <label for="qtdNum">Qtd de números: </label>
            <input id="qtdNum" type="number" value={valor} onChange={e => setValor(e.target.value)} min={0} max={60}/>
            <button onClick={_ => setNumSorteados(gerarNumero(valor))}>Sortear</button>

            <h3>Numeros Sorteados</h3>
            {numSorteados.map(num => <span>{num} </span>)}
        </div>
    )

}