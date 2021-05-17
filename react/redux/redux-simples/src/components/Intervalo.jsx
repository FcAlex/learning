import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/actions/numeros'

const Intervalo = (props) => {
    const { min, max } = props

    return (
        <Card title="Intervalo de números" red>
            <div className="intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} 
                        onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} 
                         onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

//mapActionCreatorToProps
function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            //action creator => action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            //action creator => action
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)