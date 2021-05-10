import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { initialState, numberAdd2, reducer } from '../../store'


const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 01" />
            <div className="center">
                {state.user ?
                    <span className="text">
                        {state.user.name}
                    </span> :

                    <span className="text">
                        Sem usuario
                    </span>
                }

                <span className="text">
                    {state.number}
                </span>

                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)} > +2</button>
                </div>
            </div>

            <SectionTitle title="Exercicio 02" />
            <div style={{ margin: '0 auto' }}>
                <button className="btn" onClick={() => dispatch({ type: 'number_mult7' })}>*7</button>
                <button className="btn" onClick={() => dispatch({ type: 'number_div25' })}>/25</button>
                <button className="btn" onClick={() => dispatch({ type: 'number_int' })}>int</button>
            </div>
        </div>
    )
}

export default UseReducer
