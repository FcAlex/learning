import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(s1, s2) {
    return [...s1].map((el, i) => {
        return `${el}${s2[i] || ''}`
    }).join("")
}

const UseRef = (props) => {
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(() => {
        count.current++
        myInput2.current.focus()
    }, [value])

    useEffect(() => {
        count.current++
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio 01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} ref={myInput1} />
            </div>

            <SectionTitle title="Exercicio 02" />
            <div className="center">
                <input type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} ref={myInput2} />
            </div>
        </div>
    )
}

export default UseRef
