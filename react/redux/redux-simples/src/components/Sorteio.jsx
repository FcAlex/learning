import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = (props) => {
    const { max, min } = props
    return (
        <Card title="Sorteio de números" purple>
            <div className="media">
                <span>
                    <strong>Resultado: </strong>
                    <span>{parseInt(Math.random()*(max - min))+min}</span>
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

export default connect(mapStateToProps)(Sorteio)