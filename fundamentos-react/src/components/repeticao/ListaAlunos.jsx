import React from 'react'
import alunos from '../../data/alunos'

const ListaAlunos = props => {
    return (
        <div>
            <ul>
                {alunos.map(aluno => <li key={aluno.id}>{aluno.nome} - {aluno.nota}</li>)}
            </ul>
        </div>
    )
}

export default ListaAlunos