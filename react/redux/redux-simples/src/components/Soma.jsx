import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'

const Intervalo = (props) => {
    const {min, max} = props
    return (
        <Card title="Soma dos números" blue>
            <div className="intervalo">
                <span>
                    <strong>Resultado: </strong>
                    <span>{min+max}</span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProp)(Intervalo)