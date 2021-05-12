import IndiretaFilho from "./IndiretaFilho"
import { useState } from "react"

export default props => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>   
            <div>
                <span>{nome}</span> <br/>
                <span>{idade}</span> <br/>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}